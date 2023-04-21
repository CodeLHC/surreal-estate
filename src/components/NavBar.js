import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navBar.css";

const NavBar = () => (
  <div className="navBar">
    <img
      src="https://mcrcodes.s3.eu-west-2.amazonaws.com/course/surreal-estate/logo.png"
      alt="navBar"
    />
    <ul className="navbar-links">
      <li className="navbar-links-items">
        <NavLink to="/">View Properties</NavLink>
      </li>
      <li className="navbar-links-items">
        <NavLink to="add-property">Add a Property</NavLink>
      </li>
    </ul>
  </div>
);

export default NavBar;
