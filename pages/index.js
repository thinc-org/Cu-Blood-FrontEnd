import React, { Component } from 'react';
import Home from '@/home/Home'
import Navbar from '@/shared-components/Navbar';
import ExpandedMenu from '@/shared-components/ExpandedMenu'

import '@/core/tailwind.css';
import '@/core/core.js';
import '../static/css/index.css'

class App extends Component {

  constructor() {
    super();
    this.state = {
      onExpanded: false,
    }
  }

  onMenuExpandListener = () => {
    this.setState({
      onExpanded: true,
    })
    console.log("expanded");
  }

  onMenuCloseListener = () => {
    this.setState({
      onExpanded: false,
    });
    console.log("closed");
  }

  render() {
    return (
      <div>
        <Navbar onExpandListener={this.onMenuExpandListener}/>
        <ExpandedMenu visibility={this.state.onExpanded} onCloseListener={this.onMenuCloseListener}/>
        <Home />
      </div>
    );
  }
}

export default App;