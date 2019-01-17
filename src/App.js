import React, { Component } from 'react';
import Home from 'views/home/Home'
import Navbar from 'views/shared-components/Navbar';
import ExpandedMenu from 'views/shared-components/ExpandedMenu'

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
