import React, { Component } from "react";
import Arrow from "../asset/homePage/forward-arrow.svg";
import Cross from "../asset/homePage/cross.svg";
import Logo from "../asset/logo/logo1.svg";
import Blood from "../asset/homePage/blood-logo.svg";

class HomeHead extends Component {
  render() {
    let font = {
      color: "#323232"
    };

    return (
      <div className="flex justify-center bg-cb-grey-lighter font-cu-heading py-10">
        <div className="flex flex-col md:flex-row md:justify-center w-3/5">
          <div className="w-full md:w-1/2 my-10 text-center md:text-left">
            <h1 className="text-6xl text-cb-red mb-10">CU Blood</h1>
            <p className="text-3xl font-normal mb-6" style={font}>
              โครงการรณรงค์ให้นิสิตปัจจุบัน นิสิตเก่า คณาจารย์ และบุคลากร ของ
              <span className="font-black">จุฬาลงกรณ์มหาวิทยาลัย</span>
              ร่วมกันบริจาคโลหิตให้แก่สภากาชาดไทย
            </p>
            <button className="text-lg bg-cb-red rounded-lg text-white px-12 pt-2 h-12 mb-6">
              ลงทะบียน
            </button>
            <div className="flex items-center justify-center md:justify-start">
              <p className="text-lg text-cb-red font-normal mr-2">เกี่ยวกับโครงการ</p>
              <img src={Arrow} alt="arrow" className="w-6 pb-2" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex md:flex-row justify-center md:justify-start items-center md:pl-10">
            <img
              src={Logo}
              alt="CU Blood logo"
              className="w-24 mr-6 sm:mr-0 md:mr-6 sm:mb-6 md:mb-0 "
            />
            <img
              src={Cross}
              alt="Cross"
              className="w-6 mr-6 sm:mr-0 md:mr-6 sm:mb-6 md:mb-0 "
            />
            <img src={Blood} alt="Red Cross logo" className="w-32" />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHead;
