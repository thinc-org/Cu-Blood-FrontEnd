import React from 'react';
import logo from '../Asset/logo/logo1-small.png'

export default () => {
    return (
        <div className="flex justify-center shadow py-4 font-cu-heading">
            <div className="flex justify-between w-3/4">
                <div className="flex items-center">
                    <img src={logo} alt="logo" className="h-16 w-16"/>
                    <div className="border-l-2 mx-4 h-12"></div>
                    <ul className="list-reset flex py-6 text-grey-darkest">
                        <li className="inline mx-3">เกี่ยวกับเรา</li>
                        <li className="mx-3">ข้อควรรู้</li>
                        <li className="mx-3">ข่าวประกาศ</li>
                        <li className="mx-3">เข้าสู่ระบบ</li>
                    </ul>
                </div>
                <ul className="list-reset py-6">
                    <li className="text-red">เช้าสู่ระบบ</li>
                </ul>
            </div>
        </div>
    );
};