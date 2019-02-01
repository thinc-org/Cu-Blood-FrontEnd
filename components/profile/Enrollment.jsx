import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';
import Card from '@/shared-components/Card';
import moment from 'moment';
import I18 from '@/core/i18n';
import axios from '@/core/core';
import redirectTo from '@/core/redirectTo.js';
// import { CompositeDisposable } from 'rx';
let i18n = I18.i18n

class Enrollment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            regisDate: (this.props.sessionInfo !== null) && (this.props.sessionInfo[this.props.sessionInfo.length - 1].project.id == this.props.commonsInfo.id) ? this.props.sessionInfo[this.props.sessionInfo.length - 1].timeSlot : moment(this.props.commonsInfo.startDate).format('YYYY-MM-DD'),
            currentSessionId: (this.props.sessionInfo !== null) && (this.props.sessionInfo[this.props.sessionInfo.length - 1].project.id == this.props.commonsInfo.id) ? this.props.sessionInfo[this.props.sessionInfo.length - 1].id : null
        };
    }
    
    componentWillMount() {
        this.props.commonsInfo.registrationPoints.map(element => this.setState({[element.nameEN.replace(/\s+/g, "")] : false, [element.nameEN.replace(/\s+/g, "") + "PutEnroll"] : false, [element.nameEN.replace(/\s+/g, "") + "QRCode"] : false}));
    }

    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const commonsInfo = this.props.commonsInfo;
        const datesDuringDonation = this.betweenDonationDate(commonsInfo.startDate, commonsInfo.endDate);
        const locationContent = commonsInfo.registrationPoints.map(element => this.content(element.nameTH, element.nameEN, element.googleMapsURL, element.nameEN.replace(/\s+/g, ""), element.id));
        const registerEnrollModal = commonsInfo.registrationPoints.map(element => {
            const locationName = element.nameEN.replace(/\s+/g, "");
            return(
                this.firstEnrollModal(this.state[locationName], element.nameTH, element.nameEN, locationName, element.id, commonsInfo.id, datesDuringDonation)
                );
        });
        const changeLocationModal = commonsInfo.registrationPoints.map(element => {
            const locationNamePutEnroll = element.nameEN.replace(/\s+/g, "") + "PutEnroll";
            return(
                this.putEnrollModal(this.state[locationNamePutEnroll], element.nameTH, element.nameEN, locationNamePutEnroll, element.id)
                );
        });
        console.log(this.state.currentSessionId)

        return (
            <div className="bg-cb-grey-lighter pb-10">
                <div className="layout-wide">
                    <Header english="ENROLLMENT" thai="ลงทะเบียนเข้าร่วม" englishColor="text-cb-pink" borderColor="border-cb-red" />
                    <Card>
                        <div className="w-full mb-8 font-cu-heading flex flex-col sm:flex-row text-center sm:text-left justify-between items-center">
                            <div className="text-3xl">{commonsInfo.name}</div>
                            <div className="text-base mt-4 sm:mt-0">วันที่เลือกปริจาคโลหิต: <span className="text-cb-pink">{this.state.regisDate != null ? moment(this.state.regisDate).format('D MMMM') : '-'}</span></div>
                        </div>
                        <div className="w-full border-cb-grey-border border-t border-b pt-8 flex flex-col">
                            {locationContent}
                        </div>
                        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between mt-8">
                            <div className="mb-8 sm:mb-0 text-center sm:text-left"><Detail bigText={`${moment(commonsInfo.registrationStartDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')} - ${moment(commonsInfo.registrationEndDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')}`} smallText="วันลงทะเบียน" isBold={true} /></div>
                            <div className="text-center sm:text-right"><Detail bigText={`${moment(commonsInfo.startDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')} - ${moment(commonsInfo.endDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')}`} smallText="วันบริจาคโลหิต" isBold={true} /></div>
                        </div>
                    </Card>
                    {/* Modal that will show when click */}
                    {registerEnrollModal}           
                    {changeLocationModal}
                </div>
            </div>
        );
    }

    //Function that creates the location and register button
    content = (thaiName, engName, urlLocation, locationToggle, locationId) => {
        const currentSessionInfo = this.props.sessionInfo !== null ? this.props.sessionInfo[this.props.sessionInfo.length - 1] : null;
        const sessionInfoProjectId = currentSessionInfo !== null ? currentSessionInfo.project.id : null;
        const alreadyRegistered = (sessionInfoProjectId == this.props.commonsInfo.id);
        // const isLocationPick = (locationId == currentSessionInfo.locationId);

        const button = this.chooseButton(alreadyRegistered, false, locationToggle);

        return (
            <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="text-center md:text-left mb-4 md:mb-0"><Detail bigText={thaiName} smallText={engName} /></div>
                <div className="flex font-cu-body items-center">
                    <a href={`${urlLocation}`} target="_blank" rel="noopener noreferrer" className="text-base mr-8 text-center" style={{ color: "#58595b" }}>ดูแผนที่</a>
                    {button}
                </div>
            </div>
        );
    }

    //Function to toggle firstEnrollModal on/off
    togglePostEnrollModal = (locationName) => {
        const currentSessionInfo = this.props.sessionInfo !== null ? this.props.sessionInfo[this.props.sessionInfo.length - 1] : null;
        const datePick = currentSessionInfo !== null ? currentSessionInfo.timeSlot : moment(this.props.commonsInfo.startDate).format('YYYY-MM-DD');
        const idReceived = currentSessionInfo !== null ? currentSessionInfo.id : null;
        this.setState({[locationName] : !this.state[locationName], regisDate : datePick, currentSessionId : idReceived})
    }

    //Function to toggle putEnrollModal on/off
    togglePutEnrollModal = (locationName) => {
        this.setState({[locationName] : !this.state[locationName]});
    }

    //Function to post information needed for enroll to API when click accepts
    postEnroll = (locationModal, locationId, projectId) => {
        axios.post('https://api-dev.fives.cloud/v0/profile/me/enroll', {
            projectId: projectId,
            registrationPoint: locationId,
            timeSlot: this.state.regisDate
        })
        .then(console.log)
        .then(redirectTo('/u/profile'))
        .then(this.togglePostEnrollModal(locationModal))
        .catch(console.log)
    }

    //Function to put information needed for enroll to API when click accepts
    putEnroll = (locationModal, registrationPoint) => {
        axios.put('https://api-dev.fives.cloud/v0/profile/me/enroll', {
            sessionId: this.state.currentSessionId,
            registrationPoint: registrationPoint
        })
        .then(console.log)
        .then(redirectTo('/u/profile'))
        .then(this.togglePutEnrollModal(locationModal))
        .catch(console.log)
    }

    //Function to setState to regisDate for when date option is pick
    handleChange = (event) => {
        this.setState({regisDate: event.target.value})
    }

    //Create an array of dates between the start and end of donation
    betweenDonationDate = (startDate, endDate) => {
        let start = moment(startDate);
        const end = moment(endDate);
        let dates = [];

        while(start <= end) {
            dates.push(start.format('YYYY-MM-DD'));
            start = start.clone().add(1, 'days');
        }

        return dates;
    }

    //Function to choose the type of button in content
    chooseButton = (registeredCondition, locationCondition, locationModal, locationId) => {
        if (registeredCondition) {
            if (locationCondition) {
                return(<button onClick={() => this.toggleQRCodeModal(locationModal)} className="text-lg bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>QR Code</button>);
            }
            return (<button onClick={() => this.togglePutEnrollModal(locationModal + "PutEnroll")} className="text-lg bg-cb-grey-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#696969" }}>เปลี่ยนสถานที่</button>);
        }

        return(
            <button onClick={() => this.togglePostEnrollModal(locationModal)} className="text-lg bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>ลงทะเบียน</button>
        );
    }

    // Function takes care of popup for first enrollment
    firstEnrollModal = (show, thaiName, engName, locationModal, locationId, projectId, dates) => {
        if(!show) {
            return null;
          }
        
        // Turn the array of dates into options to select
        const datesOption = dates.map(date => <option value={date}>{date}</option>)
        
        return (
        <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">ยืนยันการลงทะเบียนสถานที่บริจาคโลหิต</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center">
                        <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                        <div className="mt-4 flex justify-center items-center">
                            <label>เลือกวันที่บริจาค: 
                                <select className="w-32" value={this.state.regisDate} onChange={this.handleChange}>
                                    {datesOption}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-between px-4 sm:px-10">
                        <button onClick={() => this.togglePostEnrollModal(locationModal)}>ยกเลิก</button>
                        <button className="text-cb-pink" onClick={() => this.postEnroll(locationModal, locationId, projectId)}>ยืนยัน</button>   
                    </div>               
                </div>
            </div>
        </div>
        );
    }

    //Function that takes care of modal when user wants to change location
    putEnrollModal = (show, thaiName, engName, locationModal, locationId) => {
        if(!show) {
            return null;
          }
        
        return (
        <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">ยืนยันการลงทะเบียนสถานที่บริจาคโลหิต</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center">
                        <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                    </div>
                    <div className="pt-6 flex justify-between px-4 sm:px-10">
                        <button onClick={() => this.togglePutEnrollModal(locationModal)}>ยกเลิก</button>
                        <button className="text-cb-pink" onClick={() => this.putEnroll(locationModal, locationId)}>ยืนยัน</button>   
                    </div>               
                </div>
            </div>
        </div>
        );
    }
}

export default Enrollment;