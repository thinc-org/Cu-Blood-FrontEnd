import React, { Component } from 'react';
import Statistic from "./component/Statistic";
//import axios from './core/core';
import Navbar from './component/Navbar';
import EventContainer from './component/EventContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class App extends Component {

  render() {

    return (
      <div className="font-sans border-black flex flex-col content-center w-screen" style={{ height: '2000px', background: 'linear-gradient(to right bottom, #ffffff, #000)' }}>
        <Navbar />
        <Statistic/>
        <div >
          <EventContainer/>
        </div>
      </div>
    );
  }
}

export default App;
