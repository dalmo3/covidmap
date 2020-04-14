import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from 'react';
import './CaseMap.css';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import 'leaflet.beautifymarker/leaflet-beautify-marker-icon';
import 'leaflet.beautifymarker/leaflet-beautify-marker-icon.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import {
  getCoordinates,
  getMarkerIcon,
  getFlightMarkers
} from '../utils/mapUtils';
import {
  Slider,
  Typography,
  Card,
  CardContent,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';
import debounce from 'lodash/debounce';
// const { getFlight } = require('../utils/flight');
import { getFlight } from '../utils/flight';
// import data1 from '../data/MoH/current.json';

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


  // FETCH CASE DATA
  
  const data = useRef();
  const [dataReady, setDataReady] = useState(false);
  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/current.json')
      .then((caseData) => caseData.json())
      .then((json) => {
        data.current = json;
        setDataReady(true);
      });
  }, []);


  // INITIALISE MAP VARIABLES

  const mymap = useRef(null);
  const markerCluster = useRef(
    L.markerClusterGroup({
      showCoverageOnHover: false,
      spiderfyDistanceMultiplier: 2,
      maxClusterRadius: 40,
      // zoomToBoundsOnClick: false
    }).on('clusterclick', (e) => {
      if (showTutorial.current) {
        toast('Click on a case for details!', {
          position: 'bottom-right',
          pauseOnHover: false,
          pauseOnFocusLoss: false,
          progressClassName: 'toast_progress',
        });
        showTutorial.current = false;
      }
    })
  );
  const traceFeatures = useRef(L.featureGroup());


  // INITIALISE MAP STATE

  const [showClusters, setShowClusters] = useState(true);
  const [showTrace, setShowTrace] = useState(false);
  const showTutorial = useRef(true);
  const initialMapView = {
    center: [-40.9006, 172.586],
    zoom: 5 + (window.innerHeight > 800),
  };


  // SLIDERS STATE

  const [dateFilter, setDateFilter] = useState(moment());
  const [clusterRadius, setClusterRadius] = useState(40);


  // SETUP MAP INSTANCE

  const initMap = () => {
    // create map
    mymap.current = L.map('map', initialMapView);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
      maxZoom: 14,
      minZoom: 2,
    }).addTo(mymap.current);

    document.addEventListener('keyup', (e) => {
      if (e.keyCode === 27) {
        resetMarkers();
        if (mymap.current.getZoom() < 6) resetZoom();
        dis();
      }
    });
  };
  useEffect(initMap, []);
  useEffect(() => console.log('%cMounted', 'color: #FA0'), []);

  // CASE DATA PROCESSING
  
  const getCasesForCurrentDate = useMemo(
    () =>
      data.current?.confirmed
        .concat(data.current.probable)
        .filter((patient) =>
          moment(patient.report_date, 'D/MM/YYYY').isSameOrBefore(
            dateFilter,
            'days'
          )
        ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dateFilter, dataReady]
  );

  const getNumCases = useMemo(() => getCasesForCurrentDate?.length, [
    getCasesForCurrentDate,
  ]);

  const getClustersForCurrentDate = useMemo(() => {
    const generateMarkersFilteredByDate = (maxDate) => {
      const markers = getCasesForCurrentDate?.map(async (patient) => {
        const location = patient.dhb;
        // patient.location_history.slice(-1)[0] && patient.location_history.slice(-1)[0].location || patient.location ||
        const coords = await getCoordinates(location);
        const marker = L.marker(coords, {
          icon: getMarkerIcon(patient),
        })
          .bindTooltip(
            `${location + ' DHB'}
        <br>
        ${moment(patient.report_date, 'DD/MM/YYYY').format('D MMM')}`
          )
          .on('click', () => {
            // setShowClusters(false);
            dis();
            traceCase(patient);
          });
        return marker;
      });

      return Promise.resolve(markers && Promise.all(markers));
    };
    return generateMarkersFilteredByDate(dateFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateFilter, dataReady, getCasesForCurrentDate, ]);

  const showClustersForCurrentDate = useCallback(
    () =>
      getClustersForCurrentDate.then(
        (markers) => markers && markerCluster.current.addLayers(markers)
      ),
    [getClustersForCurrentDate]
  );

  useEffect(() => {
    showClustersForCurrentDate();
  }, [showClustersForCurrentDate]);


  // MAP VIEW MANIPULATION

  const resetMarkers = () => {
    setShowClusters(true);
    setShowTrace(false);
  };

  const resetZoom = () => {
    mymap.current.flyTo(initialMapView.center, initialMapView.zoom);
  };

  const resetClusters = () => markerCluster.current.clearLayers();

  const isPortraitMode = () => window.innerHeight * 1.3 > window.innerWidth;

  useEffect(() => {
    if (showClusters) markerCluster.current.addTo(mymap.current);
    else markerCluster.current.remove();
  }, [showClusters]);

  // const updateMap = () => {
  //   showClusters && mymap.current.addLayer(showClusters);
  // };


  // CASE TRACING

  const displayTrace = () => {
    setShowClusters(!showTrace)
    if (showTrace) {
      traceFeatures.current.addTo(mymap.current);
    }
    else traceFeatures.current.remove();
  };
  useEffect(displayTrace, [showTrace]);

  // display case paths
  const traceCase = async (patient) => {
    showTraceToast(patient)

    const flight = getFlight(patient);
    if (!flight) return;
    traceFeatures.current = L.featureGroup(await getFlightMarkers(flight));
    
    let brPadding = [
      isPortraitMode() ? 20 : window.innerWidth / 3,
      isPortraitMode() ? window.innerHeight / 2 : 20,
    ];

    mymap.current.flyToBounds(traceFeatures.current.getBounds(), {
      paddingBottomRight: brPadding,
      paddingTopLeft: [20, 20],
      duration: 1,
      maxZoom: Math.min(12, mymap.current.getZoom()),
    });
    setShowTrace(true);
  };

  const showTraceToast = (patient) => {
    const isProbable = patient.status === 'probable';
    // console.log(patient.status);
    const t = toast(
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
          setShowTrace(false)
          // resetMarkers();
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

  // MAP FEATURES
  // get user location
  // const getUserLocation = () => {
  //   mymap.current.locate({ setView: true, maxZoom: 12 });
  //   function onLocationFound(e) {
  //     var radius = e.accuracy;

  //     // L.circleMarker(e.latlng)
  //     //   .addTo(mymap.current)

  //     L.circle(e.latlng, radius).addTo(mymap.current);
  //     // .bindPopup('You are within ' + radius + ' meters from this point')
  //     // .openPopup();
  //   }

  //   mymap.current.on('locationfound', onLocationFound);
  //   // function onLocationError(e) {
  //   //   alert(e.message);
  //   // }
  //   // mymap.current.on('locationerror', onLocationError);
  // };
  // // useEffect(getUserLocation, []);


  // SERIES OF FUNCTIONS RULING THE SLIDERS
  
  const deb = (fn) => debounce(fn, 10);

  useEffect(() => {
    resetClusters();
    showClustersForCurrentDate();
  }, [dataReady, dateFilter, showClustersForCurrentDate]);

  const handleSliderChange = (event, newValue) => {
    const newDate = getDateFromDOY(newValue);
    if (!newDate.isSame(dateFilter, 'days')) {
      // console.log('changed date');
      setDateFilter(newDate);
    }
  };

  useEffect(()=>console.log('rendered'))
  const getDateFromDOY = (doy) =>
    moment().subtract(moment().dayOfYear(), 'days').add(doy, 'days');

  // const valueLabelFormat

  const sliderValueLabelFormat = (value) => (
    <span>
      {getDateFromDOY(value).format('D MMM').split(' ')[0]}
      <br />
      {getDateFromDOY(value).format('D MMM').split(' ')[1]}
    </span>
  );

  useEffect(() => {
    markerCluster.current.options.maxClusterRadius = clusterRadius;
    resetClusters();
    showClustersForCurrentDate();
  }, [clusterRadius, showClustersForCurrentDate]);

  const handleRadiusChange = (event, newValue) => {
    if (newValue !== clusterRadius) {
      console.log('changed date');
      setClusterRadius(newValue);
    }
  };
  //
  //
  //
  const theme = createMuiTheme({
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  });
  return (
    <div id="controls-container">
      <div id="map"></div>
      <ThemeProvider theme={theme}>
        {
          (showClusters)? // only show button on clusters view
        <Card
          style={{
            color: 'white',
            zIndex: 1000,
            // height: '120px',
            // width: '120px',
            backgroundColor: '#c9171a',
            position: 'absolute',
            top: '100px',
            left: '10px',
            borderRadius: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            // maxWidth: '20vw',
            // maxHeight: '20vw',
            width: '95px',
            height: '95px',
          }}
        >
          <CardContent
            style={{
              padding: '5px',
              textAlign: 'center',
            }}
          >
            <Typography variant="button">
              {dateFilter.format('D MMM')}
              <br></br>
            </Typography>
            <Typography variant="h4">{getNumCases}</Typography>
            <Typography
              variant="body2"
              // style={{margin: '-5px 0 5px'}}
            >
              {getNumCases !== 1 ? 'cases' : 'case'}
            </Typography>
          </CardContent>
        </Card>
        : '' 
      }
        <Slider
          orientation="vertical"
          style={{
            zIndex: 1000,
            height: '20vw',
            maxHeight: '200px',
            position: 'absolute',
            bottom: '70px',
            left: '10px',
          }}
          // value={clusterRadius}
          defaultValue={40}
          getAriaValueText={(value) => `${value / 0.8}%`}
          valueLabelFormat={(value) => `${value / 0.8}%`}
          aria-labelledby="discrete-slider-small-steps"
          step={8}
          // marks
          min={0}
          max={80}
          onChange={deb(handleRadiusChange)}
          valueLabelDisplay="auto"
        />
        <Slider
          style={{
            zIndex: 1000,
            width: '50vw',
            maxWidth: '400px',
            position: 'absolute',
            bottom: '20px',
            left: '30px',
          }}
          // value={dateFilter.dayOfYear()}
          defaultValue={moment().dayOfYear()}
          getAriaValueText={sliderValueLabelFormat}
          valueLabelFormat={sliderValueLabelFormat}
          aria-labelledby="discrete-slider-small-steps"
          step={1}
          // marks
          min={moment('2020-02-26').dayOfYear()}
          max={moment().dayOfYear()}
          onChange={deb(handleSliderChange)}
          valueLabelDisplay="auto"
        />
      </ThemeProvider>
    </div>
  );
}

export default CaseMap;
