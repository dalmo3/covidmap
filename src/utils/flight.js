const fetch = require('fetch-filecache-for-crawling');
const moment = require('moment');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const data = require('../data/newData3.json');

const fetchFlightData = async (
  flightNumber,
  flightDate,
  targetDate = flightDate
) => {
  const date = flightDate ? moment(flightDate) : moment();
  const target = targetDate ? moment(targetDate) : moment();
  const queryDate = moment(date).format('YYYY-MM-DD');
  // console.log(queryDate);

  //actual stuff
  console.log(
    `https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`
  );
  const html = await fetch(
    `https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`
  ).then(res => res.text());

  // TEST HTML
  // const html = fs.readFileSync(
  //   path.resolve(__dirname + '/ek450test.html'),
  //   'utf8'
  // );

  const dom = new JSDOM(html).window.document;
  // console.log(dom.window.document)
  // console.log(html);
  let flightData = {};
  // get the 'Arrival' and 'Departure' elements
  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    // console.log(schedule.innerHTML);

    // get scheduled and actual times
    const flightEvent = schedule.querySelector('.flightInfo-date').textContent;
    const displayDate = target.format('D MMM, YYYY');
    // console.log(flightEvent);
    // console.log('display ', displayDate);

    // match arrival with target date (since our info usually has arrival date)
    if (flightEvent.startsWith(`Arrival: `)) {
      if (flightEvent.startsWith(`Arrival: ${displayDate}`)) {
        // console.log('____ found ______');

        // go up to schedule again, to get both Dep. and Arr. data
        dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
          const flightEvent = schedule.querySelector('.flightInfo-date');
          // console.log(flightEvent.textContent);

          // get airport name without initials, helps withgeocoding
          const airport = schedule
            .querySelector('.flightInfo-airport')
            .textContent.replace(/ \(...\)/, '');

          // get only actual time
          schedule
            .querySelectorAll('.flightInfo-dateItem')
            .forEach(dateItem => {
              // console.log(dateItem.innerHTML);
              const dateLabel = dateItem.querySelector('.flightInfo-dateLabel');
              if (dateLabel && dateLabel.textContent === 'Actual:') {
                const dateTime = dateItem.querySelector('.flightInfo-dateTime');
                // console.log(dateTime);
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
                // console.log(legData);
                flightData[eventType] = legData;
              }
            });
        });
      } else {
        // flight arrived a day later than departed, search for previous day
        const previousDate = moment(date).subtract(1, 'days');

        const previousFlightDate = moment(previousDate).format('YYYY-MM-DD');
        console.log(' >>>>>>>>>> PREVIOUS DAY >>>>>>>>> ', previousFlightDate);
        // setTimeout(() => {
        //rate-limiting
        flightData = fetchFlightData(flightNumber, previousFlightDate, target);
        // }, 1000);
      }
    }
  });
  // console.log(flightData);
  return flightData;
};

// const flightNumber = 'EK450';
// const flightDate = '21 Feb 2020';
// fetchFlightData(flightNumber, flightDate);
const parseTravelDetails = patient => {
  const details = patient.travel_details;
  const number = patient.case_number;
  const sentences = details.split(/[,.]/);
  console.log(number, patient.location_history.length, details);

  const resArr = sentences.flatMap(sentence => {
    // console.log(s.match(/(flight ([A-Z][A-Z][0-9]{1,4}))/ig))
    // console.log(s.match(/february/ig))
    //flight date and code
    const matches =
      sentence.match(/.{1,3}march.*?flight ([A-Z][A-Z][0-9]{1,4})/gi) || [];
    return matches.map(match => {
      return {
        flight: match.replace(/.*flight /i, ''),
        date: match.replace(/march.*/i, 'march 2020')
      };
    });
    // A to B on DD (no flight)
    // console.log(s.match(/(.*)? to (.*)? on (.*) march/i))
  });
  // console.log(resArr);
  return resArr;
};

const excludeCase = c => {
  const details = c.travel_details;
  const criteria =
    details === 'Details to come' || details === 'Linked to a confirmed case';
  return criteria;
};

const samples = data.cases.slice(-20, -2);

const findFlights = async (patient) => {
  // console.log(c.case_number);
  if (excludeCase(patient)) return;
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
  console.log(patient.case_number, 'returned', locationData);
}


samples.forEach((c,i) => {
  setTimeout(() => {
    findFlights(c)
  }, i * 2000);
});
