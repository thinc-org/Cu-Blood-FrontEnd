import React, { Component } from 'react';
import Statistic from "./Component/Statistic";
//import axios from './core/core';
import Navbar from './component/Navbar';

class App extends Component {

  render() {
    return (
    <div className="font-sans border-black" style={{height:'2000px', background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}>
        <Navbar />
        <Statistic />
     </div>
    );
  }
}

export default App;
