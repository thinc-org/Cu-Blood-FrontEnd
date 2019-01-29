import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import { UserInfoConsumer } from '@/core/UserInfoProvider';

class MedicalInfo extends Component {
    render() {
        return(
            <div className="layout-wide flex-col">
                <Header english="MEDICAL CONDITIONS" thai="โรคประจำตัว / ประวัติการแพ้ยา" englishColor="text-cb-pink" borderColor="border-cb-red" />
                <UserInfoConsumer>
                    {({userInfo}) => {
                        return (
                            <div className="font-cb-body text-xl mb-10">{userInfo.medicalCondition}</div>    
                        )
                    }}                  
                </UserInfoConsumer>

            </div>
        );
    }
}

export default MedicalInfo;