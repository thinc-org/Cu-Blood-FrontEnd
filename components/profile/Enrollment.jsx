import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';
import Card from '@/shared-components/Card';
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n

class Enrollment extends Component {
    constructor(props) {
        super(props);

        this.state = {
            RedCrossModal: false,
            CUModal: false
        };
    }
    
    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const commonsInfo = this.props.commonsInfo;
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
                    {this.windowModal(this.state.CUModal, `อาคารมหิตลาธิเบศร จุฬาลงกรณ์มหาวิทยาลัย`, `Mahittalathibet Building, Chulalongkorn University`, this.toggleCUModal, this.toggleCUModal)}
                    {this.windowModal(this.state.RedCrossModal, `สภากาชาดไทย`, `Thai Red Cross Society`, this.toggleRedCrossModal, this.toggleRedCrossModal)}             
                </div>
            </div>
        );
    }

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

    toggleRedCrossModal = () => {
        this.setState({RedCrossModal: !this.state.RedCrossModal});
    }

    toggleCUModal = () => {
        this.setState({CUModal: !this.state.CUModal});
    }

    windowModal = (show, thaiName, engName, cancelFunc, acceptFunc) => {
        if(!show) {
            return null;
          }
      
        return (
        <div className="fixed pin-l w-full h-full flex items-center justify-center" style={{backgroundColor: 'rgba(0,0,0,0.3)', top: 50}}>
            <div className="layout-wide flex justify-center">
                <div className="bg-white py-6 sm:py-10 flex flex-col rounded-lg shadow text-center font-cu-heading text-base sm:text-lg">
                    <div className="mb-6 px-4 sm:px-10 font-semibold">ยืนยันการเปลี่ยนสถานที่บริจาคโลหิต</div>
                    <div className="bg-cb-grey-lighter py-6 w-full px-4 sm:px-10 flex flex-col justify-center">
                        <Detail bigText={`${thaiName}`} smallText={`${engName}`} />
                        <div className="mt-4 flex justify-center items-center">
                            <div className="mr-4">วันที่:</div>
                            <input className="w-24" type="text" placeholder="DD/MM/YYYY"/>
                        </div>
                    </div>
                    <div className="pt-6 flex justify-between px-4 sm:px-10">
                        <button onClick={cancelFunc}>ยกเลิก</button>
                        <button className="text-cb-pink" onClick={acceptFunc}>ยืนยัน</button>   
                    </div>               
                </div>
            </div>
        </div>
        );
    }
}

export default Enrollment;