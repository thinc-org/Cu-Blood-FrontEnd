import React from 'react'

export default class AnnouncementCard extends React.Component {
    render() {
        return (
            <div className={"bg-white flex flex-col justify-between shadow-md text-black rounded-lg lg:mb-0 m-5 mt-10"} style={{ width: "19rem" }}>
                <div className="bg-white flex bg-center bg-cover" style={{ height: '150px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}></div>
                <div className="flex flex-row items-center px-6 bg-white my-5">
                    <p className="pl-2 font-semibold text-lg font-cu-body text-pink-dark">
                        12 JANUARY 2019
                    </p>
                </div>
                <div className="px-8 pb-3 bg-white text-sm mb-3 font-cu-body text-lg leading-normal select-none">
                    คณาจารย์จุฬาฯ ได้รับรางวัลนักวิจัยดีเด่นแห่งชาติ 3 สาขา รางวัลผลงานวิจัย วิทยานิพนธ์และผลงานประดิษฐ์คิดค้น ปี 2562
                </div>
            </div>

        )
    }
}