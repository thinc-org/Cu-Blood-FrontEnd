import React, { Component } from 'react';
import Home from './views/home/Home'
import Navbar from './views/shared-components/Navbar';

class App extends Component {

  render() {

    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}

export default App;
