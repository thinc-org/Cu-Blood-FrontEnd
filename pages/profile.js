import React, { Component } from 'react';
import I18 from '@/core/i18n';
import ProfileHeader from '@/profile/ProfileHeader';

class Profile extends Component {
    render() {
        return(
            <ProfileHeader name="พชรภัทร ชัยเจริญ"/>
        );
    }
}

export default I18.withNamespaces('private')(Profile);