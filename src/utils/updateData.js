const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const fs = require('fs');
const caseData = require('../data/caseData.json');
const newData = require('../data/caseData.json');
const data = require('../data/caseData').data;
const path = require('path');
const openGeocoder = require('node-open-geocoder');
const fetch = require('node-fetch')
const moment = require('moment')


// 'https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-cases'
const fetchFlightData = async (flightNumber, flightDate) => {
  // const parser = new DOMParser();

  // const date = flightDate ? moment(flightDate) : moment('23 Feb 2020')
  const date = flightDate ? new Date(flightDate) : new Date('23 Feb 2020')
  // console.log(date, new Date(date))
  flightNumber = 'EK450';
  // flightDate = '2020-02-23';
  const queryDate = date.getFullYear() +'-'+ date.getMonth()+1 +'-' + date.getDate()
  // const queryDate = moment(date).format('YYYY-MM-DD')
  console.log(queryDate)

  const html = await fetch(`https://www.airportia.com/flights/${flightNumber}/?date=${queryDate}`).then(res => res.text());
  // console.log(html)
  // const dom = parser.parseFromString(html, 'text/html');
  const dom = new JSDOM(html).window.document;
  // console.log(dom.window.document)
  console.log(html)
  console.log(dom.innerHTML)
  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    console.log(schedule.innerHTML)
    const flightEvent = schedule.querySelector('.flightInfo-date').textContent;
    // flightEvent.textContent
  console.log('2')
    console.log(flightEvent)
    const displayDate = date.format('D MMM, YYYY')
    if (flightEvent.startsWith(`Arrival: ${displayDate}`)) {
    } else {
      const nextDay = new Date(date)
      nextDay.setDate(nextDay.getDate()+1)
      const nextFlightDate = nextDay.getFullYear() +'-'+ (nextDay.getMonth() + 1) +'-' + nextDay.getDate()
      fetchFlightData(flightNumber, nextFlightDate)
    }
  })
  
  dom.querySelectorAll('.flightInfo-schedule').forEach(schedule => {
    const flightEvent = schedule.querySelector('.flightInfo-date');
      console.log(flightEvent.textContent)
    const airport = schedule
    .querySelector('.flightInfo-airport')
      .textContent.replace(/ \(...\)/, '');
    schedule.querySelectorAll('.flightInfo-dateItem').forEach(dateItem => {
      console.log(dateItem.innerHTML)
      const dateLabel = dateItem.querySelector('.flightInfo-dateLabel');
      if (dateLabel && dateLabel.textContent === 'Actual:') {
        const dateTime = dateItem.querySelector('.flightInfo-dateTime');
        console.log(dateTime)  


        console.log(airport, flightEvent.textContent, dateTime.textContent);
      }
    });
  });
};

// fetchFlightData()

//old - used to convert .js into .json
const genCaseFile = () => {
  const json = JSON.stringify(data);
  fs.writeFileSync(path.resolve(__dirname, '../data/caseData.json'), json);
  const fileData = fs.readFileSync(
    path.resolve(__dirname, '../data/caseData.json')
  );
  console.log(JSON.parse(fileData));
};
// genCaseFile();

const updateCache = () => {
  // read locs from case data
  const allLocs = caseData.cases
    .flatMap(c => c.location_history)
    .concat(caseData.probable_cases.flatMap(c => c.location_history));

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

updateCache();
const compareNewData = () => {
  const newobj = Object.assign(caseData, newData);
  console.log(newobj)
}

// compareNewData()
