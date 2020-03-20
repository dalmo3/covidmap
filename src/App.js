import React from 'react';
import Map from './components/Map';
import './App.css';
// import Menu from 'react-burger-menu/lib/menus/reveal';
import Sidebar from './containers/Sidebar'

const App = props => (
    <Sidebar>
      <Map />
    </Sidebar>
  
);

export default App;
