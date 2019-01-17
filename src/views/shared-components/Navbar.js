import React from 'react';
import logo from '../../assets/logo/logo1-small.png'

export default () => {
    return (
        <div className="font-cu-heading sticky pin-t pin-l w-full shadow z-40">
            <div className="flex justify-center py-3 bg-white">
                <div className="flex justify-between w-3/4" style={{maxWidth:'1080px'}}>
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-16 w-16" />
                        <div className="border-l-2 mx-4 h-12 hidden md:block"></div>
                        <ul className="list-reset py-6 text-grey-darkest hidden md:flex">
                            <li className="mx-3">เกี่ยวกับเรา</li>
                            <li className="mx-3">ข้อควรรู้</li>
                            <li className="mx-3">ข่าวประกาศ</li>
                            <li className="mx-3">ติดต่อเรา</li>
                        </ul>
                    </div>
                    <ul className="list-reset py-6">
                        <li className="text-red">เข้าสู่ระบบ</li>
                    </ul>
                </div>
            </div>
            <div className="border-t block md:hidden"></div>
            <div className="justify-center py-3 bg-white flex md:hidden">
                <ul className="list-reset flex py-3 text-grey-darkest whitespace-no-wrap overflow-x-auto">
                    <li className="inline mx-3">เกี่ยวกับเรา</li>
                    <li className="mx-3">ข้อควรรู้</li>
                    <li className="mx-3">ข่าวประกาศ</li>
                    <li className="mx-3">ติดต่อเรา</li>
                </ul>
            </div>
        </div>
    );
};