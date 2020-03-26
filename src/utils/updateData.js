const fs = require('fs');
// const caseData = require('../data/caseData.json');
const caseData = require('../data/newData3.json');
const newData = require('../data/caseData.json');
const newCaseFormat = require('../data/newCaseFormat.json');
const path = require('path');
const openGeocoder = require('node-open-geocoder');
const { fetch } = require('simple-fetch-cache');
const dhbMap = require('../utils/locationMapper').get;


const compareNewData = () => {
  const newobj = Object.assign({}, newCaseFormat);
  newobj.cases.forEach((c, i) => {
    // console.log(c)
    Object.assign(c, caseData.cases[i]);
    // console.log(c)
  });
  newobj.probable_cases.forEach((c, i) => {
    Object.assign(c, caseData.probable_cases[i]);
  });
  console.log(newobj.probable_cases);
  console.log(newobj);
  // console.log(newobj)
  const NEWDATA_PATH = path.resolve(__dirname, '../data/newData2.json');
  fs.writeFileSync(NEWDATA_PATH, JSON.stringify(newobj));
};

// compareNewData()

const updateCache = () => {
  // read locs from case data
  const allLocs = caseData.cases
    .flatMap(c => c.location_history.concat([{ location: c.location }]))
    .concat(
      caseData.probable_cases.flatMap(c =>
        c.location_history.concat([{ location: c.location }])
      )
    );

  // read locs from loc cache
  const LOCATION_CACHE_PATH = path.resolve(
    __dirname,
    '../data/locationCache.json'
  );
  const rawCache = fs.readFileSync(LOCATION_CACHE_PATH);
  const parsedCache = JSON.parse(rawCache) || new Array();
  // console.log(parsedCache)
  allLocs.forEach(caseLoc => {
    // console.log(caseLoc.location)
    //check if already contains
    const location = dhbMap(caseLoc.location)
      
    const cachedLocation = parsedCache.filter(
      cachedLoc => cachedLoc.location === location
    );
    // console.log(caseLoc, cachedLocation[0].geocode.address)
    

      // if not, fetch it and save
    if (!cachedLocation.length) {
      console.log(caseLoc);
      console.log(location);
      openGeocoder()
        .geocode(location)
        .end((err, response) => {
          console.log(response)
          if (err) {
            console.error(err);
            return;
          }
          // console.log(response)
          if (!(response && response[0])) return;
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
  console.log('end')
  return;
};

// updateCache()

//
// this is not likely to be needed again
//

const cleanLocHist = () => {
  const NEWDATA2_PATH = path.resolve(__dirname, '../data/newData2.json');
  const NEWDATA3_PATH = path.resolve(__dirname, '../data/newData3.json');
  const fileData = JSON.parse(fs.readFileSync(NEWDATA2_PATH));

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