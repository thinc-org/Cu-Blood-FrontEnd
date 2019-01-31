import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';
import Card from '@/shared-components/Card';
import moment from 'moment-timezone';
import I18 from '@/core/i18n';
import axios from '@/core/core';
import QRCode from 'qrcode.react';
import { SmallCheckbox } from '@/shared-components/Form';
let i18n = I18.i18n

class Enrollment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            regisDate: (this.props.sessionInfo !== null) && (this.props.sessionInfo[this.props.sessionInfo.length - 1].project.id === this.props.commonsInfo.id) ? this.props.sessionInfo[this.props.sessionInfo.length - 1].timeSlot : "",
            regisTimeId: "",
            currentSessionInfo: (this.props.sessionInfo !== null) && (this.props.sessionInfo[this.props.sessionInfo.length - 1].project.id === this.props.commonsInfo.id) ? this.props.sessionInfo[this.props.sessionInfo.length - 1] : null,
            commonsInfo: this.props.commonsInfo,
            agree: {
                agree1: false,
                agree2: false,
                agree3: false,
                agree4: false,
                agree5: false,
                agree6: false,
                agree7: false,
                agree8: false,
                allAgree: false,
            },
            modalStatus: {
                location: null,
                type: null
            },
        };
    }

    componentDidMount() {
        if (this.state.commonsInfo !== null && this.state.currentSessionInfo !== null) {
            const timeId = this.getTimeId(this.state.currentSessionInfo);
            this.setState({ regisTimeId: timeId })
        }
    }

    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const { t } = this.props;
        const commonsInfo = this.state.commonsInfo;

        //Render when there is no commonsInfo passed through
        if (commonsInfo === null) {
            return (
                <div className="bg-cb-grey-lighter pb-10">
                    <div className="layout-wide">
                        <Header english={t('enrollmentSmallHeader')} thai={t('enrollmentBigHeader')} englishColor="text-cb-pink" borderColor="border-cb-red" />
                        <Card>
                            <Detail bigText="ขณะนี้ข้อมูลมีปัญหา โปรดลองใหม่อีกครั้ง" smallText="Error in retrieving information, please try again later" />
                        </Card>
                    </div>
                </div>
            );
        }

        const regisStartDate = moment(commonsInfo.registrationStartDate).format('MM/DD/YYYY');
        const eventEndDate = moment(commonsInfo.endDate).format('MM/DD/YYYY');
        const regisEndDate = moment(commonsInfo.registrationEndDate).format('MM/DD/YYYY');
        const userDate = moment().tz('Asia/Bangkok').format('MM/DD/YYYY');
        if (Date.parse(userDate) < Date.parse(regisStartDate) || Date.parse(userDate) > Date.parse(eventEndDate)) {
            return (
                <div className="bg-cb-grey-lighter pb-10">
                    <div className="layout-wide">
                        <Header english={t('enrollmentSmallHeader')} thai={t('enrollmentBigHeader')} englishColor="text-cb-pink" borderColor="border-cb-red" />
                        <Card>
                            <Detail bigText="ขณะนี้ไม่ได้อยู่ในช่วงเปิดให้ลงทะเบียน" smallText="Currently, it is not in the registration period." />
                        </Card>
                    </div>
                </div>
            );
        }
        //Create fix date button if the user already registered for the current event
        const fixDateButton = (this.state.currentSessionInfo !== null) && (Date.parse(userDate) <= Date.parse(regisEndDate)) ? <button className="ml-2" onClick={() => this.toggleModal(null, 'fixDateModal')}><img className="w-6" src="/static/icons/fix.svg" alt="Fix logo" /></button> : null;
        //Create the location content where there is the location name + link to map + button to open modal
        const locationContent = commonsInfo.locations.map(element => this.content(element.nameTH, element.nameEN, element.googleMapsURL, element));
        //Mapping to create the register modal
        const datesDuringDonation = commonsInfo !== null ? commonsInfo.timeSlots : null;
        //Create modal that can change date

        return (
            <div className="bg-cb-grey-lighter pb-10">
                <div className="layout-wide">
                    <Header english={t('enrollmentSmallHeader')} thai={t('enrollmentBigHeader')} englishColor="text-cb-pink" borderColor="border-cb-red" />
                    <Card>
                        <div className="w-full mb-8 font-cu-heading flex flex-col md:flex-row text-center md:text-left justify-between items-center">
                            <div className="text-3xl">{commonsInfo.name}</div>
                            <div className="text-sm sm:text-base flex mt-4 sm:mt-0 items-center">
                                <div className="mr-2">{t('enrollmentViewTime')}</div>
                                <div className="text-cb-pink">{this.state.regisDate ? moment(this.state.regisDate).format('D MMMM') : '-'}</div>
                                <div className="text-cb-pink ml-2">{this.state.regisTimeId !== null ? this.showTimeId() : null}</div>
                                {fixDateButton}
                            </div>
                        </div>
                        <div className="w-full border-cb-grey-border border-t border-b pt-8 flex flex-col">
                            {locationContent}
                        </div>
                        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between mt-8">
                            <div className="mb-8 sm:mb-0 text-center sm:text-left"><Detail bigText={`${moment(commonsInfo.registrationStartDate).add((i18n.language === 'th' ? 543 : 0), 'years').format('D MMMM')} - ${moment(commonsInfo.registrationEndDate).add((i18n.language === 'th' ? 543 : 0), 'years').format('D MMMM')}`} smallText={t('enrollmentRegisPeriod')} isBold={true} /></div>
                            <div className="text-center sm:text-right"><Detail bigText={`${moment(commonsInfo.startDate).add((i18n.language === 'th' ? 543 : 0), 'years').format('D MMMM')} - ${moment(commonsInfo.endDate).add((i18n.language === 'th' ? 543 : 0), 'years').format('D MMMM')}`} smallText={t('enrollmentDonatePeriod')} isBold={true} /></div>
                        </div>
                    </Card>
                    {this.modalGenerator(this.state.modalStatus, datesDuringDonation, commonsInfo)}
                </div>
            </div>
        );
    }

    modalGenerator = (modalStatus, datesDuringDonation, commonsInfo) => {
        const { location, type } = modalStatus;
        switch (type) {
            case "firstEnrollModal":
                return this.firstEnrollModal(location.nameTH, location.nameEN, location.id, commonsInfo.id, datesDuringDonation);
            case "putEnrollModal":
                return this.putEnrollModal(location.nameTH, location.nameEN, location.id);
            case "QRCodeModal":
                return this.QRCodeModal(location.nameTH);
            case "fixDateModal":
                return this.changeDateModal(datesDuringDonation);
            case "confirmModal":
                return this.confirmModal(location.id, commonsInfo.id);
            default:
                return null;
        }
    }

    //Function that creates the location and register button
    content = (thaiName, engName, urlLocation, element) => {
        const { t } = this.props;
        const alreadyRegistered = this.state.currentSessionInfo !== null;
        const isLocationPick = (this.state.currentSessionInfo !== null) && (this.state.currentSessionInfo.locationId === element.id)
        
        //Check if user is during an event time
        const regisEndDate = this.state.commonsInfo !== null ? moment(this.state.commonsInfo.registrationEndDate).format('MM/DD/YYYY') : null;
        const userDate = moment().tz('Asia/Bangkok').format('MM/DD/YYYY');
        const inEventDate = regisEndDate !== null ? (Date.parse(userDate) > Date.parse(regisEndDate)) : false;

        //Choose what kind of button will show = register / change location / show QR
        const button = this.chooseButton(alreadyRegistered, isLocationPick, element, inEventDate);

        return (
            <div key={engName} className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="text-center md:text-left mb-4 md:mb-0"><Detail bigText={thaiName} smallText={engName} /></div>
                <div className="flex font-cu-body items-center">
                    <a href={`${urlLocation}`} target="_blank" rel="noopener noreferrer" className="text-base mr-8 text-center" style={{ color: "#58595b" }}>{t('enrollmentViewMap')}</a>
                    {button}
                </div>
            </div>
        );
    }

    //Function to toggle modal on/off
    toggleModal = (locationName, type) => {
        let regisDate, regisTimeId, location
        if (locationName !== (this.state.modalStatus.location ? this.state.modalStatus.location.id : "")) {
            //default case
            regisDate = this.state.currentSessionInfo !== null ? this.state.currentSessionInfo.timeSlot : "";
            regisTimeId = this.state.currentSessionInfo !== null ? this.getTimeId(this.state.currentSessionInfo) : "";
            location = locationName
        } else {
            // special case when open confirmModal from firstEnrollmentModal
            regisDate = this.state.regisDate;
            regisTimeId = this.state.regisTimeId;
            location = this.state.modalStatus.location
        }
        this.setState({
            regisDate,
            regisTimeId,
            modalStatus: {
                location,
                type: type,
            }
        });
    }

    //Function to post information needed for enroll to API when click accepts
    postEnroll = (locationId, projectId) => {
        axios.post('/profile/me/enroll', {
            projectId: projectId,
            locationId: locationId,
            timeSlot: this.state.regisDate,
            timeId: this.state.regisTimeId
        })
            .then(() => this.getSessionInfo())
            .then(() => this.toggleModal(null, null))
            .catch(console.log)
    }

    //Function to put information needed for enroll to API when click accepts
    putEnroll = (locationId) => {
        axios.put('/profile/me/enroll', {
            sessionId: this.state.currentSessionInfo.id,
            locationId: locationId,
            timeSlot: this.state.regisDate,
            timeId: this.state.regisTimeId
        })
            .then(() => this.getSessionInfo())
            .then(() => this.toggleModal(null, null))
            .catch(console.log)
    }

    //Get session information from API and set it to the states
    getSessionInfo = () => {
        axios.get('/profile/me/sessions')
            .then(response => response.data)
            .then(data => data.result)
            .catch(e => null)
            .then(result => this.setState({ currentSessionInfo: result[result.length - 1], regisDate: result[result.length - 1].timeSlot, regisTimeId: this.getTimeId(result[result.length - 1]) }))
    }

    //Function to setState to regisDate for when date option is pick
    handleChangeDate = (event) => {
        this.setState({ regisDate: event.target.value })
    }

    //Function setState to regisTimeId for when time slot option is pick
    handleChangeTimeId = (event) => {
        this.setState({ regisTimeId: Number(event.target.value) })
    }

    handleCheckboxChange = (event) => {
        this.setState({
            "agree": {
                ...this.state.agree,
                [event.target.name]: event.target.checked
            }
        }, () => this.validateConfirmModal())
    }

    validateConfirmModal = () => {
        const agree = this.state.agree
        let allAgree = true;
        for (const key in agree) {
            if (agree[key] === true || key === 'allAgree') {
                continue;
            } else {
                allAgree = false;
                break;
            }
        }
        this.setState(prevState => ({
            "agree": {
                ...prevState.agree,
                allAgree
            }
        }));
    }

    //Function to choose the type of button in content
    chooseButton = (registeredCondition, locationCondition, locationModal, inEventCondition) => {
        const { t } = this.props;
        if (registeredCondition) {
            if (locationCondition) {
                return (<button onClick={() => this.toggleModal(locationModal, "QRCodeModal")} className="text-base bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>QR Code</button>);
            }
            else if (inEventCondition) {
                return (<button className="text-base bg-cb-grey-light rounded-lg px-6 py-2 font-semibold opacity-50 cursor-not-allowed">{t('enrollmentExpire')}</button>);
            }
            return (<button onClick={() => this.toggleModal(locationModal, "putEnrollModal")} className="text-base bg-cb-grey-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#696969" }}>{t('enrollmentChangeLocation')}</button>);
        }

        else if (inEventCondition) {
            return (<button className="text-base bg-cb-grey-light rounded-lg px-6 py-2 font-semibold opacity-50 cursor-not-allowed">{t('enrollmentExpire')}</button>);
        }

        return (
            <button onClick={() => this.toggleModal(locationModal, 'firstEnrollModal')} className="text-base bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>{t('enrollmentRegister')}</button>
        );
    }

    //Function to show the timeId on the enrollment
    showTimeId = () => {
        const timeId = Number(this.state.regisTimeId);
        switch (timeId) {
            case 2:
                return "09:00 - 12:00";
            case 3:
                return "13:00 - 16:00";
            default:
                return null;
        }
    }

    //Function to turn time label from /profile/session to timeId
    getTimeId = (currentSessionInfo) => {
        if (currentSessionInfo.time.label === "ช่วงเช้า") {
            return 2;
        }

        else if (currentSessionInfo.time.label === "ช่วงบ่าย") {
            return 3;
        }
    }

    // Function takes care of popup for first enrollment
    firstEnrollModal = (thaiName, engName, locationId, projectId, dates) => {
        const { t } = this.props;
        const select = {
            background: "url(../../../static/icons/arrow-down.svg) right 5px center / 12px 15px no-repeat #ffffff",
        }

        // Turn the array of dates into options to select
        const datesOption = dates !== null ? dates.map(date => <option key={date} value={moment(date).format('YYYY-MM-DD')}>{moment(date).format('D MMMM')}</option>) : null;
        const timeSlotsOption = this.state.commonsInfo !== null ? this.state.commonsInfo.times.map(time => <option key={time.id} value={time.id}>{moment(time.startTime, 'HH:mm:ss').format('HH:mm')} - {moment(time.endTime, 'HH:mm:ss').format('HH:mm')}</option>) : null;
        const formUnfilled = !this.state.regisDate || !this.state.regisTimeId;

        return (
            <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)', top: 50 }}>
                <div className="layout-wide flex justify-center">
                    <form className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg" style={{ minWidth: '250px' }}>
                        <div className="mb-6 px-4 sm:px-10 font-semibold">{t('enrollmentRegisterHeader')}</div>
                        <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                            <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                            <div className="mt-4 flex flex-col items-end">
                                <div className="flex items-center">
                                    <div className="mr-4">{t('enrollmentRegisterChooseDate')}</div>
                                    <select className="w-32 select" style={select} value={this.state.regisDate} onChange={this.handleChangeDate}>
                                        <option value="">YYYY-MM-DD</option>
                                        {datesOption}
                                    </select>
                                </div>
                                <div className="flex items-center mt-4">
                                    <div className="mr-4">{t('enrollmentRegisterChooseTime')}</div>
                                    <select className="w-32" style={select} value={String(this.state.regisTimeId)} onChange={this.handleChangeTimeId}>
                                        <option value="">{t('enrollmentRegisterTimeOption')}</option>
                                        {timeSlotsOption}
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="pt-6 flex justify-between px-4 sm:px-10">
                            <button onClick={() => this.toggleModal(null, null)}>{t('enrollmentCancel')}</button>
                            <button className={formUnfilled ? "text-grey cursor-not-allowed" : "text-cb-pink"} onClick={() => this.toggleModal(locationId, "confirmModal")} disabled={formUnfilled}>{t('enrollmentConfirm')}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    //Function that takes care of modal when user wants to change location
    putEnrollModal = (thaiName, engName, locationId) => {
        const { t } = this.props;

        return (
            <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)', top: 50 }}>
                <div className="layout-wide flex justify-center">
                    <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg" style={{ minWidth: '250px' }}>
                        <div className="mb-6 px-4 sm:px-10 font-semibold">{t('enrollmentChangeLocationHeader')}</div>
                        <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                            <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                        </div>
                        <div className="pt-6 flex justify-between px-4 sm:px-10">
                            <button onClick={() => this.toggleModal(null, null)}>{t('enrollmentCancel')}</button>
                            <button className="text-cb-pink" onClick={() => this.putEnroll(locationId)}>{t('enrollmentConfirm')}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //Function that take cares of modal for showing QRCode
    QRCodeModal = (locationNameTH) => {
        const { t } = this.props;

        return (
            <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)', top: 50 }}>
                <div className="layout-wide flex justify-center">
                    <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg" style={{ minWidth: '250px' }}>
                        <div className="mb-6 px-4 sm:px-10 font-semibold">QR Code</div>
                        <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                            <QRCode value={this.state.currentSessionInfo.id} renderAs="svg" size={125} />
                            <div className="mt-4 mb-1">{this.state.commonsInfo.name}</div>
                            <div className="text-cb-pink text-base">{locationNameTH}</div>
                        </div>
                        <div className="pt-6 flex justify-center px-4 sm:px-10">
                            <button onClick={() => this.toggleModal(null, null)}>{t('enrollmentQRCodeClose')}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    //Function that takes care of modal when user wants to change date
    changeDateModal = (dates) => {
        const { t } = this.props;
        const select = {
            background: "url(../../../static/icons/arrow-down.svg) right 5px center / 12px 15px no-repeat #ffffff",
        }

        const datesOption = dates !== null ? dates.map(date => <option key={date} value={moment(date).format('YYYY-MM-DD')}>{moment(date).format('D MMMM')}</option>) : null;
        const timeSlotsOption = this.state.commonsInfo !== null ? this.state.commonsInfo.times.map(time => <option key={time.id} value={time.id}>{moment(time.startTime, 'HH:mm:ss').format('HH:mm')} - {moment(time.endTime, 'HH:mm:ss').format('HH:mm')}</option>) : null;

        return (
            <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)', top: 50 }}>
                <div className="layout-wide flex justify-center">
                    <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg" style={{ minWidth: '250px' }}>
                        <div className="mb-6 px-4 sm:px-10 font-semibold">{t('enrollmentChangeDate')}</div>
                        <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                            <select style={select} className="w-32" value={this.state.regisDate} onChange={this.handleChangeDate}>
                                {datesOption}
                            </select>
                        </div>
                        <div className="bg-cb-grey-lighter pb-6 w-full px-4 sm:px-10 flex flex-col justify-center items-center">
                            <select style={select} className="w-32" value={String(this.state.regisTimeId)} onChange={this.handleChangeTimeId}>
                                {timeSlotsOption}
                            </select>
                        </div>
                        <div className="pt-6 flex justify-between px-4 sm:px-10">
                            <button onClick={() => this.toggleModal(null, null)}>{t('enrollmentCancel')}</button>
                            <button className="text-cb-pink" onClick={() => this.putEnroll(this.state.currentSessionInfo.locationId)}>{t('enrollmentConfirm')}</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    confirmModal = (locationId, projectId) => {
        const { t } = this.props;
        return (
            <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{ backgroundColor: 'rgba(0,0,0,0.3)', top: 50 }}>
                <div className="layout-wide flex justify-center">
                    <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg" style={{ minWidth: '250px', maxHeight: '75vh' }}>
                        <div className="mb-6 px-4 sm:px-10 font-semibold">{t('donateInstruction')}</div>
                        <div className="overflow-y-scroll overflow-x-hidden scroll px-4">
                            <SmallCheckbox checked={this.state.agree1} onChange={this.handleCheckboxChange} name="agree1" text={t('agree1')}/>
                            <SmallCheckbox checked={this.state.agree2} onChange={this.handleCheckboxChange} name="agree2" text={t('agree2')}/>
                            <SmallCheckbox checked={this.state.agree3} onChange={this.handleCheckboxChange} name="agree3" text={t('agree3')}/>
                            <SmallCheckbox checked={this.state.agree4} onChange={this.handleCheckboxChange} name="agree4" text={t('agree4')}/>
                            <SmallCheckbox checked={this.state.agree5} onChange={this.handleCheckboxChange} name="agree5" text={t('agree5')}/>
                            <SmallCheckbox checked={this.state.agree6} onChange={this.handleCheckboxChange} name="agree6" text={t('agree6')}/>
                            <SmallCheckbox checked={this.state.agree7} onChange={this.handleCheckboxChange} name="agree7" text={t('agree7')}/>
                            <SmallCheckbox checked={this.state.agree8} onChange={this.handleCheckboxChange} name="agree8" text={t('agree8')}/>
                        </div>
                        <div className="pt-6 flex justify-between px-4 sm:px-10">
                            <button onClick={() => this.toggleModal(null, null)}>{t('enrollmentCancel')}</button>
                            <button className={!this.state.agree.allAgree ? "text-grey cursor-not-allowed" : "text-cb-pink"} onClick={() => this.postEnroll(locationId, projectId)} disabled={!this.state.agree.allAgree}>{t('enrollmentConfirm')}</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default I18.withNamespaces('profile')(Enrollment);