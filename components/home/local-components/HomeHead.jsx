import React, { Component } from "react";
import Link from 'next/link';

class HomeHead extends Component {
  render() {

    return (
      <div className="bg-cover bg-center" style={{ backgroundImage: 'url(../../../static/home/homehead.jpg)' }}>
        <div style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="layout-wide font-cu-heading py-20 md:items-start text-center md:text-left">
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
            <div className="w-auto flex justify-center md:justify-start">
              <Link href="/about" prefetch>
                <div className="flex items-center justify-center cursor-pointer">
                  <p className="text-2xl text-white font-normal mr-2">
                    เกี่ยวกับโครงการ
                  </p>
                  <div>
                    <img src='/static/home/forward-arrow.svg' alt="arrow" className="w-6" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeHead;
