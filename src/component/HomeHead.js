import React, { Component } from "react";
import Arrow from "../asset/homePage/forward-arrow.png";
import Cross from "../asset/homePage/cross.png";
import Logo from "../asset/logo/logo1.png";
import Blood from "../asset/homePage/blood-logo.png"

class HomeHead extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let font = {
        color: '#323232'
    }

    return (
      <div className="flex justify-center bg-cb-grey-lighter font-cu-heading pt-10">
        <div className="flex flex-col sm:flex-row sm:justify-center w-3/5">
          <div className="w-full sm:w-1/2 my-10 text-center sm:text-left">
            <h1 className="text-5xl text-cb-red mb-10">CU Blood</h1>
            <p className="text-2xl font-normal mb-6" style={font}>
              โครงการรณรงค์ให้นิสิตปัจจุบัน นิสิตเก่า คณาจารย์ และบุคลากร ของ
              <span className="font-black">จุฬาลงกรณ์มหาวิทยาลัย</span>
              ร่วมกันบริจาคโลหิตให้แก่สภากาชาดไทย
            </p>
            <button className="bg-cb-red rounded-lg text-white px-12 pt-4 pb-2 mb-6">ลงทะบียน</button>
            <div className="flex items-start justify-center sm:justify-start">
              <p className="text-cb-red font-semibold mr-2">เกี่ยวกับโครงการ</p>
              <img src={Arrow} className="w-6"/>
            </div>
          </div>
          <div className="h-64 sm:h-auto w-full sm:w-1/2 flex sm:flex-col md:flex-row justify-center md:justify-start items-center md:pl-10">
            <img src={Logo} className="w-24 mr-6 sm:mr-0 md:mr-6 sm:mb-6 md:mb-0 "/>
            <img src={Cross} className="w-6 mr-6 sm:mr-0 md:mr-6 sm:mb-6 md:mb-0 "/>
            <img src ={Blood} className="w-32"/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHead;
