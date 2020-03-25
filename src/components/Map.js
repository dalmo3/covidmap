import React, { useRef, useEffect, useState } from 'react';
import './Map.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.geodesic';
import 'leaflet.beautifymarker/leaflet-beautify-marker-icon';
import 'leaflet.beautifymarker/leaflet-beautify-marker-icon.css';
import openGeocoder from 'node-open-geocoder';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// require('dotenv').config();
// const data = require('../data/caseData').data;
const data = require('../data/caseData.json');
const locationCache = require('../data/locationCache.json');
// import fs from 'fs'

// const LOCATION_CACHE_PATH = './data/locationCache.js'

// import cache from LOCATION_CACHE_PATH

const getCoordinates = async location =>
  new Promise((resolve, reject) => {
    // console.log(locationCache)
    // const locationCache = fs.readFileSync(LOCATION_CACHE_PATH)
    // const parsedCache = JSON.parse(locationCache) || [];
    const cachedLocation = locationCache.filter(
      loc => loc.location === location
    );
    // console.log(cachedLocation)
    if (cachedLocation.length) {
      const { lat, lon } = cachedLocation[0].geocode;
      const coords = [Number.parseFloat(lat), Number.parseFloat(lon)];
      // console.log(location, lat, lon, '(cached)');
      const normalisedLatlng = L.latLng(
        Number.parseFloat(lat),
        L.Util.wrapNum(Number.parseFloat(lon), [-30, 330], true)
      );
      // .wrap()
      resolve(normalisedLatlng);
      // resolve(coords);
    } else {
      openGeocoder()
        .geocode(location)
        .end((err, response) => {
          if (err) return reject(err);
          // console.log(response)
          // parsedCache.push(response);
          // fs.writeFileSync(LOCATION_CACHE_PATH,JSON.stringify(parsedCache))
          const { lat, lon } = response[0];
          const coords = [Number.parseFloat(lat), Number.parseFloat(lon)];
          return resolve(coords);
        });
    }
  });

function Map() {
  document.addEventListener('keyup', e => {
    if (e.keyCode === 27) initState();
  });
  const initState = () => {
    resetMarkers();
    // setMapView(initialMapView);
    resetZoom();
  };
  const resetMarkers = () => {
    setShowClusters(true);
    setShowTrace(false);
  };
  const resetZoom = () => {
    mymap.current.flyTo(initialMapView.center, initialMapView.zoom);
  };
  const mymap = useRef(null);
  const markerCluster = useRef(
    L.markerClusterGroup({
      showCoverageOnHover: false,
      spiderfyDistanceMultiplier: 2
    }).on('clusterclick', e => {

      if (showTutorial.current) {
        console.log(showTutorial)
        toast('Click on a case for details!', {
          position: 'bottom-right',
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          // progressStyle: {backgroundColor: 'C9171a'},
          progressClassName: 'toast_progress',
        }) 
        showTutorial.current = false;
      }
    
      
    })
  );


  const caseFeatures = useRef(L.featureGroup());

  const [showClusters, setShowClusters] = useState(true);
  const [showTrace, setShowTrace] = useState(false);
  const showTutorial = useRef(true);
  const initialMapView = {
    center: [-40.9006, 172.586],
    zoom: 5 + (window.innerHeight > 800)
  };

  
  useEffect(() => {  
  },[showTutorial])
  // const [mapView, setMapView] = useState(initialMapView);

  // useEffect(()=>{

  // })
  // setup orientation detection
  // const [portraitMode, setPortraitMode] = useState(window.innerHeight*1.3 > window.innerWidth);
  // useEffect(() => {
  //   const updateOrientation = (r) => {
  //     const isPortrait = window.innerHeight*1.3 > window.innerWidth;
  //     console.log('port',isPortrait)
  //     setPortraitMode(isPortrait)
  //   }

  //   // document.addEventListener('load', updateOrientation)
  //   window.addEventListener('orientationchange', updateOrientation)
  //   window.addEventListener('resize', updateOrientation)
  // },[])

  const isPortraitMode = () => window.innerHeight * 1.3 > window.innerWidth;

  // make changes after orientation change
  // useEffect(()=>{
  //   alert(portraitMode ? '1' : '2')
  // },[portraitMode])

  // render map
  const initMap = () => {
    // setClusters(2)
    // create map
    mymap.current = L.map('map', initialMapView);
    // mymap.current.zoomControl.setPosition('topright');
    const accessToken =
      process.env.REACT_APP_MAPBOX_TOKEN ||
      'pk.eyJ1IjoiZGFsbW8zIiwiYSI6ImNrODNwZjc5ajFkNmczbW5xdnVjenFmcDMifQ.BzOx7JrPoVOmkxl6sKCk4A';
    console.log(process.env);
    // alert(accessToken)
    L.tileLayer(
      // `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        // attribution:
          // 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        maxZoom: 14,
        minZoom: 2,
        // id: 'mapbox/streets-v11',
        // tileSize: 512,
        // zoomOffset: -1
      }
    ).addTo(mymap.current);
    function onMapClick(e) {
      // alert('You clicked the map at ' + e.latlng);
    }
    // mymap.current.on('click', onMapClick);

    // L.control.addTo(mymap.current)

    // mymap.current.on('click', () => updateMap())

    //   var lastZoom;
    //  mymap.current.on('zoomend', function() {
    //     var zoom =mymap.current.getZoom();
    //     let threshold = 15;
    //     if (zoom < threshold && (!lastZoom || lastZoom >= threshold)) {
    //      mymap.current.eachLayer(function(l) {
    //         if (l.getTooltip) {
    //           var toolTip = l.getTooltip();
    //           if (toolTip) {
    //             mymap.current.closeTooltip(toolTip);
    //           }
    //         }
    //       });
    //     } else if (zoom >= threshold && (!lastZoom || lastZoom < threshold)) {
    //      mymap.current.eachLayer(function(l) {
    //         if (l.getTooltip) {
    //           var toolTip = l.getTooltip();
    //           if (toolTip) {
    //             mymap.current.addLayer(toolTip);
    //           }
    //         }
    //       });
    //     }
    //     lastZoom = zoom;
    //   });
  };
  useEffect(initMap, []);

  // get user location
  const getUserLocation = () => {
    mymap.current.locate({ setView: true, maxZoom: 12 });
    function onLocationFound(e) {
      var radius = e.accuracy;

      // L.circleMarker(e.latlng)
      //   .addTo(mymap.current)

      L.circle(e.latlng, radius).addTo(mymap.current);
      // .bindPopup('You are within ' + radius + ' meters from this point')
      // .openPopup();
    }

    mymap.current.on('locationfound', onLocationFound);
    // function onLocationError(e) {
    //   alert(e.message);
    // }

    // mymap.current.on('locationerror', onLocationError);
  };
  // useEffect(getUserLocation, []);

  const generateClusters = () => {
    // markerCluster = ;
    console.log('case_number', data.cases.concat(data.probable_cases))
    data.cases.concat(data.probable_cases).forEach(async virusCase => {
      const location = virusCase.location_history.slice(-1)[0].location;
      const coords = await getCoordinates(location);

      const marker = L.marker(coords, {
        icon: getMarkerIcon(virusCase)
      })
        .bindTooltip(
          `${location}
          <br>
          ${new Date(virusCase.date_confirmed).toLocaleDateString('en-NZ')}`,
          {
            // permanent : true
          }
        )
        .on('click', () => {
          setShowClusters(false);
          traceCase(virusCase);
        }); 

      markerCluster.current.addLayer(marker);
    });
  };
  // add datapoints to map
  useEffect(generateClusters, []);

  const displayClusters = () => {
    if (showClusters) markerCluster.current.addTo(mymap.current);
    else markerCluster.current.remove();
  };
  useEffect(displayClusters, [showClusters]);

  // const updateMap = () => {
  //   showClusters && mymap.current.addLayer(showClusters);
  // };

  // display case paths
  const traceCase = async virusCase => {
    // find all markers
    const hasConnections = virusCase.location_history.length > 1;
    const caseMarkers = await Promise.all(
      virusCase.location_history.map(async loc => {
        // console.log(loc)
        // console.log(loc.location);
        const coords = await getCoordinates(loc.location);
        // const [lat, lon] = await getCoordinates(loc.location);
        // console.log(lat, lon)
        const locDate = getFormattedDateString(loc.date);
        // const locMarker = L.marker([lat, lon], { icon: getMarkerIcon() })
        const locMarker = L.marker(coords, {
          icon: getMarkerIcon_old(virusCase.case_number)
        }).bindTooltip(`${loc.location}<br>${locDate}`, {
          permanent: hasConnections
        });
        // .bindPopup(`${loc.location}<br>${locDate}`);
        // .openTooltip();
        return locMarker;
      })
    );

    // create connections between markers
    const caseConnections = caseMarkers.reduce(
      (featureGroup, marker, i, arr) => {
        // console.log(marker)
        featureGroup.push(marker);
        if (arr[i + 1]) {
          // const line = new L.Geodesic(
          const line = new L.polyline(
            [marker.getLatLng(), arr[i + 1].getLatLng()],
            { wrap: false, steps: 10 }
          );
          // const line = L.polyline([marker.getLatLng(), arr[i + 1].getLatLng()]);
          featureGroup.push(line);
        }
        return featureGroup;
      },
      []
    );
    caseFeatures.current = L.featureGroup(caseConnections);
    // caseFeatures.addTo(mymap.current);
    // console.log(caseFeatures);
    setShowTrace(true);
    console.log(caseFeatures.current.getBounds());

    const maxZoom = hasConnections
      ? Math.min(12, mymap.current.getZoom())
      : Math.max(8, mymap.current.getZoom());

    // setPortraitMode(false)
    console.log('mode', isPortraitMode());

    let brPadding = [
      isPortraitMode() ? 20 : window.innerWidth / 3,
      isPortraitMode() ? window.innerHeight / 2 : 20
    ];

    mymap.current.flyToBounds(caseFeatures.current.getBounds(), {
      paddingBottomRight: brPadding,
      paddingTopLeft: [20, 20],
      duration: 1,
      maxZoom
    });

    const isProbable = virusCase.status === 'probable';
    console.log(virusCase.status);
    let t = toast(
      <div style={{ fontSize: '0.8em' }}>
        <h2>
          Case {virusCase.case_number}
          {isProbable ? ` (Probable)` : ''}
        </h2>
        <p>{getFormattedDateString(virusCase.date_confirmed)}</p>
        <p>{virusCase.location}</p>
        <p>
          {virusCase.gender} {virusCase.age_bracket}
        </p>
        <p>{virusCase.additional_info[0].info}</p>
        <a href={`${virusCase.additional_info[0].source_url}`} target="_blank">
          Source
        </a>
      </div>
    );

    const CloseButton = ({ closeToast }) => (
      <button
        className="Toastify__close-button Toastify__close-button--default"
        type="button"
        aria-label="close"
        onClick={() => {
          closeToast();
          resetMarkers();
          if (mymap.current.getZoom() < 6) resetZoom();
        }}
      >
        ✖︎
      </button>
    );

    toast.update(t, {
      position: 'bottom-right',
      autoClose: false,
      hideProgressBar: true,
      closeOnClick: false,
      draggable: true,
      draggablePercent: 40,
      closeButton: <CloseButton />,
      onClose: () => {
        resetMarkers();
        if (mymap.current.getZoom() < 6) resetZoom();
      }
    });
  };

  const displayTrace = () => {
    if (showTrace) caseFeatures.current.addTo(mymap.current);
    else caseFeatures.current.remove();
  };
  useEffect(displayTrace, [showTrace]);

  return <div id="map"></div>;
}

const getFormattedDateString = date => {
  if (!date) return 'Date not available';
  const newDate = new Date(date);
  const options = {
    day: '2-digit',
    month: 'short'
  };
  if (newDate.getHours() || newDate.getMinutes()) {
    options.hour = '2-digit';
    options.minute = '2-digit';
    options.hourCycle = 'h12';
  }
  return newDate.toLocaleString('en-NZ', options);
};

const getMarkerIcon = virusCase => {
  const isProbable = virusCase.status === 'probable';
  const options = {
    isAlphaNumericIcon: true,
    text: `Case
    ${virusCase.case_number}${isProbable ? '*' : ''}`,
    iconShape: 'circle',
    iconSize: [36, 36],
    iconAnchor: [18, 18],
    tooltipAnchor: [20, 0],
    borderColor: '#333',
    textColor: '#333'
  };
  if (isProbable) options.backgroundColor = 'lightgray';
  return L.BeautifyIcon.icon(options);
};

const getMarkerIcon_old = () => {
  const defaultMarker =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAApCAYAAADAk4LOAAAFgUlEQVR4Aa1XA5BjWRTN2oW17d3YaZtr2962HUzbDNpjszW24mRt28p47v7zq/bXZtrp/lWnXr337j3nPCe85NcypgSFdugCpW5YoDAMRaIMqRi6aKq5E3YqDQO3qAwjVWrD8Ncq/RBpykd8oZUb/kaJutow8r1aP9II0WmLKLIsJyv1w/kqw9Ch2MYdB++12Onxee/QMwvf4/Dk/Lfp/i4nxTXtOoQ4pW5Aj7wpici1A9erdAN2OH64x8OSP9j3Ft3b7aWkTg/Fm91siTra0f9on5sQr9INejH6CUUUpavjFNq1B+Oadhxmnfa8RfEmN8VNAsQhPqF55xHkMzz3jSmChWU6f7/XZKNH+9+hBLOHYozuKQPxyMPUKkrX/K0uWnfFaJGS1QPRtZsOPtr3NsW0uyh6NNCOkU3Yz+bXbT3I8G3xE5EXLXtCXbbqwCO9zPQYPRTZ5vIDXD7U+w7rFDEoUUf7ibHIR4y6bLVPXrz8JVZEql13trxwue/uDivd3fkWRbS6/IA2bID4uk0UpF1N8qLlbBlXs4Ee7HLTfV1j54APvODnSfOWBqtKVvjgLKzF5YdEk5ewRkGlK0i33Eofffc7HT56jD7/6U+qH3Cx7SBLNntH5YIPvODnyfIXZYRVDPqgHtLs5ABHD3YzLuespb7t79FY34DjMwrVrcTuwlT55YMPvOBnRrJ4VXTdNnYug5ucHLBjEpt30701A3Ts+HEa73u6dT3FNWwflY86eMHPk+Yu+i6pzUpRrW7SNDg5JHR4KapmM5Wv2E8Tfcb1HoqqHMHU+uWDD7zg54mz5/2BSnizi9T1Dg4QQXLToGNCkb6tb1NU+QAlGr1++eADrzhn/u8Q2YZhQVlZ5+CAOtqfbhmaUCS1ezNFVm2imDbPmPng5wmz+gwh+oHDce0eUtQ6OGDIyR0uUhUsoO3vfDmmgOezH0mZN59x7MBi++WDL1g/eEiU3avlidO671bkLfwbw5XV2P8Pzo0ydy4t2/0eu33xYSOMOD8hTf4CrBtGMSoXfPLchX+J0ruSePw3LZeK0juPJbYzrhkH0io7B3k164hiGvawhOKMLkrQLyVpZg8rHFW7E2uHOL888IBPlNZ1FPzstSJM694fWr6RwpvcJK60+0HCILTBzZLFNdtAzJaohze60T8qBzyh5ZuOg5e7uwQppofEmf2++DYvmySqGBuKaicF1blQjhuHdvCIMvp8whTTfZzI7RldpwtSzL+F1+wkdZ2TBOW2gIF88PBTzD/gpeREAMEbxnJcaJHNHrpzji0gQCS6hdkEeYt9DF/2qPcEC8RM28Hwmr3sdNyht00byAut2k3gufWNtgtOEOFGUwcXWNDbdNbpgBGxEvKkOQsxivJx33iow0Vw5S6SVTrpVq11ysA2Rp7gTfPfktc6zhtXBBC+adRLshf6sG2RfHPZ5EAc4sVZ83yCN00Fk/4kggu40ZTvIEm5g24qtU4KjBrx/BTTH8ifVASAG7gKrnWxJDcU7x8X6Ecczhm3o6YicvsLXWfh3Ch1W0k8x0nXF+0fFxgt4phz8QvypiwCCFKMqXCnqXExjq10beH+UUA7+nG6mdG/Pu0f3LgFcGrl2s0kNNjpmoJ9o4B29CMO8dMT4Q5ox8uitF6fqsrJOr8qnwNbRzv6hSnG5wP+64C7h9lp30hKNtKdWjtdkbuPA19nJ7Tz3zR/ibgARbhb4AlhavcBebmTHcFl2fvYEnW0ox9xMxKBS8btJ+KiEbq9zA4RthQXDhPa0T9TEe69gWupwc6uBUphquXgf+/FrIjweHQS4/pduMe5ERUMHUd9xv8ZR98CxkS4F2n3EUrUZ10EYNw7BWm9x1GiPssi3GgiGRDKWRYZfXlON+dfNbM+GgIwYdwAAAAASUVORK5CYII=';

  const defaultMarkerShadow =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAApCAQAAAACach9AAACMUlEQVR4Ae3ShY7jQBAE0Aoz/f9/HTMzhg1zrdKUrJbdx+Kd2nD8VNudfsL/Th///dyQN2TH6f3y/BGpC379rV+S+qqetBOxImNQXL8JCAr2V4iMQXHGNJxeCfZXhSRBcQMfvkOWUdtfzlLgAENmZDcmo2TVmt8OSM2eXxBp3DjHSMFutqS7SbmemzBiR+xpKCNUIRkdkkYxhAkyGoBvyQFEJEefwSmmvBfJuJ6aKqKWnAkvGZOaZXTUgFqYULWNSHUckZuR1HIIimUExutRxwzOLROIG4vKmCKQt364mIlhSyzAf1m9lHZHJZrlAOMMztRRiKimp/rpdJDc9Awry5xTZCte7FHtuS8wJgeYGrex28xNTd086Dik7vUMscQOa8y4DoGtCCSkAKlNwpgNtphjrC6MIHUkR6YWxxs6Sc5xqn222mmCRFzIt8lEdKx+ikCtg91qS2WpwVfBelJCiQJwvzixfI9cxZQWgiSJelKnwBElKYtDOb2MFbhmUigbReQBV0Cg4+qMXSxXSyGUn4UbF8l+7qdSGnTC0XLCmahIgUHLhLOhpVCtw4CzYXvLQWQbJNmxoCsOKAxSgBJno75avolkRw8iIAFcsdc02e9iyCd8tHwmeSSoKTowIgvscSGZUOA7PuCN5b2BX9mQM7S0wYhMNU74zgsPBj3HU7wguAfnxxjFQGBE6pwN+GjME9zHY7zGp8wVxMShYX9NXvEWD3HbwJf4giO4CFIQxXScH1/TM+04kkBiAAAAAElFTkSuQmCC';

  return new L.Icon({
    iconUrl: defaultMarker,
    iconAnchor: [12, 41],
    popupAnchor: [0, -41],
    tooltipAnchor: [14, -30],
    shadowUrl: defaultMarkerShadow
  });
};

export default Map;
