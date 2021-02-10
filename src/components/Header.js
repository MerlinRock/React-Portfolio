import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  return (
<div className="hero-head">
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link to="/about" className="navbar-item">
        <h1 className=" has-text-grey-lighter">Merlin Rock</h1>
      </Link>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu ">
      <div className="navbar-start">
        <Link to="/about" className="navbar-item has-text-grey-light">
          About
        </Link>

        <Link to="/portfolio" className="navbar-item has-text-grey-light">
          Portfolio
        </Link>

        <Link to="/contact" className="navbar-item has-text-grey-light">
          Contact
        </Link>

        <Link to="/resume"className="navbar-item has-text-grey-light">
          Resume
        </Link>
      </div>
    </div>
  </nav>
</div>
  )
};

  export default Header;