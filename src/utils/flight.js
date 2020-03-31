const fetch = require('fetch-filecache-for-crawling');
const moment = require('moment');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const caseData = require('../data/newData3.json');
const flightCache = require('../data/flightCache.json');

const saveData = (data, fileName) => {
  const NEW_DATA_PATH = path.resolve(__dirname, fileName);
  fs.writeFileSync(NEW_DATA_PATH, JSON.stringify(data));
};


const fetchFlightData = async (
  flightNumber,
  flightDate,
  targetDate = flightDate
) => {
  const date = flightDate ? moment(flightDate) : moment();
  const target = targetDate ? moment(targetDate) : moment();
  const queryDate = moment(date).format('YYYY-MM-DD');

  let flightData = {}; // the returned object

  //actual stuff
  console.log(
    `https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`
  );
  const html = await fetch(
    `https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`
  ).then(res => res.text());

  // const data = await torReq(`https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`).then(async data => {
  //   console.log(data.statusCode)
  //   if (data.statusCode === 200) return data.body
  //   tr.newTorSession(console.log);
  //   return await torReq(`https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`).then(data => data.body)
  // });
  // TEST HTML
  // const html = fs.readFileSync(
  //   path.resolve(__dirname + '/ek450test.html'),
  //   'utf8'
  // );

  const dom = new JSDOM(html).window.document;
  console.log(dom.title);

  // get the 'Arrival' and 'Departure' elements
  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    // get scheduled and actual times
    const flightEvent = schedule.querySelector('.flightInfo-date').textContent;
    const displayDate = target.format('D MMM, YYYY');

    // match arrival with target date (since our info usually has arrival date)
    if (flightEvent.startsWith(`Arrival: `)) {
      if (flightEvent.startsWith(`Arrival: ${displayDate}`)) {
        // go up to schedule again, to get both Dep. and Arr. data
        dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
          const flightEvent = schedule.querySelector('.flightInfo-date');

          // get airport name without initials, helps withgeocoding
          const airport = schedule
            .querySelector('.flightInfo-airport')
            .textContent.replace(/ \(...\)/, '');

          // get only actual time
          schedule
            .querySelectorAll('.flightInfo-dateItem')
            .forEach(dateItem => {
              const dateLabel = dateItem.querySelector('.flightInfo-dateLabel');
              if (dateLabel && dateLabel.textContent === 'Actual:') {
                const dateTime = dateItem.querySelector('.flightInfo-dateTime');

                // Arr/Dep and date
                const [eventType, eventDate] = flightEvent.textContent.split(
                  ': '
                );
                const legData = {
                  airport,
                  eventDate,
                  time: dateTime.textContent,
                  flightNumber
                };

                flightData[eventType] = legData;
              }
            });
        });
      } else {
        // flight arrived a day later than departed, search for previous day
        const previousDate = moment(date).subtract(1, 'days');
        const previousFlightDate = moment(previousDate).format('YYYY-MM-DD');
        console.log(' >>>>>>>>>> PREVIOUS DAY >>>>>>>>> ', previousFlightDate);

        flightData = fetchFlightData(flightNumber, previousFlightDate, target);
      }
    }
  });
  return flightData;
};

// const flightNumber = 'EK450';
// const flightDate = '21 Feb 2020';
// fetchFlightData(flightNumber, flightDate);
const parseTravelDetails = patient => {
  const details = patient.travel_details;
  const number = patient.case_number;
  const sentences = details.split(/[,.]/);
  // console.log(number, patient.location_history.length, details);

  const resArr = sentences.flatMap(sentence => {
    // console.log(s.match(/(flight ([A-Z][A-Z][0-9]{1,4}))/ig))
    // console.log(s.match(/february/ig))
    //flight date and code
    const matches =
      sentence.match(/.{1,3}march.*?flight ([A-Z][A-Z][0-9]{1,4})/gi) || [];
    return matches.map(match => {
      return {
        flight: match
          .replace(/.*flight /i, '')
          .replace(/(..)([ 0]+)?([1-9].*)/, '$1$3'),
        date: match.replace(/march.*/i, 'march 2020')
      };
    });
    // A to B on DD (no flight)
    // console.log(s.match(/(.*)? to (.*)? on (.*) march/i))
  });
  // console.log(resArr);
  return resArr;
};

const findFlights = async patient => {
  // console.log(c.case_number);
  const flightList = parseTravelDetails(patient);
  // console.log(c.case_number, flightList);
  const flightData = await Promise.all(
    flightList.map(({ flight, date }) => fetchFlightData(flight, date))
  );
  // c.location_history.push()
  // console.log(c.case_number, 'returned', flightData);
  const locationData = flightData
    .flatMap(Object.values)
    .map(({ airport, eventDate, time, flightNumber }) => {
      return {
        date: `${eventDate} ${time}`,
        location: airport,
        description: flightNumber
      };
    });
  // console.log(patient.case_number, 'returned', locationData);
  return locationData;
};

const migrateFlights = () => {
  const isSameDate = (oldDate, newDate) =>
    moment(oldDate).isSame(moment(newDate, 'DD/MM/YYYY'), 'days');
  const oldData = require('../data/newData3.json');
  const flightCache = require('../data/flightCache.json');
  const flightMap = new Map(flightCache);
  const currentData = require('../data/MoH/govtData202003311300.json');
  currentData.confirmed.forEach(newCase => {
    if (!newCase.flight) return;
    // console.log('flight : ', newCase.case_number, newCase.flight);
    oldData.cases
      .map(oldCase => {
        let a = oldCase.location_history.filter(loc => {
          const sameFlight =
            loc.description.toLowerCase() === newCase.flight.toLowerCase();
          const sameArrival = isSameDate(loc.date, newCase.arrival_date);
          const sameDeparture = isSameDate(loc.date, newCase.departure_date);
          // sameFlight && console.log(
          //   oldCase.case_number,
          //   newCase.case_number,
          //   newCase.flight,
          //   sameFlight,
          //   sameDeparture,
          //   sameArrival
          // );
          return sameFlight; //&& (sameArrival || sameDeparture);
        });
        // a.length && console.log(a);
        return { ...oldCase, location_history: a };
      })
      .filter(
        oldCase =>
          oldCase.location_history.length &&
          (isSameDate(
            oldCase.location_history.slice(-2)[0].date,
            newCase.departure_date
          ) ||
            isSameDate(
              oldCase.location_history.slice(-1)[0].date,
              newCase.arrival_date
            ))
      )
      .forEach(oldCase => {
        // console.log('flight match: ', oldCase.case_number, newCase.case_number);
        const [depLoc, arrLoc] = oldCase.location_history.slice(-2);
        let newFlightObject = [];
        if (arrLoc) {
          const flightInstances = flightMap.get(depLoc.description) || [];
          const flightInstancesSet = new Set(flightInstances.map(JSON.stringify))
          const flightInstance = {
            departed: {
              airport: depLoc.location,
              date: moment(depLoc.date).format('DD MMM YYYY'),
              time: moment(depLoc.date).format('h:mm a')
            },
            arrived: {
              airport: arrLoc.location,
              date: moment(arrLoc.date).format('DD MMM YYYY'),
              time: moment(arrLoc.date).format('h:mm a')
            }
          }
          flightInstancesSet.add(JSON.stringify(flightInstance));
          const flightInstancesArr = [...flightInstancesSet].map(JSON.parse)
          
          flightMap.set(depLoc.description, flightInstancesArr);
          // console.log(newFlightObject);
        } else
          console.log(
            '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
            oldCase.location_history
          );
      });
  });

  // console.log(flightMap);
  saveData([...flightMap], '../data/flightCache.json')
  // oldData.cases.map(c => {
  //   const locs = c.location_history;
  //   locs.map(l => {
  //     // const date
  //   })
  // })
};
migrateFlights();

module.exports = {
  findFlights
};
