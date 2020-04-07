import React, { useRef, useEffect, useState, useMemo } from 'react';
import './CaseMap.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.geodesic';
import 'leaflet.beautifymarker/leaflet-beautify-marker-icon';
import 'leaflet.beautifymarker/leaflet-beautify-marker-icon.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import {
  getCoordinates,
  getMarkerIcon,
  getMarkerIcon_old,
  getFormattedDateString,
} from '../utils/mapUtils';
import { Slider } from '@material-ui/core';
import { debounce } from 'lodash';
const { getFlight } = require('../utils/flight');
// import { getFlight } from '../utils/flight';
const data = require('../data/MoH/current.json');

toast.info(
  'Disclaimer: The markers are placed where the case was reported, not where the patients live or stay.',
  {
    position: 'bottom-right',
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    // progressStyle: {backgroundColor: 'C9171a'},
    progressClassName: 'toast_progress',
  }
);
// toast.error('76 new cases announced today, will be added as soon as details are released.', {
//   position: 'bottom-right',
//   pauseOnHover: false,
//   pauseOnFocusLoss: false,
//   // progressStyle: {backgroundColor: 'C9171a'},
//   progressClassName: 'toast_progress',
// })

const dis = () => toast.dismiss();

function CaseMap() {
  const mymap = useRef(null);
  const markerCluster = useRef(
    L.markerClusterGroup({
      showCoverageOnHover: false,
      spiderfyDistanceMultiplier: 2,
      // zoomToBoundsOnClick: false
    }).on('clusterclick', (e) => {
      if (showTutorial.current) {
        // console.log(showTutorial)
        toast('Click on a case for details!', {
          position: 'bottom-right',
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          // progressStyle: {backgroundColor: 'C9171a'},
          progressClassName: 'toast_progress',
        });
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
    zoom: 5 + (window.innerHeight > 800),
  };

  document.addEventListener('keyup', (e) => {
    if (e.keyCode === 27) {
      resetMarkers();
      if (mymap.current.getZoom() < 6) resetZoom();
      dis();
    }
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
  // useEffect(() => {}, [showTutorial]);
  // const [mapView, setMapView] = useState(initialMapView);
  const isPortraitMode = () => window.innerHeight * 1.3 > window.innerWidth;

  // render map
  const initMap = () => {
    // create map
    mymap.current = L.map('map', initialMapView);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      maxZoom: 14,
      minZoom: 2,
    }).addTo(mymap.current);
    function onMapClick(e) {
      // alert('You clicked the map at ' + e.latlng);
    }
  };
  useEffect(initMap, []);
  useEffect(() => console.log('%cMounted', 'color: #FA0'), []);

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

  const generateClusters = (maxDate) => {
    const patientsFilteredByDate = data.confirmed
      .concat(data.probable)
      .filter((patient) => {
        return moment(patient.report_date, 'D/MM/YYYY').isSameOrBefore(
          maxDate,
          'days'
        );
      });

    const markers = patientsFilteredByDate.map(async (patient) => {
      const location =
        // patient.location_history.slice(-1)[0] && patient.location_history.slice(-1)[0].location || patient.location ||
        patient.dhb;
      const coords = await getCoordinates(location);

      const marker = L.marker(coords, {
        icon: getMarkerIcon(patient),
      })
        .bindTooltip(
          `${location + ' DHB'}
        <br>
        ${moment(patient.report_date, 'DD/MM/YYYY').format('D MMM')}`,
          {
            // permanent : true
          }
        )
        .on('click', () => {
          // setShowClusters(false);
          dis();
          traceCase(patient);
          showToast(patient);
        });
      return marker;
      // markerCluster.current.addLayer(marker);
    });

    return Promise.all(markers);
  };

  const [dateFilter, setDateFilter] = useState(moment());
  const getClustersByDate = useMemo(()=>generateClusters(dateFilter),[dateFilter])
  useEffect(() => console.log('rendered'));

  const showClustersByDate = () => getClustersByDate
  .then((markers) => {
    // console.log(markers);
    // console.log(markerCluster.current);
    // markers.forEach((marker) => markerCluster.current.addLayer(marker))
    markerCluster.current.addLayers(markers);
  });

  useEffect(
    // generateClusters(moment())
    showClustersByDate
  , []);
  // setTimeout(() =>
  // , 4000)
  // add datapoints to map
  // useEffect(generateClusters, []);
  // useEffect(() => markerCluster.current = ), []);

  const displayClusters = () => {
    if (showClusters) markerCluster.current.addTo(mymap.current);
    else markerCluster.current.remove();
  };
  useEffect(displayClusters, [showClusters]);

  // const updateMap = () => {
  //   showClusters && mymap.current.addLayer(showClusters);
  // };

  useEffect(() => {
    if (showTrace) setShowClusters(!showTrace);
  }, [showTrace]);

  // display case paths
  const traceCase = async (patient) => {
    const {
      flight: flightNumber,
      arrival_date: arrivalDate,
      departure_date: departureDate,
    } = patient;
    // if (!flightNumber) return;
    // const hasDates = patient.departure_date || patient.arrival_date;
    const flight = getFlight(patient);
    if (!flight) return;
    setShowTrace(true);

    const flightEventMarker = async (flightEvent) => {
      const coords = await getCoordinates(flightEvent.airport);
      const evtDate = moment(flightEvent.date + ' ' + flightEvent.time).format(
        'D MMM h:mm a'
      );
      return L.marker(coords, {
        icon: getMarkerIcon_old(),
      }).bindTooltip(`${flightEvent.airport}<br>${evtDate}`, {
        permanent: true,
      });
    };
    const depMarker = await flightEventMarker(flight.departed);
    const arrMarker = await flightEventMarker(flight.arrived);
    console.log(depMarker, arrMarker);
    const line = new L.polyline(
      [depMarker.getLatLng(), arrMarker.getLatLng()],
      { wrap: false, steps: 10 }
    );

    caseFeatures.current = L.featureGroup([depMarker, arrMarker, line]);

    let brPadding = [
      isPortraitMode() ? 20 : window.innerWidth / 3,
      isPortraitMode() ? window.innerHeight / 2 : 20,
    ];

    mymap.current.flyToBounds(caseFeatures.current.getBounds(), {
      paddingBottomRight: brPadding,
      paddingTopLeft: [20, 20],
      duration: 1,
      maxZoom: Math.min(12, mymap.current.getZoom()),
    });
  };

  const showToast = (patient) => {
    const isProbable = patient.status === 'probable';
    // console.log(patient.status);
    let t = toast(
      <div style={{ fontSize: '0.8em' }}>
        <h2>
          Case {patient.case_number}
          {isProbable ? ` (Probable)` : ''}
        </h2>
        <p>{moment(patient.report_date, 'DD/MM/YYYY').format('D MMM')}</p>
        <p>{patient.dhb + ' DHB'}</p>
        <p>
          {patient.gender} {patient.age_bracket}
        </p>
        <p>{patient.overseas_cities}</p>
        <a
          href="https://www.health.govt.nz/our-work/diseases-and-conditions/covid-19-novel-coronavirus/covid-19-current-situation/covid-19-current-cases/covid-19-current-cases-details"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
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
          // dis();
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
      draggable: false,
      // draggablePercent: 40,
      closeButton: <CloseButton />,
      onClose: () => {
        // resetMarkers();
        // if (mymap.current.getZoom() < 6) resetZoom();
      },
    });
  };
  const displayTrace = () => {
    if (showTrace) caseFeatures.current.addTo(mymap.current);
    else caseFeatures.current.remove();
  };
  useEffect(displayTrace, [showTrace]);

  const resetClusters = () => markerCluster.current.clearLayers();


  const [debouncedDate, setDebouncedDate] = useState(moment());
  const deb = (fn) => debounce(fn, 100);

  // useEffect(deb, [dateFilter]);
  useEffect(() => {
    resetClusters();
    // generateClusters(dateFilter);
    showClustersByDate()
    // }, [debouncedDate]);
  }, [dateFilter]);

  const handleChange = (event, newValue) => {
    const newDate = getDateFromDOY(newValue);
    if (!newDate.isSame(dateFilter,'days')) {
      console.log('changed date');
      setDateFilter(newDate);
    }
  };

  const getDateFromDOY = (doy) =>
    moment().subtract(moment().dayOfYear(), 'days').add(doy, 'days');

  // const valueLabelFormat

  return (
    <div id="controls-container">
      <div id="map"></div>
      <Slider
        style={{
          color: 'c9171a',
          zIndex: 10000,
          width: '50vw',
          maxWidth: '400px',
          position: 'absolute',
          bottom: '10px',
          left: '30px',
        }}
        // value={dateFilter.dayOfYear()}
        defaultValue={moment().dayOfYear()}
        // getAriaValueText={valueLabelFormat}
        valueLabelFormat={(value) => 
          <span>
            {getDateFromDOY(value).format('D MMM').split(' ')[0]}
            <br/>
            {getDateFromDOY(value).format('D MMM').split(' ')[1]}
            </span>}
        aria-labelledby="discrete-slider-small-steps"
        step={1}
        marks
        min={moment('2020-02-26').dayOfYear()}
        max={moment().dayOfYear()}
        onChange={deb(handleChange)}
        valueLabelDisplay="auto"
      />
    </div>
  );
}

export default CaseMap;
