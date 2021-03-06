import React, { Component } from 'react';
import moment from 'moment';
import I18, { Link } from '@/core/i18n';
let i18n = I18.i18n;

class AnnouncementContent extends Component {
    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const { data = [], t } = this.props;
        const content = data.slice(0, 5).map(
            (dataContent, index) => this.contentForm(dataContent.title, dataContent.updatedAt, `py-6`, index, i18n.language, dataContent.id)
        )

        return (
            <div>
                {content}
                <div className="w-full my-6">
                    <Link href="/announcement" prefetch>
                        <div className="flex justify-end cursor-pointer">
                            <div className="font-medium mr-2" style={{ colo: "#333333" }}>{t('lookAnnouncment')}</div>
                            <div>
                                <img src='/static/home/forward-arrow2.svg' alt="arrow" className="w-6" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        );
    }

    contentForm = (title, date, padding, index, lang, id) => {
        return (title && date) ?
            (
                <div key={index} className={`border-cb-grey border-b flex items-start ${padding}`}>
                    <img src='/static/home/megaphone.svg' alt="Megaphone" className="w-8 mr-6" />
                    <Link href={"/announcement?id=" + id}>
                        <a className="no-underline">
                            <div>
                                <div className="text-xl font-medium mb-1" style={{ color: "#333333" }}>{title}</div>
                                <div className="text-cb-pink font-normal font-cu-body">{moment(date).add((lang === 'th' ? 543 : 0), 'years').format('dddd, D MMMM YYYY')}</div>
                            </div>
                        </a>
                    </Link>
                </div>
            )
            :
            (
                null
            );
    }
}

export default I18.withNamespaces('index')(AnnouncementContent);
