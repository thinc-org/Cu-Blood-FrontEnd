import React, { Component } from "react";
import Link from 'next/link';

class HomeHead extends Component {
  render() {
    let font = {
      color: "#323232"
    };

    return (
      <div id="homeHeadBanner" className="bg-cb-grey-lighter">
        <div className="layout-wide flex font-cu-heading py-10 overflow-hidden lg:flex-row  flex-col-reverse">
          <div id="leftBoxHomeHeaderBanner" className="flex layout-wide lg:w-1/2 flex-col">
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
              <Link href="/register" prefetch><button className="text-lg bg-cb-red rounded-lg text-white px-12 h-12 mb-6 leading-none">
                ลงทะบียน
              </button></Link>              
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Link href="/about" prefetch><a><p className="text-lg text-cb-red font-normal mr-2">
                เกี่ยวกับโครงการ
              </p></a></Link>
              <img src='/static/home/forward-arrow.svg' alt="arrow" className="w-6 pb-2" />
            </div>
            </div>
          </div>
          <div id="rightBoxHomeHeaderBanner" className="layout-wide lg:w-1/2 flex overflow-hidden flex-col justify-center py-8 lg:py-0">
            <div className="flex flex-row lg:self-start self-center items-center ">
              <img src='/static/logo/logo1.svg' alt="CU Blood logo" className=" h-full pr-6" style={{width: '11rem'}} />
              <img src='/static/home/cross.svg' alt="Cross" className="w-6 h-full" />
              <img src='/static/home/blood-logo.svg' alt="Red Cross logo" className=" h-full pl-6" style={{width: '15rem'}}/>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default HomeHead;
