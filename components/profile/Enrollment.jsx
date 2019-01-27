import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';

class Enrollment extends Component {
    render() {
        const eventTitle = "CU Blood Project \"เลือดสีชมพู\" ครั้งที่ 4";

        return(
            <div className="bg-cb-grey-lighter pb-10">
                <div className="layout-wide">
                    <Header english="ENROLLMENT" thai="ลงทะเบียนเข้าร่วม" englishColor="text-cb-pink" borderColor="border-cb-red" />
                    <div className="bg-white py-10 flex flex-col px-10 rounded-lg">
                        <div className="w-full mb-8 text-3xl font-cu-heading">{eventTitle}</div>
                        <div className="w-full border-cb-grey-border border-t border-b py-8 flex flex-col">
                            {this.content(`อาคารมหิตลาธิเบศร จุฬาลงกรณ์มหาวิทยาลัย`, `Mahittalathibet Building, Chulalongkorn University`, `https://www.google.com/maps/search/?api=1&query=13.7367861%2C100.5321102&query_place_id=ChIJS2-cD9We4jAReELREIa4HPI`, `mb-8`)}
                            {this.content(`สภากาชาดไทย`, `Thai Red Cross Society`, `https://www.google.com/maps/search/?api=1&query=13.7367861%2C100.5321102&query_place_id=ChIJS2-cD9We4jAReELREIa4HPI`)}
                        </div>
                        <div className="w-full flex flex-col sm:flex-row items-center sm:justify-between mt-8">
                            <Detail bigText="10 มกราคม - 20 มีนาคม" smallText="วันลงทะเบียน" isBold={true} />
                            <Detail bigText="21 มีนาคม - 30 มีนาคม" smallText="วันบริจาคโลหิต" isBold={true} align="text-right" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    content = (thaiPlace, engPlace, urlLocation, divClass=``) => {
        return(
            <div className={`flex flex-col md:flex-row items-center justify-between ${divClass}`}>
                <Detail bigText={thaiPlace} smallText={engPlace} />
                <div className="flex font-cu-body items-center">
                    <a href={`${urlLocation}`} target="_blank" rel="noopener noreferrer" className="text-base mr-8 text-center" style={{color: "#58595b"}}>ดูแผนที่</a>
                    <button className="text-lg bg-cb-pink-light rounded-lg px-6 py-2 font-semibold" style={{color: "#de5c8e"}}>ลงทะเบียน</button>
                </div>
            </div>
        );
    }
} 

export default Enrollment;