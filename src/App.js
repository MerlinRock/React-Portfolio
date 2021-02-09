import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Body from "./components/Body";
import Wrapper from "./components/Wrapper";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/ContactMe";
import Resume from "./components/Resume";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Wrapper>
      <Header />
      <Switch>
          <Route exact path="/about" component={AboutMe}>
            <AboutMe />
          </Route>
          <Route exact path="/portfolio" component={Portfolio}>
            <Portfolio />
          </Route>
          <Route exact path="/contact" component={Contact}>
            <Contact />
          </Route>
          <Route exact path="/resume" component={Resume}>
            <Resume />
          </Route>
        </Switch>
      <Footer />
      </Wrapper>
    </div>
    </Router>
  );
}

export default App;
