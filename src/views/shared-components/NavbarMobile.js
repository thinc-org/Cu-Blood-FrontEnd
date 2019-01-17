import React from 'react';

export default () => {
    return (
        <div className="justify-center sticky md:static pin-l pin-t py-3 bg-white flex md:hidden">
            <ul className="list-reset flex py-3 text-grey-darkest whitespace-no-wrap overflow-x-auto">
                <li className="text-red">เข้าสู่ระบบ</li>
                <li className="inline mx-3">เกี่ยวกับเรา</li>
                <li className="mx-3">ข้อควรรู้</li>
                <li className="mx-3">ข่าวประกาศ</li>
                <li className="mx-3">ติดต่อเรา</li>
            </ul>
        </div>
    );
};