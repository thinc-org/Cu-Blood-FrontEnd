import React, { Component } from 'react';
import Statistic from "./local-components/Statistic";
// import EventContainer from './components/EventContainer';
import HomeHead from './local-components/HomeHead';
import FacebookContainer from '@/shared-components/FacebookContainer';
import Footer from '@/shared-components/Footer';
import Announcement from './local-components/Announcement';
import UrgentAnnouncement from './local-components/UrgentAnnouncement';
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
    //Set data of announcement into variable
    let announcementTitle = this.state.announcementData.map(element => {
      let a = [];
      a.push(element.title);
      return a;
    })

    let announcementDate = this.state.announcementData.map(element => {
      let a = [];
      a.push(element.id);
      return a;
    })
    
    //Set data of statistic into variable
    let statNumber = this.state.statData.map(element => {
      let a = [];
      a.push(element.id);
      return a;
    });

    let statContent = this.state.statData.map(element => {
      let a =[];
      a.push(element.title);
      return a;
    })

    if (!this.state.isFetched) {
      return (
        <div></div>
      )
    }

    return (
      <div className="font-sans border-black flex flex-col content-center w-screen" >
        <HomeHead />
        <UrgentAnnouncement />
        <Announcement title={announcementTitle} date={announcementDate}/>
        {/* <EventContainer /> */}
        <Statistic number={statNumber} content={statContent}/>
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
