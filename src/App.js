import React, { Component } from 'react';
import axios from './core/core';
import Navbar from './component/Navbar';

class App extends Component {

  async getSomeData(obj) {
    return await axios.post('./posts', obj)
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="">
        
        </div>
      </div>
    );
  }
}

export default App;
