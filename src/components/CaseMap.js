import React, { useRef, useEffect, useState } from 'react';
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
import { getFlight } from '../utils/flight'
import { getCoordinates, getMarkerIcon, getMarkerIcon_old, getFormattedDateString } from '../utils/mapUtils'
const data = require('../data/MoH/current.json');

toast.info(
  'Disclaimer: The markers are placed where the case was reported, not where the patients live or stay.',
  {
    position: 'bottom-right',
    pauseOnHover: false,
    pauseOnFocusLoss: false,
    // progressStyle: {backgroundColor: 'C9171a'},
    progressClassName: 'toast_progress'
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
  document.addEventListener('keyup', e => {
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
  const mymap = useRef(null);
  const markerCluster = useRef(
    L.markerClusterGroup({
      showCoverageOnHover: false,
      spiderfyDistanceMultiplier: 2,
      // zoomToBoundsOnClick: false
    }).on('clusterclick', e => {
      if (showTutorial.current) {
        // console.log(showTutorial)
        toast('Click on a case for details!', {
          position: 'bottom-right',
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          // progressStyle: {backgroundColor: 'C9171a'},
          progressClassName: 'toast_progress'
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
    zoom: 5 + (window.innerHeight > 800)
  };

  useEffect(() => {}, [showTutorial]);
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
    // const accessToken =
    //   process.env.REACT_APP_mymap.currentBOX_TOKEN ||
    //   'pk.eyJ1IjoiZGFsbW8zIiwiYSI6ImNrODNwZjc5ajFkNmczbW5xdnVjenFmcDMifQ.BzOx7JrPoVOmkxl6sKCk4A';
    // console.log(process.env);
    // alert(accessToken)
    L.tileLayer(
      // `https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=${accessToken}`,
      'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      {
        // attribution:
        // 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        attribution:
          '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
        maxZoom: 14,
        minZoom: 2
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
    // console.log('case_number', data.cases.concat(data.probable_cases))
    data.confirmed.concat(data.probable).forEach(async patient => {
      const location =
        // patient.location_history.slice(-1)[0] && patient.location_history.slice(-1)[0].location || patient.location ||
        patient.dhb;
      const coords = await getCoordinates(location);

      const marker = L.marker(coords, {
        icon: getMarkerIcon(patient)
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

  useEffect(() => {
    if (showTrace) setShowClusters(!showTrace);
  }, [showTrace]);

  const traceCase = async patient => {
    const {
      flight: flightNumber,
      arrival_date: arrivalDate,
      departure_date: departureDate
    } = patient;
    // if (!flightNumber) return;
    // const hasDates = patient.departure_date || patient.arrival_date;
    const flight = getFlight(patient);
    if (!flight) return;
    setShowTrace(true);

    const flightEventMarker = async flightEvent => {
      const coords = await getCoordinates(flightEvent.airport);
      const evtDate = moment(flightEvent.date + ' ' + flightEvent.time).format(
        'D MMM h:mm a'
      );
      return L.marker(coords, {
        icon: getMarkerIcon_old()
      }).bindTooltip(`${flightEvent.airport}<br>${evtDate}`, {
        permanent: true
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
      isPortraitMode() ? window.innerHeight / 2 : 20
    ];

    mymap.current.flyToBounds(caseFeatures.current.getBounds(), {
      paddingBottomRight: brPadding,
      paddingTopLeft: [20, 20],
      duration: 1,
      maxZoom: Math.min(12, mymap.current.getZoom())
    });
  };

  // display case paths
  const traceCase_old = async patient => {
    // find all markers
    const locations = patient.location_history;
    const hasConnections = !!patient.location_history.length;
    if (!hasConnections) locations.push({ location: patient.location });
    const caseMarkers = await Promise.all(
      locations.map(async loc => {
        // console.log(loc)
        // console.log(loc.location);
        const coords = await getCoordinates(loc.location);
        // const [lat, lon] = await getCoordinates(loc.location);
        // console.log(lat, lon)
        const locDate = getFormattedDateString(loc.date);
        // const locMarker = L.marker([lat, lon], { icon: getMarkerIcon() })
        const locMarker = L.marker(coords, {
          icon: getMarkerIcon_old(patient.case_number)
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
    // console.log(caseFeatures.current.getBounds());

    const maxZoom = hasConnections
      ? Math.min(12, mymap.current.getZoom())
      : Math.max(8, mymap.current.getZoom());

    // setPortraitMode(false)
    // console.log('mode', isPortraitMode());

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
    // showToast(patient);
  };

  const showToast = patient => {
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
          rel="nofollow nopoener noreferrer"
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

export default CaseMap;
