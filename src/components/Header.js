import React from "react";
import logo from "../images/Rok Computing Logo.png"
import './Header.css';

// const styles = {
//     hr: {
//         margin: 0,
//         background: "red",
//         height: "4px"
//     }
// }


function Header() {
    return (
        
        
        // <section className="navbar-brand">
          
            <img src={logo} className="logo"/>
          
    
        //   <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
        //     <span aria-hidden="true"></span>
        //     <span aria-hidden="true"></span>
        //     <span aria-hidden="true"></span>
        //   </a>
        // </section>
    
        // <section id="navbarBasicExample" className="navbar-menu">
        //   <section className="navbar-start">
        //     <a className="navbar-item" href="index.html">
        //       Home/About Me
        //     </a>
    
        //     <a className="navbar-item" href="portfolio.html">
        //       Portfolio
        //     </a>
    
        //     <a className="navbar-item" href="contact.html">
        //       Contact
        //     </a>
    
        //     <a className="navbar-item"
        //       href="https://docs.google.com/document/d/18z3xuPjWtQcAxq-XY8BxMsd8359yB9sT--OMthnhTt8/edit">
        //       My Resume
        //     </a>
        //   </section>
        // </section>
      
      
    )
}

export default Header;