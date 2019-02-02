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

        const lengthOfArray = announcementData.length;

        const announcementDateMoment = (props) => {
            let data = moment(announcementDate[props]).format('DD MMMM YYYY');
            return(
                data
            );
        }

        const AnnouncementCardLoop = () => {
            let data = [];
            for(let i = 0; i < lengthOfArray; i++) {
                data.push(<AnnouncementCard text={announcementTitle[i]} date={announcementDateMoment(i)} />);
            }

            return data;
        }


        return (
            <div className="bg-grey-lightest">
                <AnnouncementHeader />
                <div className="flex flex-row flex-wrap pb-10 justify-center">
                     <AnnouncementCardLoop />
                </div>
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}




export default I18.withNamespaces('common')(Notice)