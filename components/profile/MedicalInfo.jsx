import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';

class MedicalInfo extends Component {
    render() {
        return(
            <div className="layout-wide flex-col">
                <Header english="MEDICAL CONDITIONS" thai="โรคประจำตัว / ประวัติการแพ้ยา" englishColor="text-cb-pink" borderColor="border-cb-red" />
                <div className="font-cb-body text-xl mb-10">ไม่มีโรคประจำตัว / ประวัติการแพ้ยา</div>
            </div>
        );
    }
}

export default MedicalInfo;