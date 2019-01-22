import React, { Component } from 'react';
import AnnouncementContent from './AnnouncementContent';
import Header from "@/shared-components/PageHeader";

class Announcement extends Component {

    render() {
        return (
            <div className="bg-white display flex">
                <div className="bg-cover bg-center hidden md:block w-4/5" style={{ backgroundImage: 'url(../../../static/home/announcementBg.jpg)' }}></div>
                <div className="font-cu-heading layout-wide flex flex-col md:px-10 mx-auto">
                    <div className="hidden md:block">
                        <SpecialHeader borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink" />
                    </div>
                    <div className="block md:hidden">
                        <Header borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink" />
                    </div>
                    <div className=""><AnnouncementContent data={this.props.announcementData} /></div>
                </div>
            </div>
        );
    }
}

// just temporary patch for prototype
// will revise PageHeader.jsx to be able to appect those properties in spare time
const SpecialHeader = ({ borderColor, english, thai, englishColor, thaiColor = 'black' }) => {
    return (
        <div className="font-cu-heading py-10 h-auto">
            <div className={`text-base tracking-wide font-normal ${englishColor}`}>{english}</div>
            <div className={`text-3xl font-black ${thaiColor}`}>{thai}</div>
            <hr className={`w-24 mx-0 mt-2 ${borderColor}`} style={{ borderBottomWidth: "6px" }} />
        </div>
    );
}

export default Announcement;