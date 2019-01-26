import React, { Component } from 'react';
import AnnouncementContent from './AnnouncementContent';
import Header from "@/shared-components/PageHeader";
import Topic from "@/shared-components/Topic";

class Announcement extends Component {

    render() {
        return (
            <div className="bg-white display flex">
                <div className="bg-cover bg-center hidden md:block w-screen max-w-xs xl:max-w-md" style={{ backgroundImage: 'url(../../../static/home/announcementBackground.jpg)' }}></div>
                <div className="font-cu-heading flex flex-col md:px-10">
                    <div className="hidden md:block">
                        <Topic borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink" />
                    </div>
                    <div className="block md:hidden">
                        <Header borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink" />
                    </div>
                    <div className="mx-10 md:mx-0"><AnnouncementContent data={this.props.announcementData} /></div>
                </div>
            </div>
        );
    }
}

export default Announcement;