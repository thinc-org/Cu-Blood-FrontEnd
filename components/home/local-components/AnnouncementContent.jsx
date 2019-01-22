import React, { Component } from 'react';
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n;

class AnnouncementContent extends Component {
    render() {
        const { data = [] } = this.props;
        const content = data.slice(0, 5).map(
            (dataContent, index) => this.contentForm(dataContent.title, dataContent.updatedAt, `py-6`, index)
        )

        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')

        return (
            <div>
                {/* {this.contentForm(`จุฬาฯ ลงนามบันทึกความเข้าใจกับ North-Eastern Hill University (NEHU)`, `จันทร์, 14 มกราคม 2562`, `pb-6`)} */}
                {content}
                <div className="flex w-full items-center justify-end my-6">
                    <div className="font-medium mr-2" style={{ colo: "#333333" }}>ดูข่าวประกาศทั้งหมด</div>
                    <img src='/static/home/forward-arrow2.svg' alt="arrow" className="w-6 pb-2" />
                </div>
            </div>
        );
    }

    contentForm = (title, date, padding, index) => {
        return (title && date) ?
            (
                <div key={index} className={`border-cb-grey border-b flex items-start ${padding}`}>
                    <img src='/static/home/megaphone.svg' alt="Megaphone" className="w-8 mr-6" />
                    <div>
                        <div className="text-xl font-medium mb-1" style={{ color: "#333333" }}>{title}</div>
                        <div className="text-cb-pink font-normal font-cu-body">{moment(date).add('years', (i18n.language === 'th' ? 543 : 0)).format('dddd, D MMMM YYYY')}</div>
                    </div>
                </div>
            )
            :
            (
                null
            );
    }
}

export default AnnouncementContent;