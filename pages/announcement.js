import React from 'react';
import AnnouncementHeader from '@/announcement/local-components/AnnouncementHeader'
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import I18 from '@/core/i18n';

class Notice extends React.Component {
    render() {
        return (
            <div>
                <AnnouncementHeader />
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}


export default I18.withNamespaces('common')(Notice)