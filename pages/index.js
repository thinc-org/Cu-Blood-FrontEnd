import React, { Component } from 'react';
import Statistic from "@/home/local-components/Statistic";
// import EventContainer from './components/EventContainer';
import HomeHead from '@/home/local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from '@/home/local-components/Announcement';
import UrgentAnnouncement from '@/home/local-components/UrgentAnnouncement';
import axios from '@/core/core';
import '../static/css/index.css';

class App extends Component {

  static async getInitialProps() {
     //Save announcementData to state
    const announcementData = await axios.get('./posts')
      .then(response => response.data.length)
      .then(dataNumber => axios.get(`./posts?_start=${dataNumber - 5}&_limit=5`))
      .then(response => response.data)
      .catch(console.log);

    //Save statData to state
    const statData = await axios.get('./posts')
      .then(response => response.data.length)
      .then(dataNumber => axios.get(`./posts?_start=${dataNumber - 4}&_limit=4`))
      .then(response => response.data)
      .catch(console.log)

    return {
      announcementData,
      statData
    };
  }

  render() {
    // console.log(this.props.announcementData, 'props')
    //If data is not fetched
    if (!(this.props.announcementData && this.props.statData)) {
      return (
        <div></div>
      )
    }

    //If data is fetched
    return (
      <div className="font-sans border-black flex flex-col content-center w-screen" >
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement announcementData={this.props.announcementData} />
        {/* <EventContainer /> */}
        <Statistic statData={this.props.statData} />
        <FacebookContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
