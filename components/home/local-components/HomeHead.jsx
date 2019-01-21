import React, { Component } from "react";
import Link from 'next/link';
// import homeBg from '../../../static/home/homehead.jpg'

class HomeHead extends Component {
  render() {

    return (
      <div className="bg-cover" style={{backgroundImage: 'url(../../../static/home/homehead.jpg)'}}>
      <div style={{ background: 'rgba(0, 0, 0, 0.5)'}}>
        <div className="layout-wide font-cu-heading py-16 md:items-start text-center md:text-left">
          <div className="text-6xl mb-6 text-white font-bold">
            CU Blood
          </div>
          <div className="text-3xl font-normal mb-6 text-grey-lightest lg:w-2/5">
            โครงการรณรงค์ให้นิสิตปัจจุบัน นิสิตเก่า คณาจารย์ และบุคลากร ของ
            <span className="text font-bold">จุฬาลงกรณ์มหาวิทยาลัย</span>
            ร่วมกันบริจาคโลหิตให้แก่สภากาชาดไทย
          </div>
          <Link href="/register" prefetch>
            <button className="text-2xl bg-cb-red rounded-lg text-white px-20 py-4 mb-8 leading-none">ลงทะเบียน</button>
          </Link>
          <Link href="/about" prefetch><a>
            <div className="flex items-center justify-center md:justify-start">
              <p className="text-2xl text-white font-normal mr-2">
                เกี่ยวกับโครงการ
              </p>
              <img src='/static/home/forward-arrow.svg' alt="arrow" className="w-6 pb-2" />
            </div>
          </a></Link>
        </div>
        </div>
      </div>
    );
  }
}

export default HomeHead;
