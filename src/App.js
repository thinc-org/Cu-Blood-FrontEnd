import React, { Component } from 'react';
import Statistic from "./component/Statistic";
//import axios from './core/core';
import Navbar from './component/Navbar';
import EventContainer from './component/EventContainer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import EventCard from './component/EventCard';


class App extends Component {

  render() {

    return (
      <div className="font-sans border-black flex flex-col content-center w-screen bg-grey-light" style={{ height: '2000px'}}>
        <Navbar />
        <Statistic />
        <EventContainer />
        {/* <EventCard/> */}
      </div>
    );
  }
}

export default App;
