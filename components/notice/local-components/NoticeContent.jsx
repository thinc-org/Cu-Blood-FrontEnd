import React from 'react';
import TopicCenter from '@/shared-components/TopicCenter';

export default class NoticeContent extends React.Component {
    render() {
        return (
            <div className="layout-wide">
                <TopicCenter english="CHARACTERISTIC AND CRITERIA" englishColor="text-pink" thai="คุณสมบัติผู้บริจาคโลหิต" borderColor="border-red" />
                <BulletPoint />
                <TopicCenter english="PROCEDURES" englishColor="text-pink" thai="ขั้นตอนการบริจาคโลหิตกับโครงการ" borderColor="border-red" />
                <BulletPoint />
                <TopicCenter english="PRE-POST DONATION PREPARATION" englishColor="text-pink" thai="การเตรียมตัวก่อน-หลังบริจาคโลหิต" borderColor="border-red" />
                <BulletPoint />
                <NoticeContact />
            </div>
        );
    }
}


const BulletPoint = () => {
    return (
        <div className="bg-white flex flex-col font-cu-heading text-xl p-4">
            <div className="flex flex-row items-center justify-center">
                <span className="bg-pink-lightest text-pink-dark text-2xl p-4 w-12 sm:w-16 h-12 sm:h-16 rounded-full flex items-center justify-center mr-6">
                    1
                </span>
                <span>
                    อายุระหว่าง 17 ปีถึง 70 ปีบริบูรณ์ผู้ที่มีอายุ 17 ปีไม่ถึง 18 ปีต้องมีหนังสือยินยอมจากผู้ปกครอง
                </span>
            </div>
            <hr className="border-solid border-grey w-full py-8 " style={{ borderBottomWidth: '0.05rem' }} />
        </div>
    )
}

const NoticeContact = () => {
    return(
        <div className="flex justify-center text-center font-cu-heading font-medium text-2xl p-8">
            สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่ <br/>
            โทร.0 2256 4300 , 0 2263 9600-99 ต่อ 1101,1760,1761
        </div>
    )
}