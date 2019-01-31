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

        const commonsDataPromise = axios.get('https://api-dev.fives.cloud/v0/commons');
        const sessionDataPromise = axios.get('https://api-dev.fives.cloud/v0/profile/me/sessions');

        const data = await Promise.all([commonsDataPromise, sessionDataPromise]
        .map(p => p
            .then(response => response.data)
            .catch(e => null)))
        .catch(console.log);
        
        const [commonsData, sessionData] = data;
        return {
          commonsData: commonsData ? commonsData : undefined,
          sessionData: sessionData ? sessionData : undefined,
        };
    }
    
    render() {
        const { commonsData, sessionData } = this.props;
        const commonsInfo = commonsData.result[0] !== undefined? commonsData.result[0] : null;
        const sessionInfo = sessionData.result !== undefined? sessionData.result : null;

        console.log(commonsInfo);
        return (
            <div>
                <UserInfoConsumer>
                    {({userInfo}) => {
                        console.log(userInfo)
                        return (
                            <ProfileHeader name={userInfo.firstName + " " + userInfo.lastName} email={userInfo.username} tel={userInfo.phoneNumber} />
                        )
                    }}
                </UserInfoConsumer>
                <Enrollment commonsInfo={commonsInfo} sessionInfo={sessionInfo}/>      
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