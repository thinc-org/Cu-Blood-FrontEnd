import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';
import Card from '@/shared-components/Card';
import moment from 'moment';
import I18 from '@/core/i18n';
import axios from '@/core/core';
import QRCode from 'qrcode.react';
// import { CompositeDisposable } from 'rx';
let i18n = I18.i18n

class Enrollment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            regisDate: (this.props.sessionInfo !== null) && (this.props.sessionInfo[this.props.sessionInfo.length - 1].project.id == this.props.commonsInfo.id) ? this.props.sessionInfo[this.props.sessionInfo.length - 1].timeSlot : null,
            currentSessionInfo: (this.props.sessionInfo !== null) && (this.props.sessionInfo[this.props.sessionInfo.length - 1].project.id == this.props.commonsInfo.id) ? this.props.sessionInfo[this.props.sessionInfo.length - 1] : null,
            commonsInfo : this.props.commonsInfo,
            modalOpener : {changeDateModal : false}
        };
    }
    
    componentWillMount() {
        if (this.state.commonsInfo !== null) {
            this.state.commonsInfo.registrationPoints.map(element => this.setState(
            prevState => ({
                modalOpener: {
                    ...prevState.modalOpener,
                    [element.nameEN.replace(/\s+/g, "")] : false,
                    [element.nameEN.replace(/\s+/g, "") + "PutEnroll"] : false,
                    [element.nameEN.replace(/\s+/g, "") + "QRCode"] : false
                }
            })
            ));
        }
    }

    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const commonsInfo = this.state.commonsInfo;
        
        //Render when there is no commonsInfo passed through
        if (commonsInfo === null) {
            return (
                <div className="bg-cb-grey-lighter pb-10">
                    <div className="layout-wide">
                        <Header english="ENROLLMENT" thai="ลงทะเบียนเข้าร่วม" englishColor="text-cb-pink" borderColor="border-cb-red" />
                        <Card>
                            <Detail bigText="ขณะนี้ข้อมูลมีปัญหา โปรดลองใหม่อีกครั้ง" smallText="Error in retrieving information, please try again later"/>
                        </Card>
                    </div>
                </div>
            );
        }
        
        
        const datesDuringDonation = commonsInfo !== null ? this.betweenDonationDate(commonsInfo.startDate, commonsInfo.endDate) : null;
        //Create fix date button if the user already registered for the current event
        const fixDateButton = this.state.currentSessionInfo !== null ? <button className="ml-2" onClick={() => this.toggleModal('changeDateModal')}><img className="w-6" src="/static/icons/fix.svg" alt="Fix logo" /></button> : null; 
        //Create the location content where there is the location name + link to map + button to open modal
        const locationContent = commonsInfo.registrationPoints.map(element => this.content(element.nameTH, element.nameEN, element.googleMapsURL, element.nameEN.replace(/\s+/g, ""), element.id));
        //Mapping to create the register modal
        const registerEnrollModal = commonsInfo.registrationPoints.map(element => {
            const locationName = element.nameEN.replace(/\s+/g, "");
            return(
                this.firstEnrollModal(this.state.modalOpener[locationName], element.nameTH, element.nameEN, locationName, element.id, commonsInfo.id, datesDuringDonation)
                );
        });
        //Mapping to create modal to change location
        const changeLocationModal = commonsInfo.registrationPoints.map(element => {
            const locationNamePutEnroll = element.nameEN.replace(/\s+/g, "") + "PutEnroll";
            return(
                this.putEnrollModal(this.state.modalOpener[locationNamePutEnroll], element.nameTH, element.nameEN, locationNamePutEnroll, element.id)
                );
        });
        //Mapping to create modal that shows QR code
        const QRCodeModal = commonsInfo.registrationPoints.map(element => {
            const locationNameQRCode = element.nameEN.replace(/\s+/g, "") + "QRCode";
            return(
                this.QRCodeModal(this.state.modalOpener[locationNameQRCode], locationNameQRCode, element.nameTH)
            );
        })
        //Create modal that can change date
        const changeDateModal = this.changeDateModal(this.state.modalOpener['changeDateModal'], 'changeDateModal', datesDuringDonation);

        return (
            <div className="bg-cb-grey-lighter pb-10">
                <div className="layout-wide">
                    <Header english="ENROLLMENT" thai="ลงทะเบียนเข้าร่วม" englishColor="text-cb-pink" borderColor="border-cb-red" />
                    <Card>
                        <div className="w-full mb-8 font-cu-heading flex flex-col md:flex-row text-center md:text-left justify-between items-center">
                            <div className="text-3xl">{commonsInfo.name}</div>
                            <div className="text-base flex mt-4 sm:mt-0 items-center">
                                <div className="mr-2">วันที่เลือกปริจาคโลหิต:</div> 
                                <div className="text-cb-pink">{this.state.regisDate !== null ? moment(this.state.regisDate).format('D MMMM') : '-'}</div>
                                {fixDateButton}
                            </div>
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
                    {QRCodeModal}
                    {changeDateModal}
                </div>
            </div>
        );
    }

    //Function that creates the location and register button
    content = (thaiName, engName, urlLocation, locationToggle, locationId) => {
        const alreadyRegistered = this.state.currentSessionInfo !== null;
        const isLocationPick = (this.state.currentSessionInfo !== null) && (this.state.currentSessionInfo.locationId == locationId)

        //Choose what kind of button will show = register / change location / show QR
        const button = this.chooseButton(alreadyRegistered, isLocationPick, locationToggle);

        return (
            <div key={engName} className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="text-center md:text-left mb-4 md:mb-0"><Detail bigText={thaiName} smallText={engName} /></div>
                <div className="flex font-cu-body items-center">
                    <a href={`${urlLocation}`} target="_blank" rel="noopener noreferrer" className="text-base mr-8 text-center" style={{ color: "#58595b" }}>ดูแผนที่</a>
                    {button}
                </div>
            </div>
        );
    }

    //Function to toggle modal on/off
    toggleModal = (locationName) => {
        const registeredDate = this.state.currentSessionInfo !== null ? this.state.currentSessionInfo.timeSlot : null
        const stateOfModal = this.state.modalOpener[locationName];
        this.setState(
            prevState => ({
                modalOpener: {
                    ...prevState.modalOpener,
                    [locationName] : !stateOfModal
                },
                regisDate : registeredDate
            })
        );
    }

    //Function to post information needed for enroll to API when click accepts
    postEnroll = (locationModal, locationId, projectId) => {
        axios.post('https://api-dev.fives.cloud/v0/profile/me/enroll', {
            projectId: projectId,
            locationId: locationId,
            timeSlot: this.state.regisDate
        })
        .then(console.log)
        .then(() => this.getSessionInfo())
        .then(() => this.toggleModal(locationModal))
        .catch(console.log)
    }

    //Function to put information needed for enroll to API when click accepts
    putEnroll = (locationModal, locationId) => {
        axios.put('https://api-dev.fives.cloud/v0/profile/me/enroll', {
            sessionId: this.state.currentSessionInfo.id,
            locationId: locationId,
            timeSlot: this.state.regisDate
        })
        .then(console.log)
        .then(() => this.getSessionInfo())
        .then(() => this.toggleModal(locationModal))
        .catch(console.log)
    }

    //Get session information from API and set it to the states
    getSessionInfo = () => {
        axios.get('https://api-dev.fives.cloud/v0/profile/me/sessions')
        .then(response => response.data)
        .then(data => data.result)
        .catch(e => null)
        .then(result => this.setState({currentSessionInfo: result[result.length - 1], regisDate : result[result.length - 1].timeSlot}, () => console.log("setState of session info ", result)))
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
                return(<button onClick={() => this.toggleModal(locationModal + "QRCode")} className="text-lg bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>QR Code</button>);
            }
            return (<button onClick={() => this.toggleModal(locationModal + "PutEnroll")} className="text-lg bg-cb-grey-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#696969" }}>เปลี่ยนสถานที่</button>);
        }

        return(
            <button onClick={() => this.toggleModal(locationModal)} className="text-lg bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>ลงทะเบียน</button>
        );
    }

    // Function takes care of popup for first enrollment
    firstEnrollModal = (show, thaiName, engName, locationModal, locationId, projectId, dates) => {
        if(!show) {
            return null;
          }
        
        // Turn the array of dates into options to select
        const datesOption = dates !== null ? dates.map(date => <option key={date} value={date}>{date}</option>) : null;
        
        return (
        <div key={locationModal} className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">ยืนยันการลงทะเบียนสถานที่บริจาคโลหิต</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center">
                        <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                        <div className="mt-4 flex justify-center items-center">
                            <label>เลือกวันที่บริจาค: 
                                <select className="w-32" value={this.state.regisDate} onChange={this.handleChange}>
                                    <option value={null}>YYYY-MM-DD</option>
                                    {datesOption}
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-between px-4 sm:px-10">
                        <button onClick={() => this.toggleModal(locationModal)}>ยกเลิก</button>
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
        <div key={locationModal} className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">ยืนยันการลงทะเบียนสถานที่บริจาคโลหิต</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                        <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                    </div>
                    <div className="pt-6 flex justify-between px-4 sm:px-10">
                        <button onClick={() => this.toggleModal(locationModal)}>ยกเลิก</button>
                        <button className="text-cb-pink" onClick={() => this.putEnroll(locationModal, locationId)}>ยืนยัน</button>   
                    </div>               
                </div>
            </div>
        </div>
        );
    }

    //Function that take cares of modal for showing QRCode
    QRCodeModal = (show, locationModal, locationNameTH) => {
        if(!show) {
            return null;
          }
        
        return (
        <div key={locationModal} className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">QR Code</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                        <QRCode value={this.state.currentSessionInfo.id} renderAs="svg" size="125" />
                        <div className="mt-4 mb-1">{this.state.commonsInfo.name}</div>
                        <div className="text-cb-pink text-base">{locationNameTH}</div>
                    </div>
                    <div className="pt-6 flex justify-center px-4 sm:px-10">
                        <button onClick={() => this.toggleModal(locationModal)}>ปิดหน้าต่าง</button> 
                    </div>               
                </div>
            </div>
        </div>
        );
    }

    //Function that takes care of modal when user wants to change date
    changeDateModal = (show, locationModal, dates) => {
        if(!show) {
            return null;
          }
        
        const datesOption = dates !== null ? dates.map(date => <option key={date} value={date}>{date}</option>) : null;

        return (
        <div key={locationModal} className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">กรุณาเลือกวันที่ใหม่</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                        <select className="w-32" value={this.state.regisDate} onChange={this.handleChange}>
                            {datesOption}
                        </select>
                    </div>
                    <div className="pt-6 flex justify-between px-4 sm:px-10">
                        <button onClick={() => this.toggleModal(locationModal)}>ยกเลิก</button>
                        <button className="text-cb-pink" onClick={() => this.putEnroll(locationModal, this.state.currentSessionInfo.locationId)}>ยืนยัน</button>
                    </div>               
                </div>
            </div>
        </div>
        );
    }
}

export default Enrollment;