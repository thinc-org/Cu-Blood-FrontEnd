import React from 'react';
import logo from '../../assets/logo/logo1.svg'
import earth from '../../assets/logo/ios-globe.svg'

export default () => {
    return (
        <div className="font-cu-heading leading-none static md:sticky md:pin-t md:pin-l w-full shadow z-40">
            <div className="flex justify-center py-3 bg-white">
                <div className="flex justify-between w-3/4" style={{ maxWidth: '1080px' }}>
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-16 w-16" />
                        <div className="border-l mx-4 h-8 hidden md:block"></div>
                        <ul className="list-reset py-6 text-grey-darkest hidden md:flex">
                            <li className="mx-3">เกี่ยวกับเรา</li>
                            <li className="mx-3">ข้อควรรู้</li>
                            <li className="mx-3">ข่าวประกาศ</li>
                            <li className="mx-3">ติดต่อเรา</li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <ul className="list-reset py-6">
                            <li className="text-cb-red hidden md:block">เข้าสู่ระบบ</li>
                        </ul>
                        <div className=" flex items-center rounded-lg ml-4 p-2 bg-cb-pink-light">
                            <img className="h-6" src={earth} alt="change language" />
                            <span className="ml-2 text-cb-red">THAI</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-t block md:hidden"></div>
        </div>
    );
};