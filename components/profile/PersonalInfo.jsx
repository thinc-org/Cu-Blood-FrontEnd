import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from '@/profile/Detail';
import { UserInfoConsumer } from '@/core/UserInfoProvider';
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n

class PersonalInfo extends Component {    
    render() {   
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')   
        return(
            <div className="layout-wide">
                <Header english="PERSONAL INFORMATION" thai="ข้อมูลส่วนตัว" englishColor="text-cb-pink" borderColor="border-cb-red" />
                <UserInfoConsumer>
                    {({userInfo}) => {
                        return(
                            <div className="w-full flex flex-row flex-wrap mb-2 special-mb-0">
                                {this.content(`${userInfo.firstName} ${userInfo.lastName}`, "ชื่อ - นามสกุล", true)}
                                {this.content(`${userInfo.username}`, "ที่อยู่อีเมล")}
                                {this.content(`${userInfo.phoneNumber}`, "เบอร์โทรศัพท์")}
                                {this.content(`${moment(userInfo.birthday).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM YYYY')}`, "วัน / เดือน / ปี เกิด")}
                                {this.content(`${userInfo.citizenId}`, "เลขประจำตัวประชาชน")}
                                {this.content(`${this.bloodType(userInfo.bloodType)}`, "หมู่เลือด")}
                            </div>                             
                        )
                    }}
                </UserInfoConsumer>

                <hr className="w-full max-w-xs border border-cb-grey-border"/>
            </div>
        );
    }

    content = (bigText, smallText, isBold, align) => {
        return(
            <div className="w-full special-half-width md:w-1/3 text-center special-text-align-left mb-8 special-mb-10"><Detail bigText={bigText} smallText={smallText} isBold={isBold} align={align} /></div>
        );
    }

    bloodType = (reference) => {
        switch(reference) {
            case 0:
            return "A Rh-";

            case 1:
            return "A Rh+";

            case 2:
            return "B Rh-";

            case 3:
            return "B Rh+";

            case 4:
            return "O Rh-";

            case 5:
            return "O Rh+";

            case 6:
            return "AB Rh-";

            case 7:
            return "AB Rh+";
        }
    }
}

export default PersonalInfo;