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
                                {this.content(`อาคารมหิตลาธิเบศร จุฬาลงกรณ์มหาวิทยาลัย`, `Mahittalathibet Building, Chulalongkorn University`, `https://maps.google.com/maps?hl=en&q=Mahitaladhibesra+Building&ll=13.7337533,100.5293964,17z&t=m&z=19`, `mb-8`)}
                                {this.content(`สภากาชาดไทย`, `Thai Red Cross Society`, `https://maps.google.com/maps?hl=en&q=National+Blood+Center,+Thai+Red+Cross+Society&ll=13.7364773,100.5312038,17z&t=m&z=19`)}
                            </div>
                            <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between mt-8">
                                <div className="mb-8 sm:mb-0 text-center sm:text-left"><Detail bigText={`${moment(commonsInfo.registrationStartDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')} - ${moment(commonsInfo.registrationEndDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')}`} smallText="วันลงทะเบียน" isBold={true} /></div>
                                <div className="text-center sm:text-right"><Detail bigText={`${moment(commonsInfo.startDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')} - ${moment(commonsInfo.endDate).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM')}`} smallText="วันบริจาคโลหิต" isBold={true} /></div>
                            </div>
                        </Card>                                
                </div>
            </div>
        );
    }

    content = (thaiPlace, engPlace, urlLocation, divClass = ``, clickFunction) => {
        return (
            <div className={`flex flex-col md:flex-row items-center justify-between ${divClass}`}>
                <div className="text-center md:text-left mb-4"><Detail bigText={thaiPlace} smallText={engPlace} /></div>
                <div className="flex font-cu-body items-center">
                    <a href={`${urlLocation}`} target="_blank" rel="noopener noreferrer" className="text-base mr-8 text-center" style={{ color: "#58595b" }}>ดูแผนที่</a>
                    <button onClick={clickFunction} className="text-lg bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{ color: "#de5c8e" }}>ลงทะเบียน</button>
                </div>
            </div>
        );
    }
}

export default Enrollment;