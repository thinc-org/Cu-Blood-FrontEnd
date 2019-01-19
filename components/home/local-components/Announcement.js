import React, {Component} from 'react';
import AnnouncementContent from './AnnouncementContent';
import Header from "@/shared-components/PageHeader";

class Announcement extends Component {
    render() {
    //Set data of announcement into variable
    let announcementTitle = this.props.announcementData.map(element => {
        let a = [];
        a.push(element.title);
        return a;
    })
  
    let announcementDate = this.props.announcementData.map(element => {
        let a = [];
        a.push(element.id);
        return a;
    })

        return(
            <div className="bg-white w-full flex flex-col items-center">
                <Header borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink"/>
                <div className="font-cu-heading w-full px-4 flex justify-center">
                    <div className=""><AnnouncementContent title={announcementTitle} date={announcementDate}/></div>
                </div>
            </div>
        );
    }
}

export default Announcement;