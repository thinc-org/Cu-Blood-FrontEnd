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
import { UserInfoConsumer } from '../../components/core/UserInfoProvider';

class Profile extends Component {
    render() {
        return (
            <div>
                <UserInfoConsumer>
                    {({ userInfo }) => {
                        return (
                            <ProfileHeader name={userInfo.firstName + " " + userInfo.lastName} email="abcdef@gmail.com" tel={userInfo.phoneNumber} />
                        )
                    }}
                </UserInfoConsumer>
                <Enrollment />
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