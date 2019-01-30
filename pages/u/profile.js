import React, { Component } from 'react';
import I18 from '@/core/i18n';
import ProfileHeader from '@/profile/ProfileHeader';
import Enrollment from '@/profile/Enrollment';
import PersonalInfo from '@/profile/PersonalInfo';
import MedicalInfo from '@/profile/MedicalInfo';
import EnrollmentHistory from '@/profile/EnrollmentHistory';
import FacebookButton from '@/shared-components/FacebookButton';
import Footer from '@/shared-components/Footer';
import '../../static/css/profile.css';
import { UserInfoConsumer } from '@/core/UserInfoProvider';
import axios from '@/core/core';


class Profile extends Component {
    static async getInitialProps() {

        const commonsData = axios.get('https://api-dev.fives.cloud/v0/commons')
        .then(response => response.data)
        .catch(e => null)
        .catch(console.log);
    
        return (commonsData ? commonsData : undefined);
    }
    
    render() {
        const data = this.props;
        const commonsData = data.result[0] !== undefined? data.result[0] : null;
        
        
        console.log(commonsData);
        return (
            <div>
                <UserInfoConsumer>
                    {({userInfo}) => {
                        return (
                            <ProfileHeader name={userInfo.firstName + " " + userInfo.lastName} email={userInfo.username} tel={userInfo.phoneNumber} />
                        )
                    }}
                </UserInfoConsumer>
                <Enrollment commonsInfo={commonsData} />      
                <PersonalInfo />
                <MedicalInfo />
                <EnrollmentHistory />
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('private')(Profile);