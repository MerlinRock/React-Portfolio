import React from "react";
import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
// import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      {/* <Wrapper> */}
      <Header />
      <Body />
      <Footer />
      {/* </Wrapper> */}
    </div>
  );
}

export default App;
