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
      <a id="home" className="menu-item" href="/">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={() => {}} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
    <main id="page-wrap">
      {props.children}
    </main>
  </div>
);

export default Sidebar;
