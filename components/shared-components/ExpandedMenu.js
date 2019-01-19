import React from 'react';

export default ({visibility, onCloseListener}) => {
    return visibility ? (
        <div className="w-4/5 bg-white shadow-md h-screen fixed pin-r pin-t z-50 flex flex-col md:hidden font-cu-heading font-medium tracking-wide leading-none">
            <div className="flex flex-row justify-between items-center py-6 ml-10 mr-6 border-b">
                <div onClick={onCloseListener} className="close"></div>
                <div className="rounded-lg flex flex-row items-center ml-4 p-1 px-2 bg-cb-pink-light mb-2">
                    <img className="h-5" src='/static/logo/ios-globe.svg' alt="change language" />
                    <span className="ml-2 font-sans text-cb-red">THAI</span>
                </div>
            </div>
            <div className="my-3">
                <ul className="list-reset text-grey-darkest flex flex-col ml-6">
                    <li className="my-3">เกี่ยวกับเรา</li>
                    <li className="my-3">ข้อควรรู้</li>
                    <li className="my-3">ข่าวประกาศ</li>
                    <li className="my-3">ติดต่อเรา</li>
                    <li className="my-3 text-cb-red">เข้าสู่ระบบ</li>
                </ul>
            </div>
        </div>
    )
        :
        (
            <div>
                {/* nothing here */}
            </div>
        );
};