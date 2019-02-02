import React from 'react';
import AnnouncementHeader from '@/announcement/local-components/AnnouncementHeader'
import AnnouncementCard from '@/announcement/local-components/AnnouncementCard'
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import I18 from '@/core/i18n';
import axios from 'axios';
import map from 'lodash/map';
import moment from 'moment';

class Notice extends React.Component {

    static async getInitialProps() {

        const announcementDataPromise = axios.get('https://api-dev.fives.cloud/v0/announcements/all/');
        const data = await Promise.all([announcementDataPromise]
            .map(p => p
              .then(response => response.data)
              .catch(e => null)))
            .catch(console.log);

        const [announcementData] = data;
                return {
                    announcementData: announcementData ? announcementData.result : undefined
                };
    }

    render() {

        const { announcementData } = this.props;
        const announcementTitle = map(announcementData, 'title');
        const announcementDate = map(announcementData, 'updatedAt')

        const announcementDateMoment = (props) => {
            let data = moment(announcementDate[props]).format('DD MMMM YYYY');
            return(
                data
            );
        }
        return (
            <div className="bg-grey-lightest">
                <AnnouncementHeader />
                <div className="flex flex-row flex-wrap pb-10 justify-center">
                     <AnnouncementCard text={announcementTitle[1]} date={announcementDateMoment(0)}/> {/* This is the correct one, other cards waiting for pagination */}
                     <AnnouncementCard text={announcementTitle[1]}/>
                     <AnnouncementCard text={announcementTitle[2]}/>
                     <AnnouncementCard text={announcementTitle[3]}/>
                     <AnnouncementCard text={announcementTitle[4]}/>
                     <AnnouncementCard text={announcementTitle[5]}/>
                     <AnnouncementCard text={announcementTitle[6]}/>
                     <AnnouncementCard text={announcementTitle[7]}/>
                </div>
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}


export default I18.withNamespaces('common')(Notice)