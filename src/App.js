import React, { Component } from 'react';
import Home from './views/home/Home'
import Navbar from './views/shared-components/Navbar';
import NavbarMobile from './views/shared-components/NavbarMobile';

class App extends Component {

  render() {

    return (
      <div>
        <Navbar />
        {/* <NavbarMobile/> */}
        <Home />
      </div>
    );
  }
}

export default App;
