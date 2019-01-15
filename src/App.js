import React, { Component } from 'react';
import axios from './core/core';

class App extends Component {

  async getSomeData(obj) {
    return await axios.post('./posts', obj)
  }

  render() {
    this.getSomeData( {
      test: 'test'
    })
      .then(response => console.log(response.data))
      // .then(result => console.log(result))
      .catch(console.log)
    return (
      <div className="font-sans">
        <p>Hello.</p>
      </div>
    );
  }
}

export default App;
