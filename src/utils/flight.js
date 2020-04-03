const fetch = require('fetch-filecache-for-crawling');
const moment = require('moment');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const path = require('path');
const flightCache = require('../data/flightCache.json');

const saveData = (data, fileName) => {
  const NEW_DATA_PATH = path.resolve(__dirname, fileName);
  fs.writeFileSync(NEW_DATA_PATH, JSON.stringify(data));
};

const fetchFlightData = async (
  flightNumber,
  departure,
  arrival,
  flightDate
) => {
  if (!(departure || arrival)) return;
  const depMoment = moment(departure, 'DD/MM/YYYY');
  const arrMoment = moment(arrival, 'DD/MM/YYYY');
  const fdMoment = moment(flightDate, 'DD/MM/YYYY');
  const date =
    (flightDate && fdMoment) ||
    (departure && depMoment) ||
    (arrival && arrMoment);
  const queryDate = date.format('YYYY-MM-DD');
  const formattedFlight = flightNumber.replace(
    /(..)([ ]*)([0]*)([1-9][0-9]*)([ ].*)?/g,
    '$1$4'
  );
  console.log(
    `https://www.airportia.com/flights/${formattedFlight}/?date=${queryDate}`
  );

  const html = await new Promise((res, rej) => {
    setTimeout(
      () =>
        res(
          fetch(
            `https://www.airportia.com/flights/${formattedFlight}/?date=${queryDate}`
          )
        ),
      2000
    );
  }).then(res => res.text());

  const dom = new JSDOM(html).window.document;
  console.log(dom.title);

  const [departureInfo, arrivalInfo] = dom.querySelectorAll(
    '.flightInfo-schedule'
  );
  // console.log(departureInfo, arrivalInfo);
  const departureAirport = departureInfo
    .querySelector('.flightInfo-airport')
    .textContent.replace(/ \(...\)/, '');
  const departureDate = moment(
    departureInfo
      .querySelector('.flightInfo-date')
      .textContent.replace('Departure: ', '')
  );
  const departureTime = moment(
    departureInfo
      .querySelectorAll('.flightInfo-dateItem')[2]
      .querySelector('.flightInfo-dateTime').textContent,
    'HH:mm'
  );

  const arrivalAirport = arrivalInfo
    .querySelector('.flightInfo-airport')
    .textContent.replace(/ \(...\)/, '');
  const arrivalDate = moment(
    arrivalInfo
      .querySelector('.flightInfo-date')
      .textContent.replace('Arrival: ', '')
  );
  const arrivalTime = moment(
    arrivalInfo
      .querySelectorAll('.flightInfo-dateItem')[2]
      .querySelector('.flightInfo-dateTime').textContent,
    'HH:mm'
  );

  const flightInstance = {
    departed: {
      airport: departureAirport,
      date: departureDate.format('DD MMM YYYY'),
      time: departureTime.format('h:mm a')
    },
    arrived: {
      airport: arrivalAirport,
      date: arrivalDate.format('DD MMM YYYY'),
      time: arrivalTime.format('h:mm a')
    }
  };
  console.log('fetched', flightInstance);
  console.log(departure, arrival);
  if (
    (departure && departureDate.isSame(depMoment, 'days')) ||
    (arrival && arrivalDate.isSame(arrMoment, 'days'))
  ) {
    return flightInstance;
  } else if (
    (departure && departureDate.isAfter(depMoment, 'days')) ||
    (arrival && arrivalDate.isAfter(arrMoment, 'days'))
  ) {
    const previousDate = moment(date).subtract(1, 'days');
    const previousFlightDate = moment(previousDate).format('DD/MM/YYYY');
    console.log(
      flightNumber,
      ' <<<<<<<<<< PREVIOUS DAY <<<<<<<<<<<<< ',
      previousFlightDate
    );
    // const previousDayFlight = new Promise((res,rej) =>
    //   setTimeout(() => res(fetchFlightData(flightNumber, previousFlightDate, arrival)), 3000)
    // )
    // return previousDayFlight
    return fetchFlightData(
      formattedFlight,
      departure,
      arrival,
      previousFlightDate
    );
  } else if (
    (departure && departureDate.isBefore(depMoment, 'days')) ||
    (arrival && arrivalDate.isBefore(arrMoment, 'days'))
  ) {
    const nextDate = moment(date).add(1, 'days');
    const nextFlightDate = moment(nextDate).format('DD/MM/YYYY');
    console.log(
      flightNumber,
      ' >>>>>>>>>> NEXT DAY >>>>>>>>> ',
      nextFlightDate
    );
    // const previousDayFlight = new Promise((res,rej) =>
    //   setTimeout(() => res(fetchFlightData(flightNumber, previousFlightDate, arrival)), 3000)
    // )
    // return previousDayFlight
    return fetchFlightData(formattedFlight, departure, arrival, nextFlightDate);
  }
};

// fetchFlightData('ek450','23/02/2020','24/02/2020').then(console.log)
// fetchFlightData('ek450',undefined,'24/02/2020').then(console.log)
// fetchFlightData('ek450','23/02/2020',undefined).then(console.log)
// fetchFlightData('ek450',undefined,undefined).then(console.log)
// fetchFlightData('ek450','26/02/2020','24/02/2020').then(console.log)
// fetchFlightData('ek450','26/04/2020','24/04/2020').then(console.log)

export const getFlight = patient => {
  if (!patient.flight) return;
  const formattedFlight = patient.flight.replace(
    /(..)([ ]*)([0]*)([1-9][0-9]*)([ ].*)?/g,
    '$1$4'
  );
  const flightMap = new Map(flightCache);
  const flightInstances = flightMap.get(formattedFlight) || [];
  return flightInstances.filter(
    flight =>
      isSameDate(flight.departed.date, patient.departure_date) ||
      isSameDate(flight.arrived.date, patient.arrival_date)
  )[0];
};

const isSameDate = (oldDate, newDate) =>
  moment(oldDate).isSame(moment(newDate, 'DD/MM/YYYY'), 'days');

const isSameDateOrBefore = (oldDate, newDate) =>
  moment(oldDate).isSameOrBefore(moment(newDate, 'DD/MM/YYYY'), 'days');

export const updateFlightCache = () => {
  const flightCache = require('../data/flightCache.json');
  const flightMap = new Map(flightCache);
  const currentData = require('../data/MoH/current.json');
  let delay = 0;
  const delayedFlightFetch = (patient, i) => {
    setTimeout(async () => {
      const { case_number, flight, departure_date, arrival_date } = patient;
      console.log(case_number, flight, departure_date, arrival_date);
      const flightInstance = await fetchFlightData(
        flight,
        departure_date,
        arrival_date
      );
      console.log(
        case_number,
        flight,
        departure_date,
        arrival_date,
        flightInstance
      );
      // console.log(case_number, flight, departure_date, arrival_date, flightMap);
      if (flightInstance) {
        const flightInstances = flightMap.get(flight) || [];
        const flightInstancesSet = new Set(flightInstances.map(JSON.stringify));
        flightInstancesSet.add(JSON.stringify(flightInstance));
        const flightInstancesArr = [...flightInstancesSet].map(JSON.parse);
        flightMap.set(flight, flightInstancesArr);
        // console.log(flightMap);
        saveData([...flightMap], '../data/flightCache.json');
      } else {
      }
    }, (i + 1) * 5000);
  };

  currentData.confirmed
    .filter(patient => {
      if (patient.flight) {
        patient.hasFlightInfo = !!getFlight(patient);
      }
      return (
        patient.flight &&
        !patient.hasFlightInfo &&
        !patient.flightError &&
        patient.case_number > 0
      );
    })
    .forEach(async (patient, i,arr) => {
      const flightInfo = await delayedFlightFetch(patient, i)
      patient.flightError = !flightInfo
      saveData(currentData, '../data/MoH/current.json')
      // if (i===arr.length-1) console.log(currentData)
    });
    currentData.probable
    .filter(patient => {
      if (patient.flight) {
        patient.hasFlightInfo = !!getFlight(patient);
      }
      return (
        patient.flight &&
        !patient.hasFlightInfo &&
        !patient.flightError &&
        patient.case_number > 0
        );
    })
    .forEach(async (patient, i, arr) => {
      const flightInfo = await delayedFlightFetch(patient, i)
      patient.flightError = !flightInfo
      saveData(currentData, '../data/MoH/current.json')
      // if (i===arr.length-1) console.log(currentData)
    });
};

const migrateFlights = () => {
  const oldData = require('../data/newFormatTest.json');
  const flightCache = require('../data/flightCache.json');
  const flightMap = new Map(flightCache);
  const currentData = require('../data/MoH/current.json');
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
          const flightInstancesSet = new Set(
            flightInstances.map(JSON.stringify)
          );
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
          };
          flightInstancesSet.add(JSON.stringify(flightInstance));
          const flightInstancesArr = [...flightInstancesSet].map(JSON.parse);

          flightMap.set(depLoc.description, flightInstancesArr);
          // console.log(newFlightObject);
        } else
          console.log(
            '>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>',
            oldCase.location_history
          );
        if (
          // newCase.dhb === oldCase.dhb
          // &&
          newCase.gender === oldCase.gender &&
          newCase.age_bracket === oldCase.age_bracket
        ) {
          // if (true) {
          console.log(
            'case match: ',
            oldCase.case_number,
            oldCase.dhb,
            oldCase.gender,
            oldCase.age_bracket,
            newCase.case_number,
            newCase.dhb,
            newCase.gender,
            newCase.age_bracket
          );
        }
      });
  });

  // console.log(flightMap);
  // saveData([...flightMap], '../data/flightCache.json')
  // oldData.cases.map(c => {
  //   const locs = c.location_history;
  //   locs.map(l => {
  //     // const date
  //   })
  // })
};
// migrateFlights();
