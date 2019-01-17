import React from 'react';
import logo from 'assets/logo/logo1.svg'
import earth from 'assets/logo/ios-globe.svg'

export default () => {
    return (
        <div className="font-cu-heading text-sm font-medium tracking-wide leading-none sticky pin-t pin-l w-full shadow z-40">
            <div className="flex justify-between items-center md:justify-center py-5 md:py-3 bg-white">
                <div className="flex justify-between w-3/4" style={{ maxWidth: '1080px' }}>
                    <div className="flex items-center ml-4">
                        <img src={logo} alt="logo" className="h-16 w-16" />
                        <div className="border-l mx-4 h-8 block"></div>
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
                        <div className="rounded-lg hidden md:flex flex-row items-center ml-4 p-1 px-2 bg-cb-pink-light mb-2">
                            <img className="h-6" src={earth} alt="change language" />
                            <span className="ml-2 font-sans text-cb-red">THAI</span>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden flex-col mr-6">
                    <div className="border-b-2 border-black w-8"></div>
                    <div className="border-b-2 border-black w-8 mt-2"></div>
                    <div className="border-b-2 border-black w-8 mt-2"></div>
                </div>
            </div>
        </div>
    );
};