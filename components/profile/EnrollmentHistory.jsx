import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Card from '@/shared-components/Card';
import Detail from '@/profile/Detail';

class EnrollmentHistory extends Component {
    //Later: Each card should be created by mapping with props data, then all cards will be assigned into a constant and replace the current cards
    
    render() {
        return(
            <div className="bg-cb-grey-lighter">
                <div className="layout-wide pb-2">
                    <Header english="ENROLLMENT HISTORY" thai="ประวัติการเข้าร่วมกิจกรรม" englishColor="text-cb-pink" borderColor="border-cb-red" />
                    <div className="mb-8"><Card><Detail bigText={"CU Blood Project \"เลือดสีชมพู\" ครั้งที่ 3"} smallText="วันที่ปริจาคโลหิต: 12 กันยายน 2560"/></Card></div>
                    <div className="mb-8"><Card><Detail bigText={"CU Blood Project \"เลือดสีชมพู\" ครั้งที่ 2"} smallText="วันที่ปริจาคโลหิต: -"/></Card></div>
                </div>
            </div>
        );
    }
}

export default EnrollmentHistory;