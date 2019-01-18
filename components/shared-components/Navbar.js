import React from 'react';
<<<<<<< HEAD:components/shared-components/Navbar.js
=======
import logo from '../../assets/logo/logo1.svg'
>>>>>>> parent of e29d83b... Merge branch 'master' into boom:src/views/shared-components/Navbar.js

export default ({onExpandListener}) => {
    return (
<<<<<<< HEAD:components/shared-components/Navbar.js
        <div className="font-cu-heading text-sm font-medium tracking-wide leading-none sticky pin-t pin-l w-full shadow z-40">
            <div className="flex justify-between items-center md:justify-center py-5 md:py-3 bg-white">
                <div className="flex justify-between w-3/4" style={{ maxWidth: '1080px' }}>
                    <div className="flex items-center ml-4">
                        <img src='/static/logo/logo1.svg' alt="logo" className="h-16 w-16" />
                        <div className="border-l mx-4 h-8 block"></div>
=======
        <div className="font-cu-heading sticky pin-t pin-l w-full shadow z-40">
            <div className="flex justify-center py-3 bg-white">
                <div className="flex justify-between w-3/4" style={{maxWidth:'1080px'}}>
                    <div className="flex items-center">
                        <img src={logo} alt="logo" className="h-16 w-16" />
                        <div className="border-l mx-4 h-8 hidden md:block"></div>
>>>>>>> parent of e29d83b... Merge branch 'master' into boom:src/views/shared-components/Navbar.js
                        <ul className="list-reset py-6 text-grey-darkest hidden md:flex">
                            <li className="mx-3">เกี่ยวกับเรา</li>
                            <li className="mx-3">ข้อควรรู้</li>
                            <li className="mx-3">ข่าวประกาศ</li>
                            <li className="mx-3">ติดต่อเรา</li>
                        </ul>
                    </div>
<<<<<<< HEAD:components/shared-components/Navbar.js
                    <div className="flex items-center">
                        <ul className="list-reset py-6">
                            <li className="text-cb-red hidden md:block">เข้าสู่ระบบ</li>
                        </ul>
                        <div className="rounded-lg hidden md:flex flex-row items-center ml-4 p-1 px-2 bg-cb-pink-light mb-2">
                            <img className="h-6" src='/static/logo/ios-globe.svg' alt="change language" />
                            <span className="ml-2 font-sans text-cb-red">THAI</span>
                        </div>
                    </div>
                </div>
                <div className="flex md:hidden flex-col mr-6" onClick={onExpandListener}>
                    <div className="border-b-2 border-black w-8"></div>
                    <div className="border-b-2 border-black w-8 pt-1"></div>
                    <div className="border-b-2 border-black w-8 pt-1"></div>
=======
                    <ul className="list-reset py-6">
                        <li className="text-red">เข้าสู่ระบบ</li>
                    </ul>
>>>>>>> parent of e29d83b... Merge branch 'master' into boom:src/views/shared-components/Navbar.js
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