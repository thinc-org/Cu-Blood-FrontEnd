import React, { Component } from 'react';
import Statistic from "./Component/Statistic";
import axios from './core/core';
import Navbar from './Component/Navbar';

class App extends Component {

  render() {
    return (
      <div className="font-sans border-black">  
        <Navbar />
        <Statistic />
        <div style={{height:'2000px', background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}>
        </div>
      </div>
    );
  }
}

export default App;