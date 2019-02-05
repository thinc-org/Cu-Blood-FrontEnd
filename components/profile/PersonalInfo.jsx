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
                <div className="flex items-center justify-between">
                    <Header english="PERSONAL INFORMATION" thai="ข้อมูลส่วนตัว" englishColor="text-cb-pink" borderColor="border-cb-red" />  
                    <button><img className="w-6" src="/static/icons/fix.svg" alt="Fix logo" /> </button>
                </div>
                <UserInfoConsumer>
                    {({userInfo}) => {
                        if ((userInfo === undefined) || (userInfo === null)) {
                            return (<div className="w-full flex mb-10"><Detail bigText="ขณะนี้ข้อมูลมีปัญหา โปรดลองใหม่อีกครั้ง" smallText="Error in retrieving information, please try again later"/></div>);
                        }
                        return(
                            <div className="w-full flex flex-row flex-wrap mb-2 special-mb-0">
                                {this.content(`${userInfo.firstName} ${userInfo.lastName}`, "ชื่อ - นามสกุล", true)}
                                {this.content(this.gender(userInfo.gender), "เพศ")}
                                {this.content(`${moment(userInfo.birthday).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM YYYY')}`, "วัน / เดือน / ปี เกิด")}
                                {this.content(`${userInfo.username}`, "ที่อยู่อีเมล")}
                                {this.content(`${userInfo.phoneNumber}`, "เบอร์โทรศัพท์")}
                                {this.content(`${userInfo.address ? userInfo.address : "ไม่ได้ระบุ"}`, "ที่อยู่บ้าน")}
                                {this.content(userInfo.studentId, "รหัสนิสิต")}
                                {this.content(userInfo.school.nameTH, "คณะที่ศึกษา")}
                                {this.content(`ปี ${userInfo.academicYear}`, "ชั้นปี")}
                                {this.content(`${this.bloodType(userInfo.bloodType)}`, "หมู่เลือด")}
                                {this.content(`${userInfo.weight} kg`, "น้ำหนัก")}
                                {this.content(this.shirtSize(userInfo.shirtSize), "ไซส์เสื้อ")}
                                {this.content(`${userInfo.isDonated === 1 ? "เคย" : "ไม่เคย"}`, "เคยปริจาคเลือด")}
                                {this.content(`${userInfo.isEnrolled === 1 ? "เคย" : "ไม่เคย"}`, "เคยปริจาคกับทาง CU Blood")}
                                {this.content(`${userInfo.nationality === 1 ? "ใช่" : "ไม่ใช่"}`, "เป็นชาวต่างชาติ")}
                            </div>                             
                        )
                    }}
                </UserInfoConsumer>
                <hr className="w-full max-w-xs border border-cb-grey-border"/>
                <Header english="MEDICAL CONDITIONS" thai="โรคประจำตัว / ประวัติการแพ้ยา" englishColor="text-cb-pink" borderColor="border-cb-red" />
                <UserInfoConsumer>
                    {({userInfo}) => {
                        if ((userInfo === null) || (userInfo === undefined)) {
                            return (<div className="w-full flex mb-10"><Detail bigText="ขณะนี้ข้อมูลมีปัญหา โปรดลองใหม่อีกครั้ง" smallText="Error in retrieving information, please try again later"/></div>);
                        }
                        return (
                            <div className="font-cb-body text-xl mb-10">{userInfo.medicalCondition}</div>    
                        )
                    }}                  
                </UserInfoConsumer>
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

            default:
            return null;
        }
    }

    gender = (reference) => {
        switch(reference) {
            case 0:
            return "Male";

            case 1:
            return "Female";

            default:
            return null;
        }
    }

    shirtSize = (reference) => {
        switch(reference) {
            case 0:
            return "XS";

            case 1:
            return "S";

            case 2:
            return "M";

            case 3:
            return "L";

            case 4:
            return "XL";

            case 5:
            return "XXL";

            case 6:
            return "XXXL";
            
            default: 
            return null;
        }
    }
}

export default PersonalInfo;