import React from 'react';
import './Sidebar.css';
import Menu from 'react-burger-menu/lib/menus/reveal';

const Sidebar = props => (
  <div id="outer-container">
    <Menu
      right
      // isOpen={true}
      pageWrapId={'page-wrap'}
      outerContainerId={'outer-container'}
    >
      <h4>Built by Dalmo Mendonça</h4>
      <p>More info soon...</p>
      <p>Got info on cases? Contact us at <a href='mailto:info@covidmap.nz'>info@covidmap.nz</a></p>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <p>Sponsored by <a href='https://virtua.nz'>Virtua</a></p>
      <p><a href='mailto:info@covidmap.nz'>Become a sponsor</a></p>
    </Menu>
    <main id="page-wrap">
      {props.children}
    </main>
  </div>
);

export default Sidebar;
