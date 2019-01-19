import React, { Component } from 'react';
import Main from '$/main'
import Home from '@/home/Home'
import RegistrationPage1 from '@/registration/RegistrationPage1'
import '../static/css/index.css'

class App extends Component {
  render() {
    return (
      <Main>
        {/* <Home /> */}
        <RegistrationPage1/>
      </Main>
    );
  }
}

export default App;