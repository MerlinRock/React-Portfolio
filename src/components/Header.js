import React from "react";
import './Header.css';
import { Section } from 'react-bulma-components'

// const styles = {
//     hr: {
//         margin: 0,
//         background: "red",
//         height: "4px"
//     }
// }


function Header() {
    return (
        <div>
          <nav className="navbar" role="navigation" aria-label="main navigation">
            <Section className="navbar-brand">
              

              <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </Section>

            <Section id="navbarBasicExample" className="navbar-menu">
              <Section className="navbar-start">
                <a className="navbar-item" href="index.html">
                  Home/About Me
                </a>

                <a className="navbar-item" href="portfolio.html">
                  Portfolio
                </a>

                <a className="navbar-item" href="contact.html">
                  Contact
                </a>

                <a className="navbar-item"
                  href="https://docs.google.com/document/d/18z3xuPjWtQcAxq-XY8BxMsd8359yB9sT--OMthnhTt8/edit">
                  My Resume
                </a>
              </Section>
            </Section>
          </nav>
        </div>
      
      
    )
}

export default Header;