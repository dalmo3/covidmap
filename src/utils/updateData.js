const fs = require('fs')
const data = require('../data/caseData').data;
const path = require('path')
const openGeocoder = require('node-open-geocoder')

const updateCache = () => {
  // read locs from case data
  const allLocs = data.cases.flatMap(c => c.location_history);
  
  // read locs from loc cache
  const LOCATION_CACHE_PATH = path.resolve(__dirname,'../data/locationCache.json')
  const rawCache = fs.readFileSync(LOCATION_CACHE_PATH)
  const parsedCache = JSON.parse(rawCache) || new Array();
  console.log(parsedCache)
  allLocs.forEach(caseLoc => {
    //check if already contains
    console.log(caseLoc)
    const cachedLocation = parsedCache.filter(cachedLoc => cachedLoc.location === caseLoc.location);
    
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
        }
        parsedCache.push(newEntry);
        fs.writeFileSync(LOCATION_CACHE_PATH,JSON.stringify(parsedCache))
      })
    }
  })
}

updateCache()
