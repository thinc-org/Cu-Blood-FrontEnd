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

    const announcementdataPromise = axios.get('https://api-dev.fives.cloud/api/v1/public/announcements/all/1')
    const statDataPromise = axios.get(`https://jsonplaceholder.typicode.com/posts?_start=96&_limit=4`)
    const FacebookPostsPromise = axios.get('https://api-dev.fives.cloud/api/v1/public/facebook')

    const data = await Promise.all([announcementdataPromise, statDataPromise, FacebookPostsPromise].map(p => p.catch(e => undefined)))
      .catch(console.log);

    const [announcementData, statData, facebookPosts] = data;
    return {
      announcementData: announcementData ? announcementData.data.data.data : undefined,
      statData: statData ? statData.data : [],
      facebookPosts: facebookPosts ? facebookPosts.data.data : undefined
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
