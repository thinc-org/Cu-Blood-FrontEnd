import React, { Component } from 'react';
import Statistic from "./Component/Statistic";
import axios from './core/core';

class App extends Component {
  render() {
     return (
      <div className="font-sans border-black">
        <Statistic />
      </div>
    );
  }
}

export default App;