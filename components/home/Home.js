import React, { Component } from 'react';
import Statistic from "@/home/local-components/Statistic";
// import EventContainer from '@/home/local-components/EventContainer';
import HomeHead from '@/home/local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from '@/home/local-components/Announcement';
import UrgentAnnouncement from '@/home/local-components/UrgentAnnouncement';
import axios from '@/core/core'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        announcementData: [],
        statData: [],
        isFetched: false,
    }
  }

  componentDidMount() {
    //Save announcementData to state
    this.getAnnouncementData()
    .then(response => this.setState({
        announcementData: response.data
    }))
    .catch(console.log)
    
    //Save statData to state
    this.getStatData()
    .then(response => this.setState({
        statData: response.data
    }))
    .catch(console.log)

    this.setState({isFetched: true})
  }

  render() {    
    //If data is not fetched
    if (!this.state.isFetched) {
      return (
        <div></div>
      )
    }

    //If data is fetched
    return (
      <div className="font-sans border-black flex flex-col content-center w-screen" >
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement announcementData={this.state.announcementData}/>
        {/* <EventContainer /> */}
        <Statistic statData={this.state.statData}/>
        <FacebookContainer />
        <Footer />
      </div>
    );
  }

  async getStatData() {
    return await axios.get('./posts')
    .then(response => response.data.length)
    .then(dataNumber => axios.get(`./posts?_start=${dataNumber-4}&_limit=4`));
  }  

  async getAnnouncementData() {
    return await axios.get('./posts')
    .then(response => response.data.length)
    .then(dataNumber => axios.get(`./posts?_start=${dataNumber-5}&_limit=5`));
  }    
}

export default App;
