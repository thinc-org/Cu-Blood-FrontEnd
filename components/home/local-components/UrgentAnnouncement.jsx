import React, { Component } from "react";

class UrgentAnnouncement extends Component {
  render() {
    const line = {
      "border-color":"rgba(255,255,255,0.1)",
    }

    return (
      <div className="bg-cb-red">
        <div className="layout-wide flex justify-center text-white">
          <div className="flex flex-col sm:flex-row w-full mt-10 font-cu-heading justify-center">
            <div className="pb-4 sm:pb-0 sm:pr-4 md:pr-8 mb-6 sm:mb-0 flex justify-start sm:justify-end">
              {this.contentDate(`18-21`, `มกราคม`)}
              {this.contentDesc(`วันบริจาคเลือด`, `อีก 3 วัน`)}
            </div>
            <div className="border-l h-16" style={line}></div>
            <div className="pb-4 sm:pl-4 md:pl-8 flex items-end">
              {this.contentDate(17, `มกราคม`)}
              {this.contentDesc(`ปิดการลงทะเบียน`, `อีก 2 วัน`)}
            </div>
          </div>            
        </div>
      </div>
    );
  }

  contentDate = (date, month) => {
    return (
        <div className="mr-4 text-right">
            <p className="text-3xl">{date}</p>
            <p className="text-xl font-normal" >{month}</p>
        </div>
    );
  }

  contentDesc = (title, time) => {
      return (
      <div className="flex flex-col">
        <p className="text-3xl">{title}</p>
        <p className="text-xl font-normal" style={{color:'rgba(255, 255, 255, 0.5)'}}>{time}</p>
      </div>
      )
  }
}

export default UrgentAnnouncement;
