import React, { Component } from 'react';
import axios from './core/core';

class App extends Component {

  async getSomeData(obj) {
    return await axios.post('./posts', obj)
  }

  render() {
  }
}

export default App;
