import React, { Component } from 'react';
import Header from '@/shared-components/TopicLeft';
import Detail from './Detail';
import { UserInfoConsumer } from '@/core/UserInfoProvider';
import moment from 'moment';
import I18, { Link } from '@/core/i18n';
let i18n = I18.i18n

class PersonalInfo extends Component {
    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const { t } = this.props;
        return (
            <div className="layout-wide">
                <div className="flex items-center justify-between">
                    <Header english={t('personalInfoSmallHeader')} thai={t('personalInfoBigHeader')} englishColor="text-cb-pink" borderColor="border-cb-red" />
                    <Link href="/u/updateInfo" prefetch>
                        <div className="flex font-cu-heading text-sm items-center">
                            <div className="mr-2 hidden sm:block">{t('changeUserInfo')}</div>
                            <button><img className="w-6" src="/static/icons/fix.svg" alt="Fix logo" /></button>
                        </div>
                    </Link>
                </div>
                <UserInfoConsumer>
                    {({ userInfo }) => {
                        if (!userInfo || !userInfo.uuid) {
                            return (<div className="w-full flex mb-10"><Detail bigText="ขณะนี้ข้อมูลมีปัญหา โปรดลองใหม่อีกครั้ง" smallText="Error in retrieving information, please try again later" /></div>);
                        }
                        return (
                            <div className="w-full flex flex-row flex-wrap mb-2 special-mb-0">
                                {this.content(`${userInfo.firstName} ${userInfo.lastName} (${userInfo.nickname})`, t('personalInfoName'), true)}
                                {this.content(t(this.gender(userInfo.gender)), t('personalInfoSex'))}
                                {this.content(moment(userInfo.birthday).add((i18n.language === 'th' ? 543 : 0), 'years').format('D MMMM YYYY'), t('personalInfoBirthday'))}
                                {this.content(userInfo.username, t('personalInfoEmail'))}
                                {this.content(userInfo.phoneNumber, t('personalInfoTel'))}
                                {this.content(userInfo.address !== null && userInfo.address !== "-" ? userInfo.address : t('personalInfoNoAddress'), t('personalInfoAddress'))}
                                {this.content(t(this.status(userInfo.status)), t('personalInfoStatus'))}
                                {this.content(userInfo.studentId ? userInfo.studentId : '-', t('personalInfoStudentId'))}
                                {this.content(userInfo.school.nameTH, t('personalInfoFaculty'))}
                                {this.content(t(this.academicYear(userInfo.academicYear)), t('personalInfoYear'))}
                                {this.content(t(this.bloodType(t(userInfo.bloodType))), t('personalInfoBlood'))}
                                {this.content(`${userInfo.weight} kg`, t('personalInfoWeight'))}
                                {this.content(this.shirtSize(userInfo.shirtSize), t('personalInfoShirt'))}
                                {this.content(userInfo.isDonated === 1 ? t('personalInfoDid') : t('personalInfoDidNot'), t('personalInfoDonateBefore'))}
                                {this.content(userInfo.isEnrolled === 1 ? t('personalInfoDid') : t('personalInfoDidNot'), t('personalInfoDonateCUBlood'))}
                                {this.content(userInfo.nationality === 1 ? t('personalInfoYes') : t('personalInfoNo'), t('personalInfoForeigner'))}
                            </div>
                        )
                    }}
                </UserInfoConsumer>
                <hr className="w-full max-w-xs border border-cb-grey-border" />
                <Header english={t('medicalInfoSmallHeader')} thai={t('medicalInfoBigHeader')} englishColor="text-cb-pink" borderColor="border-cb-red" />
                <UserInfoConsumer>
                    {({ userInfo }) => {
                        if ((userInfo === null) || (userInfo === undefined)) {
                            return (<div className="w-full flex mb-10"><Detail bigText="ขณะนี้ข้อมูลมีปัญหา โปรดลองใหม่อีกครั้ง" smallText="Error in retrieving information, please try again later" /></div>);
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
        return (
            <div className="w-full special-half-width md:w-1/3 text-center special-text-align-left mb-8 special-mb-10"><Detail bigText={bigText} smallText={smallText} isBold={isBold} align={align} /></div>
        );
    }

    bloodType = (reference) => {
        const bloodRef = Math.floor(reference / 4);
        const rhRef = reference % 4;
        let blood = null;
        switch (bloodRef) {
            case 0:
                blood = "A";
                break;
            case 1:
                blood = "B";
                break;
            case 2:
                blood = "O";
                break;
            case 3:
                blood = "AB";
                break;
            case 4:
                blood = "unknown";
                break;
        }
        let rh = null;
        switch (rhRef) {
            case 0:
                rh = "Rh+";
                break;
            case 1:
                rh = " Rh-";
                break;
            case 2:
                rh = ""
                break;
        }
        return `${blood}${rh}`
    }

    gender = (reference) => {
        switch (reference) {
            case 0:
                return "sexMale";

            case 1:
                return "sexFem";

            default:
                return null;
        }
    }

    shirtSize = (reference) => {
        switch (reference) {
            case 0:
            // M 36, L 40, XL 44, XXL 
                return "M (36\")";

            case 1:
                return "L (40\")";

            case 2:
                return "XL (44\")";

            case 3:
                return "XXL (48\")";

            default:
                return null;
        }
    }

    academicYear = (reference) => {
        switch (reference) {
            case 0:
                return "year1";

            case 1:
                return "year2";

            case 2:
                return "year3";

            case 3:
                return "year4";

            case 4:
                return "year5";

            case 5:
                return "year6";

            case 6:
                return "masterDegree";

            case 7:
                return "doctorateDegree";

            case 8:
                return "other";

            default:
                return null;
        }
    }

    status = (reference) => {
        switch (reference) {
            case 0:
                return "currentStudent";

            case 1:
                return "alumni";

            case 2:
                return "staff";

            case 3:
                return "faculty";

            default:
                return null;
        }
    }
}

export default I18.withNamespaces('profile')(PersonalInfo);
