import React from 'react';
import Arrow from '../asset/homePage/forward-arrow2.png';
import Truncate from 'react-truncate';

export default ({id}) => {
    return (
        <div className="flex flex-col sm:flex-row shadow rounded bg-white m-4">
            <div className="bg-cb-pink-light text-cb-pink p-6 font-cu-heading flex flex-col rounded-l" >
                <span className="text-3xl font-bold  whitespace-no-wrap">06-08</span>
                <span className="text-sm">มกราคม</span>
            </div>
            <div className="m-6 text-grey-darkest flex flex-col justify-between float-none">
                <div class="mb-6">
                    <div className="text-2xl font-cu-heading whitespace-normal leading-normal font-normal">
                        ประกาศเปิดตัวเว็บไซต์ CU Blood โดย
                        Thinc. Development {id}
                    </div>
                    <div className="border-t border-cb-grey-border my-4"></div>
                </div>
                <div className="flex justify-end items-center">
                    <span className="text-right font-cu-heading mr-3 font-semibold">อ่านต่อ</span>
                    <img alt="arrow forward" className="w-6" src={Arrow}/>
                </div>
            </div>
        </div>
    );
}