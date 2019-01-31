import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';
import Card from '@/shared-components/Card';
import moment from 'moment';
import I18 from '@/core/i18n';
import axios from '@/core/core';
let i18n = I18.i18n

class Enrollment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RedCrossModal: false,
            CUModal: false,
            regisDate: this.props.sessionInfo[0].timeSlot == undefined ? moment(this.props.commonsInfo.startDate).format('YYYY-MM-DD') : this.props.sessionInfo[0].timeSlot,
            sessionId: null
        };
    }
    
    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const commonsInfo = this.props.commonsInfo;
        const sessionInfo = this.props.sessionInfo;
        const datesDuringDonation = this.betweenDonationDate(commonsInfo.startDate, commonsInfo.endDate);
        console.log(sessionInfo);
        console.log(this.state.regisDate);

        return (
            <div className="bg-cb-grey-lighter pb-10">
                <div className="layout-wide">
                    <Header english="ENROLLMENT" thai="ลงทะเบียนเข้าร่วม" englishColor="text-cb-pink" borderColor="border-cb-red" />
                    <Card>
                        <div className="w-full mb-8 text-3xl font-cu-heading">{commonsInfo.name}</div>
                        <div className="w-full border-cb-grey-border border-t border-b py-8 flex flex-col">
                            {this.content(`อาคารมหิตลาธิเบศร จุฬาลงกรณ์มหาวิทยาลัย`, `Mahittalathibet Building, Chulalongkorn University`, `https://maps.google.com/maps?hl=en&q=Mahitaladhibesra+Building&ll=13.7337533,100.5293964,17z&t=m&z=19`, `mb-8`, `CU`)}
                            {this.content(`สภากาชาดไทย`, `Thai Red Cross Society`, `https://maps.google.com/maps?hl=en&q=National+Blood+Center,+Thai+Red+Cross+Society&ll=13.7364773,100.5312038,17z&t=m&z=19`, ``, `Red Cross`)}
                        </div>
                        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between mt-8">
                            <div className="mb-8 sm:mb-0 text-center sm:text-left"><Detail bigText={`${moment(commonsInfo.registrationStartDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')} - ${moment(commonsInfo.registrationEndDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')}`} smallText="วันลงทะเบียน" isBold={true} /></div>
                            <div className="text-center sm:text-right"><Detail bigText={`${moment(commonsInfo.startDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')} - ${moment(commonsInfo.endDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')}`} smallText="วันบริจาคโลหิต" isBold={true} /></div>
                        </div>
                    </Card>
                    {/* Modal that will show when click register */}
                    {this.firstEnrollModal(this.state.CUModal, `อาคารมหิตลาธิเบศร จุฬาลงกรณ์มหาวิทยาลัย`, `Mahittalathibet Building, Chulalongkorn University`, this.toggleCUModal, this.postEnroll, "CU", commonsInfo.id, datesDuringDonation)}
                    {this.firstEnrollModal(this.state.RedCrossModal, `สภากาชาดไทย`, `Thai Red Cross Society`, this.toggleRedCrossModal, this.postEnroll, "Red Cross", commonsInfo.id, datesDuringDonation)}             
                </div>
            </div>
        );
    }

    //Function that creates the location appearance
    content = (thaiName, engName, urlLocation, divClass = ``, location) => {
        return (
            <div className={`flex flex-col md:flex-row items-center justify-between ${divClass}`}>
                <div className="text-center md:text-left mb-4"><Detail bigText={thaiName} smallText={engName} /></div>
                <div className="flex font-cu-body items-center">
                    <a href={`${urlLocation}`} target="_blank" rel="noopener noreferrer" className="text-base mr-8 text-center" style={{ color: "#58595b" }}>ดูแผนที่</a>
                    <button onClick={location == "CU" ? this.toggleCUModal : this.toggleRedCrossModal} className="text-lg bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>ลงทะเบียน</button>
                </div>
            </div>
        );
    }

    //Function to setState of turning Red Cross modal on and off
    toggleRedCrossModal = () => {
        const sessionInfo = this.props.sessionInfo;
        const sessionId = sessionInfo[0].id == undefined ? null : sessionInfo[0].id
        this.setState({RedCrossModal: !this.state.RedCrossModal, sessionId: sessionId});
    }

    //Function to setState of turing CU modal on and off
    toggleCUModal = () => {
        const sessionInfo = this.props.sessionInfo;
        const sessionId = sessionInfo[0].id == undefined ? null : sessionInfo[0].id;
        this.setState({CUModal: !this.state.CUModal, sessionId: sessionId});
    }

    //Function to post information needed for enroll to API when click accepts
    postEnroll = async (location, projectId) => {
        const closeFunc = location == "CU" ? this.toggleCUModal : this.toggleRedCrossModal;
        const registrationPoint = location == "CU" ? 1 : 0
        axios.post('https://api-dev.fives.cloud/v0/profile/me/enroll', {
            projectId: projectId,
            registrationPoint: registrationPoint,
            timeSlot: this.state.regisDate
        })
        .then(console.log)
        .then(closeFunc())
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

    // Function takes care of popup for first enrollment
    firstEnrollModal = (show, thaiName, engName, cancelFunc, acceptFunc, location, projectId, datesOption) => {
        if(!show) {
            return null;
          }
        
        // Turn the array of dates into options to select
        datesOption = datesOption.map(date => <option value={date}>{date}</option>)
        
        return (
        <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">ยืนยันการเปลี่ยนสถานที่บริจาคโลหิต</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center">
                        <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                        <div className="mt-4 flex justify-center items-center">
                            <label>วันที่: 
                                <select className="w-32" value={this.state.regisDate} onChange={this.handleChange}>
                                    {datesOption}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-between px-4 sm:px-10">
                        <button onClick={cancelFunc}>ยกเลิก</button>
                        <button className="text-cb-pink" onClick={() => acceptFunc(location, projectId)}>ยืนยัน</button>   
                    </div>               
                </div>
            </div>
        </div>
        );
    }
}

export default Enrollment;