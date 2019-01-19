import React, { Component } from 'react';
import Main from '$/main'
// import Home from '@/home/Home'
import About from '@/about/About'
import '../static/css/index.css'

class App extends Component {
  render() {
    return (
      <Main>
        {/* <Home /> */}
        <About />
      </Main>
    );
  }
}

export default App;