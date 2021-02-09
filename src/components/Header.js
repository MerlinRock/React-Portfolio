import React from "react";
import './Header.css';
import { Section } from 'react-bulma-components';
import { Link, useLocation } from "react-router-dom";


// const styles = {
//     hr: {
//         margin: 0,
//         background: "red",
//         height: "4px"
//     }
// }


function Header() {
  const location = useLocation()
  return (
<div className="hero-head">
  <nav className="navbar" role="navigation" aria-label="main navigation">
    <div className="navbar-brand">
      <Link className="navbar-item" href="https://bulma.io">
        <h1>Merlin Rock</h1>
      </Link>

      <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link className="navbar-item">
          About
        </Link>

        <Link className="navbar-item">
          Portfolio
        </Link>

        <Link className="navbar-item">
          Contact
        </Link>

        <Link className="navbar-item">
          Resume
        </Link>
      </div>
    </div>
  </nav>
</div>
  )
};

  export default Header;