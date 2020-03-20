import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import L from 'leaflet';


function App() {

  useEffect(() => 
  {
    L.map('mapid', {
      center: [49.8419, 24.0315],
      zoom: 16,
      layers: [
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }),
      ]
    });

  }
 ,[]);
   
  return (
    <div className="App">
      <header className="App-header">
      </header>
    <div id="mapid"></div>
    </div>
  );
}

export default App;
