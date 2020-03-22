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
      <h2>Built by Dalmo Mendonça</h2>
      <p>More info soon...</p>
      <a href='https://virtua.nz'>Get in touch</a>
    </Menu>
    <main id="page-wrap">
      {props.children}
    </main>
  </div>
);

export default Sidebar;
