import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Card from '@/shared-components/Card';
import Detail from '@/profile/Detail';
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n

class EnrollmentHistory extends Component {
    render() { 
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const commonsInfo = this.props.commonsInfo;
        const sessionInfo = this.props.sessionInfo;
        const content = (commonsInfo !== null) && (sessionInfo !== null) ? this.chooseContent(sessionInfo, commonsInfo) : null
        
        return(
            <div className="bg-cb-grey-lighter">
                <div className="layout-wide pb-2">
                    <Header english="ENROLLMENT HISTORY" thai="ประวัติการเข้าร่วมกิจกรรม" englishColor="text-cb-pink" borderColor="border-cb-red" />
                    {content}
                </div>
            </div>
        );
    }

    contentFunc = (projectName, timeSlot) => {
        return(<div className="mb-8"><Card><Detail bigText={projectName} smallText={`วันที่ปริจาคโลหิต: ${timeSlot}`}/></Card></div>);
    }

    chooseContent = (sessionInfo, commonsInfo) => {
        if ((sessionInfo.length == 1) && (sessionInfo[sessionInfo.length - 1].project.id == commonsInfo.id)) {
            return (<div className="mb-8"><Card><Detail bigText="ไม่มีประวัติการเข้าร่วมกิจกรรม" smallText="No enrollment history is available"/></Card></div>);
        }
        else if (sessionInfo[sessionInfo.length - 1].project.id == commonsInfo.id) {
            const sessionExceptCurrent = sessionInfo.slice(0, -1);
            return(
                sessionExceptCurrent.map(element => this.contentFunc(element.project.name, moment(element.timeSlot).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM YYYY')))
                );
        }
        console.log("else")
        return(sessionInfo.map(element => this.contentFunc(element.project.name, moment(element.timeSlot).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM YYYY'))));
    }
}

export default EnrollmentHistory;