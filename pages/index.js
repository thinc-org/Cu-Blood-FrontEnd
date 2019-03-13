import React, { Component } from 'react';
import Statistic from "@/home/local-components/Statistic";
import HomeHead from '@/home/local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from '@/home/local-components/Announcement';
import UrgentAnnouncement from '@/home/local-components/UrgentAnnouncement';
import axios from '@/core/core';
import '../static/css/index.css';
import CalendarContainer from '@/home/local-components/CalendarContainer';

class App extends Component {

  static async getInitialProps() {
    const date = new Date();

    const year = date.getFullYear();
    const announcementdataPromise = axios.get('/announcements/all/1')
    const statDataPromise = axios.get(`/commons/insights/blood-types/${year}`)
    const FacebookPostsPromise = axios.get('/commons/facebook/posts')
    const calendarEventsPromise = axios.get('/events/all/1')
    const commonsDataPromise = axios.get('/commons');

    const data = await Promise.all([announcementdataPromise, statDataPromise, FacebookPostsPromise, calendarEventsPromise, commonsDataPromise]
      .map(p => p
        .then(response => response.data)
        .catch(e => null)))
      .catch(console.log);

    const [announcementData, statData, facebookPosts, calendarEvents, commonsData] = data;
    return {
      announcementData: announcementData ? announcementData.result.data : undefined,
      statData: statData ? statData.result : undefined,
      facebookPosts: facebookPosts ? facebookPosts.result : undefined,
      calendarEvents: calendarEvents ? calendarEvents.result.data : undefined,
      commonsData: commonsData ? commonsData.result : undefined,
      year,
      namespacesRequired: ['common', 'index'],
    };
  }

  render() {
    const { announcementData, statData, facebookPosts, calendarEvents, commonsData, year } = this.props;
    return (
      <div className="font-sans border-black flex flex-col content-center w-full" >
        <HomeHead />
        <UrgentAnnouncement commonsData={commonsData} />
        <Announcement announcementData={announcementData} />
        <CalendarContainer calendarEvents={calendarEvents} />
        <Statistic statData={statData} year={year} />
        <FacebookContainer posts={facebookPosts} />
        <Footer />
      </div>
    );
  }
}

export default App