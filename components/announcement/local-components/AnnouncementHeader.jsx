import React from 'react';

export default class AnnouncementHeader extends React.Component {

    render() {
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-20 text-center md:text-left" >
                    <div className="text-6xl font-bold mb-6 text-black">
                        ข่าวประกาศ
                    </div>
                    <div className="text-3xl text-grey-darkest" >
                        คณาจารย์จุฬาฯ ได้รับรางวัลนักวิจัยดีเด่นแห่งชาติ 3 สาขา
                        รางวัลผลงานวิจัย วิทยานิพนธ์และผลงานประดิษฐ์คิดค้น ปี 2562
                    </div>
                </div>
            </div>
        );
    }
}
