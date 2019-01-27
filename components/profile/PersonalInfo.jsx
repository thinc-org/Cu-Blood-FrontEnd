import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from '@/profile/Detail';

class PersonalInfo extends Component {    
    render() {      
        return(
            <div className="layout-wide">
                <Header english="PERSONAL INFORMATION" thai="ข้อมูลส่วนตัว" englishColor="text-cb-pink" borderColor="border-cb-red" />
                <div className="w-full flex flex-row flex-wrap mb-2 special-mb-0">
                    {this.content("พชรภัทร ชัยเจริญ", "ชื่อ - นามสกุล", true)}
                    {this.content("abcdef@gmail.com", "ที่อยู่อีเมล")}
                    {this.content("081-234-5678", "เบอร์โทรศัพท์")}
                    {this.content("1 มกราคม 2542", "วัน / เดือน / ปี เกิด")}
                    {this.content("12345678901234", "เลขประจำตัวประชาชน")}
                    {this.content("B Rh+", "หมู่เลือด")}
                </div>
                <hr className="w-full max-w-xs border border-cb-grey-border"/>
            </div>
        );
    }

    content = (bigText, smallText, isBold, align) => {
        return(
            <div className="w-full special-half-width md:w-1/3 text-center special-text-align-left mb-8 special-mb-10"><Detail bigText={bigText} smallText={smallText} isBold={isBold} align={align} /></div>
        );
    }
}

export default PersonalInfo;