const moment = require('moment');
const fs = require('fs');
// const caseData = require('../data/caseData.json');
const path = require('path');
const openGeocoder = require('node-open-geocoder');
const { fetch } = require('simple-fetch-cache');
const locationMapper = require('../locationMapper').get;
// const flight = require('../flight').;
const currentData = require('../../data/MoH/current.json')

const compareNewData = () => {
  const newobj = Object.assign({}, newCaseFormat);
  newobj.cases.forEach((c, i) => {
    // console.log(c)
    Object.assign(c, oldData.cases[i]);
    // console.log(c)
  });
  newobj.probable_cases.forEach((c, i) => {
    Object.assign(c, oldData.probable_cases[i]);
  });
  console.log(newobj.probable_cases);
  console.log(newobj);
  // console.log(newobj)
  const NEWDATA_PATH = path.resolve(__dirname, '../data/newData2.json');
  fs.writeFileSync(NEWDATA_PATH, JSON.stringify(newobj));
};
// compareNewData()

//
// this is not likely to be needed again
//
const cleanLocHist = () => {
  const NEWDATA3_PATH = path.resolve(__dirname, '../data/newData3.json');
  const fileData = JSON.parse(fs.readFileSync(NEWDATA3_PATH));

  const filterCase = c => {
    const filteredHistory = c.location_history.filter(l => l.date);
    c.location_history = filteredHistory;

    const filteredInfo = c.additional_info.filter(
      i => i.info !== c.travel_details
    );
    // console.log(c.additional_info)
    // console.log(filteredInfo)
    c.additional_info = filteredInfo;
  };
  fileData.cases.forEach(filterCase);
  fileData.probable_cases.forEach(filterCase);

  fs.writeFileSync(NEWDATA3_PATH, JSON.stringify(fileData));
};
// cleanLocHist();

const excludeCase = patient => {
  const details = patient.travel_details;
  const criteria =
    details === 'Details to come' ||
    details === 'Linked to a confirmed case' ||
    patient.location_history.length;
  // ||  patient.case_number != 257
  return criteria;
};

const updateFlights_old = () => {
  // const samples = caseData.cases.slice(-20);
  const samples = oldData.cases;
  Promise.all(
    samples.map(async (patient, i) => {
      // console.log(case_number, location_history.length, travel_details); // if (patient.location_history.length) return;
      if (excludeCase(patient)) return Promise.resolve(patient);
      return new Promise((res, rej) =>
        setTimeout(async () => {
          const { case_number, location_history, travel_details } = patient;
          console.log(case_number, location_history.length, travel_details); // if (patient.location_history.length) return;
          const flights = await findFlights(patient);
          patient.location_history.push(...flights);
          // console.log(flights)
          return res(patient);
        }, (i + 1) * 0001)
      );
    })
  ).then(cases => {
    oldData.cases = cases;
    // console.log(JSON.stringify(caseData))
    saveData(oldData);
    // updateCache()
  });
};
// updateFlights()

const updateFlights = () => {
  currentData.confirmed.concat(currentData.probable).forEach(patient => {

    fetchFlightData(patient.flight, patient.departure_date, patient.arrival_date)
  })
}

const saveData = (data, filePath) => {
  const NEW_DATA_PATH = path.resolve(__dirname, filePath);
  fs.writeFileSync(NEW_DATA_PATH, JSON.stringify(data));
};

const updateCacheAllLocs = () => {

  const newdata = require('../../data/MoH/current.json');
  const allLocs = newdata.confirmed
  .concat(newdata.probable)
  .flatMap(patient => [patient.overseas_cities, patient.dhb])
  .filter(loc => !!loc);
  // read locs from loc cache
  updateCacheLoc(allLocs)
}

const updateCacheLoc = (locArr) => {
  // read locs from case data
  const LOCATION_CACHE_PATH = path.resolve(
    __dirname,
    '../../data/locationCache.json'
  );
  const rawCache = fs.readFileSync(LOCATION_CACHE_PATH);
  const parsedCache = JSON.parse(rawCache) || new Array();
  // console.log(parsedCache)
  locArr.forEach(caseLoc => {
    // console.log(caseLoc.location)
    //check if already contains
    const location = locationMapper(caseLoc);

    const cachedLocation = parsedCache.filter(
      cachedLoc => cachedLoc.location === location
    );
    // console.log(caseLoc, cachedLocation[0].geocode.address)

    // if not, fetch it and save
    if (!cachedLocation.length) {
      // console.log(caseLoc);
      console.log(caseLoc);
      console.log(location);
      openGeocoder()
        .geocode(location)
        .end((err, response) => {
          console.log(response);
          if (err) {
            console.error(err);
            return;
          }
          // console.log(response)
          if (!(response && response[0])) {
            console.log('>>>> NOT FOUND >>>>>>>', location);
            return;
          }
          delete response[0].geojson;

          const newEntry = {
            location,
            geocode: response[0]
          };
          // console.log('new location :', newEntry);
          parsedCache.push(newEntry);
          fs.writeFileSync(LOCATION_CACHE_PATH, JSON.stringify(parsedCache));
        });
    }
  });
  console.log('end');
  return;
};

const updateLocCacheFromFlights = () => {
  const flightMap = require('../../data/flightCache.json')
  const flightLocs = flightMap.flatMap(([_, flightArr]) => 
    flightArr.flatMap(flight => [flight.departed.airport, flight.arrived.airport])
  )
  const uniqueLocs = [...new Set(flightLocs)];
  // const locsToFind = uniqueLocs.filter()
  updateCacheLoc(uniqueLocs)
}

const updateCases = () => {
  const yesterday = require('../../data/MoH/yesterday.json')

  currentData.confirmed.forEach((currentCase,i) => {
    const yesterdayEquivalent = yesterday.confirmed.filter(yesterdayCase => 
      currentCase.report_date === yesterdayCase.report_date &&
      currentCase.dhb === yesterdayCase.dhb &&
      currentCase.age_bracket === yesterdayCase.age_bracket &&
      currentCase.gender === yesterdayCase.gender
    )[0] || {}
    // console.log(yesterdayEquivalent.case_number, currentCase.case_number)
    currentData.confirmed[i] = Object.assign(yesterdayEquivalent, currentCase)
    // if (yesterdayEquivalent.hasFlightInfo) console.log(yesterdayEquivalent)
    // if (currentCase.hasFlightInfo) console.log(currentCase)
  })
  currentData.probable.forEach((currentCase,i) => {
    const yesterdayEquivalent = yesterday.probable.filter(yesterdayCase => 
      // moment(currentCase.report_date, 'DD/MM/YYYY').isAfter(moment().subtract(2,'days')) &&
      currentCase.report_date === yesterdayCase.report_date &&
      currentCase.dhb === yesterdayCase.dhb &&
      currentCase.age_bracket === yesterdayCase.age_bracket &&
      currentCase.gender === yesterdayCase.gender
    )[0]  || {}
    // console.log(yesterdayEquivalent.case_number, currentCase.case_number)
    currentData.probable[i] = Object.assign(yesterdayEquivalent, currentCase)

  })
  // console.log(currentData)
  saveData(currentData, '../../data/MoH/current.json')
}


updateCases()
// flight.updateFlightCache()
// updateLocCacheFromFlights()