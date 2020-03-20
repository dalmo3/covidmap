import React, { useRef, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import './App.css';
import openGeocoder from 'node-open-geocoder';
const data = require('./data/caseData').data;
const locationCache = require('./data/locationCache.json')
// import fs from 'fs'

// const LOCATION_CACHE_PATH = './data/locationCache.js'

// import cache from LOCATION_CACHE_PATH

const getCoordinates = async location =>
  new Promise((resolve, reject) => {
    // console.log(locationCache)
    // const locationCache = fs.readFileSync(LOCATION_CACHE_PATH)
    // const parsedCache = JSON.parse(locationCache) || [];
    const cachedLocation = locationCache.filter(loc => loc.location === location);
    // console.log(cachedLocation)
    if (cachedLocation) {
      const {lat, lon} = cachedLocation[0].geocode;
      console.log(lat,lon, '(cached)')
      resolve([lat,lon]);
    }
    openGeocoder()
    .geocode(location)
    .end((err, response) => {
      if (err) return reject(err);
      // console.log(response)
      // parsedCache.push(response);
      // fs.writeFileSync(LOCATION_CACHE_PATH,JSON.stringify(parsedCache))
      const {lat, lon} = response[0];
      return resolve([lat,lon]);
    })
  }
  );

function Map() {
  const mymap = useRef(null);

  // render map
  useEffect(() => {
    // create map
    mymap.current = L.map('map', {
      center: [-40.9006, 172.586],
      zoom: 6
    });
    L.tileLayer(
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGFsbW8zIiwiYSI6ImNrN3ljNDcwZDA2MHozbXFncWxoZnV0MDcifQ.MhhGCM9OGXnzn1TWu6d9gg',
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'your.mapbox.access.token'
      }
    ).addTo(mymap.current);
    function onMapClick(e) {
      alert('You clicked the map at ' + e.latlng);
    }

    // mymap.current.on('click', onMapClick);
  }, []);

  // get user location
  const getUserLocation = () => {
    mymap.current.locate({ setView: true, maxZoom: 12 });
    function onLocationFound(e) {
      var radius = e.accuracy;

      // L.circleMarker(e.latlng)
      //   .addTo(mymap.current)

      L.circle(e.latlng, radius)
        .addTo(mymap.current)
        .bindPopup('You are within ' + radius + ' meters from this point')
        .openPopup();
    }

    mymap.current.on('locationfound', onLocationFound);
    function onLocationError(e) {
      alert(e.message);
    }

    mymap.current.on('locationerror', onLocationError);
  };
  // useEffect(getUserLocation);

  // add datapoints to map
  useEffect(() => {
    const markers = L.markerClusterGroup();
    data.cases.forEach(async virusCase => {
      // console.log(virusCase.location_history[0].location)
      // console.log()
      const coords = await getCoordinates(
        virusCase.location_history[0].location
      );
      // console.log(a[0]);
      // const lat = await getCoordinates(virusCase.location_history[0].location)[0].lat
      //     const lon =
      //     await getCoordinates(virusCase.location_history[0].location)[0].lon
      //   [
      //     // virusCase.location_history[0].lat
      //     // ||
      //     ,
      //     // virusCase.location_history[0].lon
      //     // ||

      // ]

      const marker = L.marker(coords, {
      // const marker = L.marker([coords[0].lat, coords[0].lon], {
        icon: getMarkerIcon()
      })
        // .on('click',()=>L.popup())
        // .bindPopup(`Case ${virusCase.case_number}`)
        .bindPopup(
          `Case ${virusCase.case_number}<br>${new Date(
            virusCase.date_confirmed
          ).toLocaleDateString('en-NZ')}`,
          // .openTooltip()
          {
            interactive: true
          }
        )
        .on('click', () => traceCase(virusCase));

      // const popup = L.popup()
      //   .setContent(`Case ${virusCase.case_number}<br>${new Date(virusCase.date_confirmed).toLocaleDateString("en-NZ")}`,
      //   // .bindPopup(`Case ${virusCase.case_number}<br>${new Date(virusCase.date_confirmed).toLocaleDateString("en-NZ")}`,
      //   // .bindPopup(`Case ${virusCase.case_number}<br>${new Date(virusCase.date_confirmed).toLocaleDateString("en-NZ")}`,
      //   // .bindPopup(`Case ${virusCase.case_number}<br>${new Date(virusCase.date_confirmed).toLocaleDateString("en-NZ")}`,
      //   {
      //     interactive: true,
      //   })
      //   .openOn(mymap);

      markers.addLayer(marker);
    });
    // markers.addLayer(L.marker([51.538, -0.1], { icon: getMarkerIcon() }));
    // markers.addLayer(L.marker([51.508, -0.13], { icon: getMarkerIcon() }));
    // markers.addLayer(L.marker([51.528, -0.12], { icon: getMarkerIcon() }));
    mymap.current.addLayer(markers);
    markers.on('clusterclick', function(a) {
      a.layer.zoomToBounds({ maxZoom: 15 });
    });
  }, []);

  // display case paths
  const traceCase = async virusCase => {
    const caseMarkers = await Promise.all(
      virusCase.location_history.map(async loc => {
        // console.log(loc)
        // console.log(loc.location);
        const [lat, lon] = await getCoordinates(loc.location);
        // console.log(lat, lon)
        const locDate = new Date(loc.date).toLocaleDateString('en-NZ');
        const locMarker = L.marker([lat, lon], { icon: getMarkerIcon() })
        .bindTooltip(`${loc.location}<br>${locDate}`,{
          permanent: true
        })
        .openTooltip()
        return locMarker;
      })
    );
    // console.log(await markers)

    const caseConnections = caseMarkers.reduce((grp, marker, i, arr) => {
      // console.log(marker)
      grp.push(marker);
      if (arr[i + 1]) {
        const line = L.polyline([marker.getLatLng(), arr[i + 1].getLatLng()]);
        grp.push(line);
      }
      return grp;
    }, []);

    const caseFeatures = L.featureGroup(caseConnections);
    caseFeatures.addTo(mymap.current);
    console.log(caseFeatures);
    console.log(caseFeatures.getBounds());
    mymap.current.flyToBounds(caseFeatures.getBounds(), {
      padding: [20, 20],
      duration: 0.25
    });
  };

  return <div id="map"></div>;
}

const getMarkerIcon = () => {
  const defaultMarker =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';

  const defaultMarkerShadow =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';

  return new L.Icon({
    iconUrl: defaultMarker,
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
    shadowUrl: defaultMarkerShadow
  });
};

export default Map;
