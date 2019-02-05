import React, { Component } from 'react';
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n;

class AnnouncementContent extends Component {
    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const { data = [], t } = this.props;
        const content = data.slice(0, 5).map(
            (dataContent, index) => this.contentForm(dataContent.title, dataContent.updatedAt, `py-6`, index, i18n.language)
        )

        return (
            <div>
                {content}
                <div className="flex w-full items-center justify-end my-6">
                    <div className="font-medium mr-2" style={{ colo: "#333333" }}>{t('lookAnnouncment')}</div>
                    <img src='/static/home/forward-arrow2.svg' alt="arrow" className="w-6 pb-2" />
                </div>
            </div>
        );
    }

    contentForm = (title, date, padding, index, lang) => {
        return (title && date) ?
            (
                <div key={index} className={`border-cb-grey border-b flex items-start ${padding}`}>
                    <img src='/static/home/megaphone.svg' alt="Megaphone" className="w-8 mr-6" />
                    <div>
                        <div className="text-xl font-medium mb-1" style={{ color: "#333333" }}>{title}</div>
                        <div className="text-cb-pink font-normal font-cu-body">{moment(date).add('years', (lang === 'th' ? 543 : 0)).format('dddd, D MMMM YYYY')}</div>
                    </div>
                </div>
            )
            :
            (
                null
            );
    }
}

export default I18.withNamespaces('index')(AnnouncementContent);
