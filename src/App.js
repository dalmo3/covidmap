import React from 'react';
import CaseMap from './components/CaseMap';
import './App.css';
// import Menu from 'react-burger-menu/lib/menus/reveal';
import Sidebar from './containers/Sidebar'
import { ToastContainer } from 'react-toastify';

const Credits = () => (

  <a href='https://virtua.nz' target="_blank" rel="noopener noreferrer" style={
    {
      color: 'black',
      position: "absolute",
      fontSize: "0.8em",
      bottom: '30px',
      right: '8px',
      zIndex: 999,
      textDecoration: 'none',
      fontWeight: 500
    }


  }>Built by Dalmo Mendonça</a>
)

const App = props => (
    <Sidebar>
      <ToastContainer/>
      <CaseMap />   
      <Credits/>
    </Sidebar>
  
);

export default App;
