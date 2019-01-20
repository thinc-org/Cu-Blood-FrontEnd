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
    const announcementData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data.length)
      .then(dataNumber => axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${dataNumber - 5}&_limit=5`))
      .then(response => response.data)
      .catch(console.log);

    //Save statData to state
    const statData = await axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.data.length)
      .then(dataNumber => axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${dataNumber - 4}&_limit=4`))
      .then(response => response.data)
      .catch(console.log);

    const facebookPosts = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3')
      .then(response => response.data)
      .catch(console.log);

    return {
      announcementData,
      statData,
      facebookPosts
    };
  }

  render() {
    const {announcementData, statData, facebookPosts} = this.props;

    //If data is not fetched
    if (!(announcementData && statData)) {
      return (
        <div></div>
      )
    }

    //If data is fetched
    return (
      <div className="font-sans border-black flex flex-col content-center w-screen" >
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement announcementData={announcementData} />
        {/* <EventContainer /> */}
        <Statistic statData={statData} />
        <FacebookContainer posts={facebookPosts}/>
        <Footer />
      </div>
    );
  }
}

export default App;
