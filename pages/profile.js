import React, { Component } from 'react';
import I18 from '@/core/i18n';
import ProfileHeader from '@/profile/ProfileHeader';
import Enrollment from '@/profile/Enrollment';
import PersonalInfo from '@/profile/PersonalInfo';
import MedicalInfo from '@/profile/MedicalInfo';
import EnrollmentHistory from '@/profile/EnrollmentHistory';
import FacebookButton from '@/shared-components/FacebookButton';
import Footer from '@/shared-components/Footer';
// import '../../static/css/profile.css';
import '../static/css/profile.css';



class Profile extends Component {
    render() {
        return(
            <div>
                <ProfileHeader name="พชรภัทร ชัยเจริญ" email="abcdef@gmail.com" tel="081-234-5678"/>  
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