import React, { Component } from 'react';
import Statistic from "./local-components/Statistic";
// import EventContainer from './components/EventContainer';
import HomeHead from './local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from './local-components/Announcement';
import UrgentAnnouncement from './local-components/UrgentAnnouncement';


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
