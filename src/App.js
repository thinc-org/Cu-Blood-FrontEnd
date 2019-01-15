import React, { Component } from 'react';
import Statistic from "./Component/Statistic";
import axios from './core/core';
<<<<<<< HEAD
=======
import Navbar from './component/Navbar';
>>>>>>> 47c6bed8224779eb6c5dd83d8f79f980aafa1eb1

class App extends Component {

  render() {
<<<<<<< HEAD
     return (
      <div className="font-sans border-black">
=======
    return (
      <div className="font-sans border-black">  
        <Navbar />
>>>>>>> 47c6bed8224779eb6c5dd83d8f79f980aafa1eb1
        <Statistic />
        <div style={{height:'2000px', background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}>
        </div>
      </div>
    );
  }
}

export default App;