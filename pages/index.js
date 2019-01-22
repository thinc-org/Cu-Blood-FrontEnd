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
import I18 from '@/core/i18n';

class App extends Component {

  static async getInitialProps() {
    //Get announcement data
    const announcementData = await axios.get('https://api-dev.fives.cloud/api/v1/public/announcements/all/1')
    .then(response => response.data)
    .then(result => result.data)
    .then(result => result.data)
    .catch(console.log);

    //Get stat data
    const statData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data.length)
      .then(dataNumber => axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${dataNumber - 4}&_limit=4`))
      .then(response => response.data)
      .catch(console.log);

    const facebookPosts = await axios.get('https://api-dev.fives.cloud/api/v1/public/facebook')
      .then(response => response.data)
      .then(result => result.data)
      .catch(console.log);

    return {
      announcementData,
      statData,
      facebookPosts
    };
  }

  render() {
    const { announcementData, statData, facebookPosts } = this.props;

    return (
      <div className="font-sans border-black flex flex-col content-center w-full" >
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement announcementData={announcementData} />
        {/* <EventContainer /> */}
        <Statistic statData={statData} />
        <FacebookContainer posts={facebookPosts} />
        <Footer />
      </div>
    );
  }
}

export default I18.withNamespaces('common')(App)
