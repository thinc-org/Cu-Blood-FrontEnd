import React, { Component } from 'react';
import axios from './core/core';
import Navbar from './component/Navbar';

class App extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div style={{height:'2000px', background: 'linear-gradient(to right bottom, #430089, #82ffa1)'}}>
        </div>
      </div>
    );
  }
}

export default App;
