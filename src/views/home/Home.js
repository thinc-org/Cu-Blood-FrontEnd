import React, { Component } from 'react';
import Statistic from "./components/Statistic";
// import EventContainer from './components/EventContainer';
import HomeHead from './components/HomeHead';
import FacebookContainer from '../shared-components/FacebookContainer';
import Footer from '../shared-components/Footer';
import Announcement from './components/Announcement';
import UrgentAnnouncement from './components/UrgentAnnouncement';


class App extends Component {

  render() {

    return (
      <div className="font-sans border-black flex flex-col content-center w-screen" >
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement />
        {/* <EventContainer /> */}
        <Statistic />
        <FacebookContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
