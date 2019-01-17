import React, { Component } from "react";
import Arrow from "../../../assets/home/forward-arrow.svg";
import Cross from "../../../assets/home/cross.svg";
import Logo from "../../../assets/logo/logo1.svg";
import Blood from "../../../assets/home/blood-logo.svg";

class HomeHead extends Component {
  render() {
    let font = {
      color: "#323232"
    };

    return (
      <div id="homeHeadBanner" className="flex bg-cb-grey-lighter font-cu-heading py-10 overflow-hidden lg:flex-row  flex-col-reverse ">
                          {/*<div className="flex flex-col md:flex-row md:justify-center w-4/5 sm:w-3/5">*/}
        <div id="leftBoxHomeHeaderBanner" className="flex w-full lg:w-1/2 flex-col">
          <div className="w-3/4 flex flex-col items-center self-center lg:items-start lg:self-end text-center lg:text-left">
            <div className="text-6xl text-cb-red font-black mb-6 ">
              CU Blood
            </div>
            <div className="text-3xl font-normal mb-6" style={font}>
              โครงการรณรงค์ให้นิสิตปัจจุบัน นิสิตเก่า คณาจารย์ และบุคลากร ของ
              <span className="font-black">จุฬาลงกรณ์มหาวิทยาลัย</span>
              ร่วมกันบริจาคโลหิตให้แก่สภากาชาดไทย
            </div>
          
          <div className="flex justify-center md:justify-start">
            <button className="text-lg bg-cb-red rounded-lg text-white px-12 h-12 mb-6 leading-none">
              ลงทะบียน
            </button>              
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <p className="text-lg text-cb-red font-normal mr-2">
              เกี่ยวกับโครงการ
            </p>
            <img src={Arrow} alt="arrow" className="w-6 pb-2" />
          </div>
          </div>
        </div>
                            
                          {/*<div className="w-full md:w-1/2 flex md:flex-row justify-center md:justify-start items-center md:pl-10">*/}
        <div id="rightBoxHomeHeaderBanner" className="w-full lg:w-1/2 flex overflow-hidden flex-col justify-center py-8 lg:py-0">
          <div className="flex flex-row lg:self-start self-center items-center ">
            <img src={Logo} alt="CU Blood logo" className=" h-full px-6 pl-10" style={{width: '11rem'}} />
            <img src={Cross} alt="Cross" className="w-6 h-full" />
            <img src={Blood} alt="Red Cross logo" className=" h-full px-6" style={{width: '15rem'}}/>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHead;
