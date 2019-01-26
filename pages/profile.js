import React, { Component } from 'react';
import I18 from '@/core/i18n';
import ProfileHeader from '@/profile/ProfileHeader';
import Enrollment from '@/profile/Enrollment';

class Profile extends Component {
    render() {
        return(
            <div>
                <ProfileHeader name="พชรภัทร ชัยเจริญ" email="abcdef@gmail.com" tel="081-234-5678"/>  
                <Enrollment /> 
            </div>
        );
    }
}

export default I18.withNamespaces('private')(Profile);