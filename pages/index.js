import React, { Component } from 'react';
import Statistic from "@/home/local-components/Statistic";

import HomeHead from '@/home/local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from '@/home/local-components/Announcement';
import UrgentAnnouncement from '@/home/local-components/UrgentAnnouncement';
import axios from '@/core/core';
import '../static/css/index.css';
import I18 from '@/core/i18n';
// import CalendarContainer from '@/home/local-components/CalendarContainer';

class App extends Component {

  static async getInitialProps() {

    const announcementdataPromise = axios.get('https://api-dev.fives.cloud/v0/announcements/all/1')
    const statDataPromise = axios.get(`https://jsonplaceholder.typicode.com/posts?_start=96&_limit=4`)
    const FacebookPostsPromise = axios.get('https://api-dev.fives.cloud/v0/commons/facebook/posts')
    const calendarEventsPromise = axios.get('https://api-dev.fives.cloud/v0/events/all/1')

    const data = await Promise.all([announcementdataPromise, statDataPromise, FacebookPostsPromise, calendarEventsPromise]
      .map(p => p
        .then(response => response.data)
        .catch(e => null)))
      .catch(console.log);

    const [announcementData, statData, facebookPosts, calendarEvents] = data;
    return {
      announcementData: announcementData ? announcementData.result.data : undefined,
      statData: statData ? statData : undefined,
      facebookPosts: facebookPosts ? facebookPosts.result : undefined,
      calendarEvents: calendarEvents ? calendarEvents.result.data : undefined,
    };
  }

  render() {
    const { announcementData, statData, facebookPosts, calendarEvents } = this.props;

    return (
      <div className="font-sans border-black flex flex-col content-center w-full" >
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement announcementData={announcementData} />
        {/* <CalendarContainer calendarEvents={calendarEvents}/>  will temport disable this until boom fix layout problem on mobile */}
        <Statistic statData={statData} />
        <FacebookContainer posts={facebookPosts} />
        <Footer />
      </div>
    );
  }
}

export default I18.withNamespaces('common')(App)
