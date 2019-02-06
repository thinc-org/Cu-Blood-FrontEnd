import React, { Component } from 'react';
import I18 from '@/core/i18n';
import ProfileHeader from '@/profile/local-components/ProfileHeader';
import Enrollment from '@/profile/local-components/Enrollment';
import PersonalInfo from '@/profile/local-components/PersonalInfo';
import EnrollmentHistory from '@/profile/local-components/EnrollmentHistory';
import FacebookButton from '@/shared-components/FacebookButton';
import Footer from '@/shared-components/Footer';
import '../../static/css/profile.css';
import axios from '@/core/core';


class Profile extends Component {
    static async getInitialProps({req}) {

        const headers = req ? {
            cookie: req.headers.cookie,
        } : undefined;

        const commonsDataPromise = axios.get('https://api-dev.fives.cloud/v0/commons');
        const sessionDataPromise = axios.get('https://api-dev.fives.cloud/v0/profile/me/sessions', headers);

        const data = await Promise.all([commonsDataPromise, sessionDataPromise]
            .map(p => p
                .then(response => response.data)
                .catch(e => null)))
            .catch(console.log);

        const [commonsData, sessionData] = data;
        console.log(data, headers, 'data from session')
        return {
            commonsData,
            sessionData,
        };
    }

    render() {
        const { commonsData, sessionData } = this.props;
        const commonsInfo = commonsData ? commonsData.result : null;
        const sessionInfo = commonsData && sessionData ? sessionData.result : null;

        return (
            <div>
                <ProfileHeader />
                <Enrollment commonsInfo={commonsInfo} sessionInfo={sessionInfo} />
                <PersonalInfo />
                <EnrollmentHistory commonsInfo={commonsInfo} sessionInfo={sessionInfo} />
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('private')(Profile);