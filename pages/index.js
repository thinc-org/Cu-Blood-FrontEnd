import React, { Component } from 'react';
import Main from '$/main'
import Home from './Home.js'
import '../static/css/index.css'

class App extends Component {
  render() {
    return (
      <Main>
        <Home />
      </Main>
    );
  }
}

export default App;