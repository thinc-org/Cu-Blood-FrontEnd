import React, { Component } from 'react';
import Statistic from "@/home/local-components/Statistic";
// import EventContainer from './components/EventContainer';
import HomeHead from '@/home/local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from '@/home/local-components/Announcement';
import UrgentAnnouncement from '@/home/local-components/UrgentAnnouncement';
import Main from '$/main'


class App extends Component {

  render() {

    return (
      <Main>
        <div className="font-sans border-black flex flex-col content-center w-screen" >
          <HomeHead />
          <UrgentAnnouncement />
          <Announcement />
          {/* <EventContainer /> */}
          <Statistic />
          <FacebookContainer />
          <Footer />
        </div>
      </Main>
    );
  }
}

export default App;
