import React, { Component } from 'react';
import I18 from '@/core/i18n';
import ProfileHeader from '@/profile/ProfileHeader';
import Enrollment from '@/profile/Enrollment';
import PersonalInfo from '@/profile/PersonalInfo';
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
          sessionData: sessionData !== null ? sessionData : undefined,
        };
    }
    
    render() {
        const { commonsData, sessionData } = this.props;
        const commonsInfo = commonsData !== undefined? commonsData.result : null;
        const sessionInfo = sessionData !== undefined? sessionData.result : null;

        return (
            <div>
                <UserInfoConsumer>
                    {({userInfo}) => {
                        return (
                            <ProfileHeader />
                        )
                    }}
                </UserInfoConsumer>
                <Enrollment commonsInfo={commonsInfo} sessionInfo={sessionInfo}/>      
                <PersonalInfo />
                <EnrollmentHistory commonsInfo={commonsInfo} sessionInfo={sessionInfo}/>
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('private')(Profile);