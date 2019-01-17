import React, { Component } from "react";

class UrgentAnnouncement extends Component {
  render() {
    return (
      <div className="w-full flex justify-center bg-white">
        <div className="border-cb-grey-border border-b flex flex-col sm:flex-row w-5/6 sm:w-3/5 pb-6 sm:pb-8 mt-10 font-cu-heading">
          <div className="border-cb-grey-border border-b sm:border-b-0 sm:border-r w-full sm:w-1/2 pb-6 sm:pb-0 sm:pr-8 mb-6 sm:mb-0 flex justify-start sm:justify-end items-end">
            {this.contentDate(`18-21`, `มกราคม`)}
            {this.contentDesc(`วันบริจาคเลือด`, `อีก 3 วัน`)}
          </div>
          <div className="w-full sm:w-1/2 sm:ml-8 flex items-end">
            {this.contentDate(17, `มกราคม`)}
            {this.contentDesc(`ปิดการลงทะเบียน`, `อีก 2 วัน`)}
          </div>
        </div>        
      </div>

    );
  }

  contentDate = (date, month) => {
    return (
        <div className="mr-10 text-right text-cb-red">
            <p className="text-3xl font-black">{date}</p>
            <p className="text-xl font-normal" style={{color: "#cf2333"}}>{month}</p>
        </div>
    );
  }

  contentDesc = (title, time) => {
      return (
      <div className="flex flex-col">
        <p className="text-3xl font-black break-words">{title}</p>
        <p className="text-xl font-normal" style={{color: "#4c4c4c"}}>{time}</p>
      </div>
      )
  }
}

export default UrgentAnnouncement;
