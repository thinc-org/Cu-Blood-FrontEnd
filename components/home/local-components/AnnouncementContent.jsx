import React, { Component } from 'react';
import map from 'lodash/map'

class AnnouncementContent extends Component {
    render() {
        const { data = [] } = this.props;
        const content = data.slice(0, 4).map(
            (dataContent, index) => this.contentForm(dataContent.title, dataContent.updatedAt, `py-6`, index)
        )

        return (
            <div>
                {this.contentForm(`จุฬาฯ ลงนามบันทึกความเข้าใจกับ North-Eastern Hill University (NEHU)`, `จันทร์, 14 มกราคม 2562`, `pb-6`)}
                {content}
                <div className="flex w-full items-center justify-end mt-6">
                    <div className="font-medium mr-2" style={{ colo: "#333333" }}>ดูข่าวประกาศทั้งหมด</div>
                    <img src='/static/home/forward-arrow2.svg' alt="arrow" className="w-6 pb-2" />
                </div>
            </div>
        );
    }

    contentForm = (title, date, padding, index) => {
        return (title && date) ?
            (
                <div key={index} className={`border-cb-grey border-b flex items-center ${padding}`}>
                    <img src='/static/home/megaphone.svg' alt="Megaphone" className="w-8 mr-6" />
                    <div>
                        <div className="text-xl font-medium mb-1" style={{ color: "#333333" }}>{title}</div>
                        <div className="text-cb-pink font-normal font-cu-body italic">{date}</div>
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