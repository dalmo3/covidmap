const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const data = require('../data/caseData').data;
const path = require('path');
const openGeocoder = require('node-open-geocoder');
const fetch = require('node-fetch')

// 'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
const fetchFlightData = async (flightNumber, flightDate) => {
  // const parser = new DOMParser();

  const date = new Date('23 Feb')
  flightNumber = 'EK450';
  flightDate = '2020-02-23';

  const html = await fetch(`https://www.airportia.com/flights/${flightNumber}/?date=${flightDate}`).then(res => res.text());
  // console.log(html)
  // const dom = parser.parseFromString(html, 'text/html');
  const dom = new JSDOM(html).window.document;
  // console.log(dom.window.document)
  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    const flightEvent = schedule.querySelector('.flightInfo-date');
    /Arrival: /.test(flightEvent.textContent)
    console.log(flightEvent.textContent)

  })
  
  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    const flightEvent = schedule.querySelector('.flightInfo-date');
      console.log(flightEvent.textContent)
    const airport = schedule
    .querySelector('.flightInfo-airport')
      .textContent.replace(/ \(...\)/, '');
    schedule.querySelectorAll('.flightInfo-dateItem').forEach(dateItem => {
      const dateLabel = dateItem.querySelector('.flightInfo-dateLabel');
      if (dateLabel && dateLabel.textContent === 'Actual:') {
        const dateTime = dateItem.querySelector('.flightInfo-dateTime');
        


        console.log(airport, flightEvent.textContent, dateTime.textContent);
      }
    });
  });
};

fetchFlightData()

const genCaseFile = () => {
  const json = JSON.stringify(data);
  fs.writeFileSync(path.resolve(__dirname, '../data/govtData.json'), json);
  const fileData = fs.readFileSync(
    path.resolve(__dirname, '../data/govtData.json')
  );
  console.log(JSON.parse(fileData));
};

// genCaseFile();

const updateCache = () => {
  // read locs from case data
  const allLocs = data.cases
    .flatMap(c => c.location_history)
    .concat(data.probable_cases.flatMap(c => c.location_history));

  // read locs from loc cache
  const LOCATION_CACHE_PATH = path.resolve(
    __dirname,
    '../data/locationCache.json'
  );
  const rawCache = fs.readFileSync(LOCATION_CACHE_PATH);
  const parsedCache = JSON.parse(rawCache) || new Array();
  // console.log(parsedCache)
  allLocs.forEach(caseLoc => {
    //check if already contains
    const cachedLocation = parsedCache.filter(
      cachedLoc => cachedLoc.location === caseLoc.location
    );
    // console.log(caseLoc, cachedLocation[0].geocode.address)

    // if not, fetch it and save
    if (!cachedLocation.length) {
      // console.log('a')
      openGeocoder()
        .geocode(caseLoc.location)
        .end((err, response) => {
          // if (err) return reject(err);
          // console.log(response)
          if (!(response && response[0])) return;
          delete response[0].geojson;

          const newEntry = {
            location: caseLoc.location,
            geocode: response[0]
          };
          console.log('new location :', newEntry);
          parsedCache.push(newEntry);
          fs.writeFileSync(LOCATION_CACHE_PATH, JSON.stringify(parsedCache));
        });
    }
  });
};

// updateCache();
