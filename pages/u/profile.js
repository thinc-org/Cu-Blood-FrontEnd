import React, { Component } from 'react';
import ProfileHeader from '@/profile/local-components/ProfileHeader';
import Enrollment from '@/profile/local-components/Enrollment';
import PersonalInfo from '@/profile/local-components/PersonalInfo';
import EnrollmentHistory from '@/profile/local-components/EnrollmentHistory';
import FacebookButton from '@/shared-components/FacebookButton';
import Footer from '@/shared-components/Footer';
import '../../static/css/profile.css';
import axios from '@/core/core';
import Head from 'next/head';
import I18 from '@/core/i18n';


class Profile extends Component {
    static async getInitialProps({ req }) {

        const headers = req ? {
            cookie: req.headers.cookie,
        } : undefined;

        const commonsDataPromise = axios.get('/commons');
        const sessionDataPromise = axios.get('/profile/me/sessions', { headers });

        const data = await Promise.all([commonsDataPromise, sessionDataPromise]
            .map(p => p
                .then(response => response.data)
                .catch(e => null)))
            .catch(console.log);
        const [commonsData, sessionData] = data;
        return {
            commonsData,
            sessionData,
            namespacesRequired: ['common', 'profile'],
        };
    }

    render() {
        const { commonsData, sessionData, t } = this.props;
        const commonsInfo = commonsData ? commonsData.result : null;
        const sessionInfo = commonsData && sessionData ? sessionData.result : null;

        return (
            <div>
                <Head>
                    <title>
                        {t('profileHeader')}
                    </title>
                </Head>
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

export default I18.withNamespaces('profile')(Profile);