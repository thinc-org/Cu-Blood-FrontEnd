import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';
import { UserInfoConsumer } from '@/core/UserInfoProvider';
import moment from 'moment';
import I18, {Link} from '@/core/i18n';
let i18n = I18.i18n

class PersonalInfo extends Component {    
    render() {   
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en') 
        const { t } = this.props;  
        return(
            <div className="layout-wide">
                <div className="flex items-center justify-between">
                    <Header english="PERSONAL INFORMATION" thai="ข้อมูลส่วนตัว" englishColor="text-cb-pink" borderColor="border-cb-red" />  
                    <Link href="/u/updateInfo" prefetch><button><img className="w-6" src="/static/icons/fix.svg" alt="Fix logo" /> </button></Link>
                </div>
                <UserInfoConsumer>
                    {({userInfo}) => {
                        if (!userInfo || !userInfo.uuid) {
                            return (<div className="w-full flex mb-10"><Detail bigText="ขณะนี้ข้อมูลมีปัญหา โปรดลองใหม่อีกครั้ง" smallText="Error in retrieving information, please try again later"/></div>);
                        }
                        return(
                            <div className="w-full flex flex-row flex-wrap mb-2 special-mb-0">
                                {this.content(`${userInfo.firstName} ${userInfo.lastName} (${userInfo.nickname})`, t('personalInfoName'), true)}
                                {this.content(this.gender(userInfo.gender), t('personalInfoSex'))}
                                {this.content(moment(userInfo.birthday).add('years', (i18n.language === 'th' ? 543 : 0)).format('D MMMM YYYY'), t('personalInfoBirthday'))}
                                {this.content(userInfo.username, t('personalInfoEmail'))}
                                {this.content(userInfo.phoneNumber, t('personalInfoTel'))}
                                {this.content(userInfo.address !== null && userInfo.address !== "-" ? userInfo.address : t('personalInfoNoAddress'), t('personalInfoAddress'))}
                                {this.content(this.status(userInfo.status), t('personalInfoStatus'))}
                                {this.content(userInfo.studentId, t('personalInfoStudentId'))}
                                {this.content(userInfo.school.nameTH, t('personalInfoFaculty'))}
                                {this.content(this.academicYear(userInfo.academicYear), t('personalInfoYear'))}
                                {this.content(this.bloodType(userInfo.bloodType), t('personalInfoBlood'))}
                                {this.content(`${userInfo.weight} kg`, t('personalInfoWeight'))}
                                {this.content(this.shirtSize(userInfo.shirtSize), t('personalInfoShirt'))}
                                {this.content(userInfo.isDonated === 1 ? t('personalInfoDid') : t('personalInfoDidNot'), t('personalInfoDonateBefore'))}
                                {this.content(userInfo.isEnrolled === 1 ? t('personalInfoDid') : t('personalInfoDidNot'), t('personalInfoDonateCUBlood'))}
                                {this.content(userInfo.nationality === 1 ? t('personalInfoYes') : t('personalInfoNo'), t('personalInfoForeigner'))}
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
            return "M (38\")";

            case 1:
            return "L (40\")";

            case 2:
            return "XL (42\")";

            case 3:
            return "XXL (44\")";
            
            default: 
            return null;
        }
    }

    academicYear = (reference) => {
        switch(reference) {
            case 0:
            return "ปี 1";

            case 1:
            return "ปี 2";

            case 2:
            return "ปี 3";

            case 3:
            return "ปี 4";

            case 4:
            return "ปี 5";

            case 5:
            return "ปี 6";

            case 6:
            return "ปริญญาโท";
            
            case 7:
            return "ปริญญาเอก";

            case 8:
            return "อื่นๆ"

            default: 
            return null;
        }
    }

    status = (reference) => {
        switch(reference) {
            case 0:
            return "นิสิตจุฬา";

            case 1:
            return "นิสิตเก่า";

            case 2:
            return "บุคลากร";

            case 3:
            return "อาจารย์";

            default:
            return null;
        }
    } 
}

export default I18.withNamespaces('profile')(PersonalInfo);