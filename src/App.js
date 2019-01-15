import React, { Component } from 'react';
import Statistic from "./Component/Statistic";

class App extends Component {
  render() {
    return (
      <div className="font-sans border-black">
        <p>Hello.</p>
        <Statistic />
      </div>
    );
  }
}

export default App;