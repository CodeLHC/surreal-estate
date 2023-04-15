import React from 'react';
import '../styles/navBar.css';

const NavBar = () => (
  <div className="navBar">
    <img
      src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
      alt="navBar"
    />
    <ul className="navbar-links">
      <li className="navbar-links-items">View Properties</li>
      <li className="navbar-links-items">Add a Property</li>
    </ul>
  </div>
);

export default NavBar;
