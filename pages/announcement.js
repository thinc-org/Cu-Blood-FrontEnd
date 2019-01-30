import React from 'react';
import AnnouncementHeader from '@/announcement/local-components/AnnouncementHeader'
import AnnouncementCard from '@/announcement/local-components/AnnouncementCard'
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import I18 from '@/core/i18n';

class Notice extends React.Component {
    render() {
        return (
            <div className="bg-grey-lightest">
                <AnnouncementHeader />
                <div className="flex flex-row flex-wrap pb-10 justify-center">
                     <AnnouncementCard />
                     <AnnouncementCard />
                     <AnnouncementCard />
                     <AnnouncementCard />
                     <AnnouncementCard />
                     <AnnouncementCard />
                     <AnnouncementCard />
                     <AnnouncementCard />
                </div>
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}


export default I18.withNamespaces('common')(Notice)