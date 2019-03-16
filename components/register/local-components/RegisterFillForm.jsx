import React, { Component } from 'react';
import Form, { Selector, Input, FormGroup } from '@/shared-components/Form';
import map from 'lodash/map';
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n;

class RegisterFillForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
            username: "",
            usernameValid: false,
            password: "",
            passwordValid: false,
            confirmedPassword: "",
            confirmedPasswordValid: false,
            phoneNumber: "",
            phoneNumberValid: false,
            birthday: null,
            birthdayValid: false,
            weight: "",
            weightValid: false,
            // email: "",
            // emailValid: false,
            formErrors: {
                phoneNumber: "",
                birthday: "",
                weight: "",
                username: "",
                password: "",
                confirmedPassword: "",
                studentId: ""
            },
            address: "",
            firstName: "",
            lastName: "",
            nickname: "",
            gender: "",
            shirtSize: "",
            status: "",
            nationality: "",
            academicYear: "",
            studentId: "",
            studentIdValid: false,
            schoolId: "",
            medicalCondition: "",
            bloodType: "",
            rh: "",
            isDonated: false,
            isEnrolled: false,
            // accepted: false,
            moreThan3: false,
            requiresStudentlId: true,
            requiresYear: true,
        };
    }

    componentDidMount() {
        // autofill infi from context api
        if (!this.props.userInfo) return;
        let obj = {}
        let formErrors = {};
        for (const key in this.state) {
            if (key in this.props.userInfo && (key !== 'studentId' || this.props.userInfo[key] !== "" )) {
                let value = this.props.userInfo[key]
                if (key === "bloodType") {
                    obj.bloodType = Math.floor(value / 4);
                    obj.rh = obj.bloodType !== 4 ? value % 4 : 2;
                } else if (key === "birthday") {
                    obj.birthday = moment(value)
                } else {
                    obj[key] = value
                }
                const result = this.validate(key, this.props.userInfo[key])
                if (result) {
                    for (const errorKey in result.formErrors) {
                        const message = result.formErrors[errorKey];
                        if (message !== "") formErrors[errorKey] = message;
                    }
                    obj = Object.assign({}, obj, result, { formErrors });
                }
            } else if (key === "schoolId" && this.props.userInfo.school) {
                obj.schoolId = this.props.userInfo.school.id - 1;
            }
        }
        if (this.props.updateInfo) {
            obj.passwordValid = true;
            obj.confirmedPasswordValid = true;
        }
        if (this.props.userInfo.studentId === null) {
            obj.studentIdValid = true;
            obj.studentId = "";
        }
        if(this.props.userInfo.nationality === 1) {
            obj.moreThan3 = true;
        }
        this.setState(obj, this.validateForm)
    }

    handleChange = (e) => {
        const target = e.target;
        let name = target.name;
        let value = target.type === 'checkbox' ? target.checked : target.value
        // handle birthday
        const birthday = this.state.birthday;
        const now = moment()
        switch (name) {
            case "day":
                name = "birthday";
                value = moment().year(birthday ? birthday.year() : now.year()).month(birthday ? birthday.month() : now.month()).date(Number(value) + 1);
                break;
            case "month":
                name = "birthday";
                value = moment().year(birthday ? birthday.year() : now.year()).month(value).date(birthday ? birthday.date() : now.date());
                break;
            case "year":
                name = "birthday";
                value = moment().year(moment().year() - Number(value)).month(birthday ? birthday.month() : now.month()).date(birthday ? birthday.date() : now.date());
                break;
            default:
                break;
        }
        this.setState({ [name]: value },
            () => this.setState(this.validate(name, value), () => this.validateForm()))
    }

    validate = (name, value) => {
        let isValid = this.state[name + "Valid"]
        let formErrors = Object.assign({}, this.state.formErrors);
        switch (name) {
            // formErrors is a key that will be used by i18n
            case "password":
                const isMatched = value === this.state.confirmedPassword;
                isValid = value.length >= 8;
                formErrors.confirmedPassword = isMatched ? "" : 'passwordNotMatch';
                formErrors.password = isValid ? "" : 'passwordMustBeMoreThan8';
                return { "passwordValid": isValid, "confirmedPasswordValid": isMatched, "formErrors": formErrors };
            case "confirmedPassword":
                isValid = value === this.state.password;
                formErrors.confirmedPassword = isValid ? "" : 'passwordNotMatch';
                break;
            case "phoneNumber":
                isValid = (/^0[0-9]{9}$/i).test(value) ? true : false;
                formErrors.phoneNumber = isValid ? "" : 'phoneNumberIsNotCorrect';
                break;
            case "birthday":
                const end = moment(this.props.commonsData.endDate).add(7, 'days');
                const now = moment().add(7, 'days');
                const ageDiff = end.diff(now) > 0 ? end.diff(value, 'years') : now.diff(value, 'years')
                isValid = 17 <= ageDiff;
                formErrors.birthday = isValid ? "" : 'mustBeMoreThan17';
                break;
            case "weight":
                isValid = 45 <= value;
                formErrors.weight = isValid ? "" : 'pleaseSpecifyCorrectWeight';
                break;
            case "username":
                isValid = 20 < value;
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                isValid = re.test(value.toLowerCase());
                formErrors.username = isValid ? "" : 'emailNotCorrect';
                break;
            case "status":
                // alumni (options no.1) don't need school id
                let requiresStudentlId = true;
                let studentIdValid = this.state.studentIdValid;
                let studentId = this.state.studentId;
                let requiresYear = true;
                let academicYear = this.state.academicYear;
                if (value == 1 || value == 2 || value == 3) {
                    formErrors.studentId = ""
                    requiresStudentlId = false
                    studentIdValid = true;
                    studentId = ""
                } else {
                    studentIdValid = studentId && studentId.length === 10 ? true : false;
                }
                if (value != 0) {
                    requiresYear = false
                    academicYear = 8;
                }
                return { requiresStudentlId, studentIdValid, studentId, requiresYear, academicYear, formErrors };
            case "studentId":
                isValid = (this.props.userInfo && this.props.userInfo.status == 1 && this.state.status === "") || (value && value.length === 10 && Number(value) == value);
                formErrors.studentId = isValid ? "" : 'numberMustBe10Digit';
                break;
            default:
                return;
        }
        return { [name + "Valid"]: isValid, "formErrors": formErrors }
    }

    validateForm = () => {
        let isValid = (this.state.nationality == 0) || this.state.moreThan3;
        if (isValid) {
            for (const key in this.state) {
                if ((key.toString().includes('Valid') && key.toString() !== 'formValid' && this.state[key] === false) || (!this.state[key + 'Valid'] && this.state[key] === "")) {
                    isValid = false;
                    break;
                }
            }
        }
        this.setState({ formValid: isValid })
    }

    render() {
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en')
        const { onSubmit, isChulaId, commonsData, updateInfo, submitErrorMessage, t } = this.props;
        // const { onSubmit, isEmail, isChulaId, commonsData, updateInfo } = this.props; // leave isEmail for ldap implementation
        const inputClassName = `bg-cb-grey-light rounded-lg mt-2 px-4 py-4 font-cu-body`;
        return (
            <form onSubmit={onSubmit} className="layout-wide flex flex-col items-center justify-center pb-10 sm:py-10">
                <div>
                    <FormGroup text={t('userCredentials')}>
                        <Form text={t('email')} width="full" smWidth="full">
                            <Input disabled={updateInfo} value={this.state.username} onChange={this.handleChange} name="username" type="text" error={t(this.state.formErrors.username)} />
                        </Form>
                        <Form text={t('password')} width="full" smWidth="48">
                            <Input notRequired={updateInfo} value={this.state.password} onChange={this.handleChange} name="password" type="password" error={t(this.state.formErrors.password)} />
                        </Form>
                        <Form text={t('confirmPassword')} width="full" smWidth="48">
                            <Input notRequired={updateInfo} value={this.state.confirmedPassword} onChange={this.handleChange} name="confirmedPassword" type="password" error={t(this.state.formErrors.confirmedPassword)} />
                        </Form>
                    </FormGroup>
                    <FormGroup text={t('contactInfo')}>
                        {/* <Form text="อีเมลล์" width="full" smWidth="48">
                            <Input disabled={isEmail} value={this.state.email} onChange={this.handleChange} name="email" type="email" error={t(this.state.formErrors.email)} />
                        </Form> */}
                        <Form text={t('phoneNumber')} width="full" smWidth="48">
                            <Input value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber" type="text" error={t(this.state.formErrors.phoneNumber)} />
                        </Form>
                        <Form text={t('currentAddress')} width="full" smWidth="full">
                            <textarea value={this.state.address ? this.state.address : ""} onChange={this.handleChange} name="address" style={{ height: "100px", resize: "none" }} required className={`${inputClassName} w-full`} />
                        </Form>
                    </FormGroup>
                    <FormGroup text={t('basicInfo')}>
                        <Form text={t('name')} width="full" smWidth="48">
                            <Input value={this.state.firstName} onChange={this.handleChange} name="firstName" type="text" />
                        </Form>
                        <Form text={t('surname')} width="full" smWidth="48">
                            <Input value={this.state.lastName} onChange={this.handleChange} name="lastName" type="text" />
                        </Form>
                        <Form text={t('nickName')} width="full" smWidth="48">
                            <Input value={this.state.nickname} onChange={this.handleChange} name="nickname" type="text" />
                        </Form>
                        <Form text={t('birthDate')} width="full" smWidth="48">
                            <div className="flex">
                                <Selector isBirthday={true} value={this.state.birthday ? this.state.birthday.date() - 1 : ""} choices={createArrayOfDay(this.state.birthday ? this.state.birthday.daysInMonth() : moment().daysInMonth())} onChange={this.handleChange} name="day" />
                                <div className="w-5"></div>
                                <Selector isBirthday={true} value={this.state.birthday ? this.state.birthday.month() : ""} choices={moment.monthsShort()} onChange={this.handleChange} name="month" />
                                <div className="w-5"></div>
                                <Selector isBirthday={true} value={this.state.birthday ? moment().year() - this.state.birthday.year() : ""} choices={createArrayOfYear(moment().year())} onChange={this.handleChange} name="year" />
                            </div>
                            <span className="font-cu-body font-medium text-cb-red">{t(this.state.formErrors.birthday)}</span>
                        </Form>
                        <Form text={t('sex')} width="24">
                            <Selector value={this.state.gender} onChange={this.handleChange} name="gender" choices={[t('male'), t('female')]} />
                        </Form>
                        <Form text={t('shirtSize')} width="24">
                            <Selector value={this.state.shirtSize} onChange={this.handleChange} name="shirtSize" choices={['M (36")', 'L (40")', 'XL (44")', 'XXL (48")']} />
                        </Form>
                        <Form text={t('weight')} width="24">
                            <Input value={this.state.weight} onChange={this.handleChange} name="weight" type="text" error={t(this.state.formErrors.weight)} />
                        </Form>
                        <Form text={t('status')} width="24">
                            <Selector value={this.state.status} onChange={this.handleChange} name="status" choices={[t('currentChula'), t('alumni'), t('staff'), t('instructor')]} />
                        </Form>
                        <Form text={t('nationality')} width="24">
                            <Selector value={this.state.nationality} onChange={this.handleChange} name="nationality" choices={[t('thai'), t('foreigner')]} />
                        </Form>
                        <Form text={t('year')} width="24">
                            <Selector disabled={isChulaId || !this.state.requiresYear} value={this.state.academicYear} onChange={this.handleChange} name="academicYear" choices={['1', '2', '3', '4', '5', '6', t('masterDegree'), t('doctoralDegree'), t('others')]} />
                        </Form>
                        <Form text={t('id')} width="full" smWidth="48">
                            <Input disabled={isChulaId || !this.state.requiresStudentlId} value={this.state.studentId} onChange={this.handleChange} name="studentId" type="text" error={t(this.state.formErrors.studentId)} />
                        </Form>
                        <Form text={t('faculty')} width="full" smWidth="48">
                            <Selector disabled={isChulaId} value={this.state.schoolId} onChange={this.handleChange} name="schoolId" choices={map(commonsData.schools, i18n.language === 'th' ? 'nameTH' : 'nameEN')} />
                        </Form>
                    </FormGroup>
                    <FormGroup text={t('medicalInfo')}>
                        <Form text={t('congenitalDisease')} width="full" smWidth="full">
                            <textarea value={this.state.medicalCondition} onChange={this.handleChange} name="medicalCondition" style={{ height: "100px", resize: "none" }} className={`${inputClassName} w-full`} />
                        </Form>
                        <Form text={t('bloodType')} width="32" smWidth="48">
                            <Selector value={this.state.bloodType} onChange={this.handleChange} name="bloodType" choices={['A', 'B', 'O', 'AB', t('unknown')]} />
                        </Form>
                        <Form text="RH" width="32" smWidth="48">
                            <Selector value={this.state.rh} onChange={this.handleChange} name="rh" choices={['+', '-', t('unknown')]} />
                        </Form>
                        <div className="check">
                            <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                                <input checked={this.state.isDonated} onChange={this.handleChange} name="isDonated" type="checkbox" />
                                <div className="check-text flex">{t('haveYouEverDonatedBlood')}</div>
                            </label>
                            <DonatedWithCubloodCheckBox isEnrolled={this.state.isEnrolled} handleChange={this.handleChange} isDonated={this.state.isDonated} t={t} />
                        </div>
                    </FormGroup>
                    <div className="flex flex-col items-center justify-center mt-0 md:mt-6">
                        {/* <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                            <input checked={this.state.accepted} onChange={this.handleChange} name="accepted" required type="checkbox" />
                            <div className="check-text flex"><span>{t('accept1')}<a href="/notice" target="_blank" rel="noopener noreferrer" className="no-underline"><span className="text-cb-pink font-semibold">{t('accept2')}</span></a>{t('accept3')}<span className="text-cb-pink font-semibold">{t('accept4')}</span>.</span></div>
                        </label> */}
                        <LiveMoreThan3yearsCheckBox nationality={this.state.nationality} moreThan3={this.state.moreThan3} handleChange={this.handleChange} t={t} />
                        <button disabled={!this.state.formValid} className="px-10 pb-3 pt-4 text-white bg-cb-red rounded-lg btn font-cu-heading " type="submit" id="confirm" >{t(updateInfo ? "updateInfo" : "register")}</button>
                        <span className="font-cu-body font-medium text-cb-red mt-2">{t(submitErrorMessage)}</span>
                    </div>
                </div>
            </form>
        );
    }

}

const DonatedWithCubloodCheckBox = ({ isDonated, isEnrolled, handleChange, t }) => {
    return (
        isDonated ?
            (
                <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                    <input checked={isEnrolled} onChange={handleChange} name="isEnrolled" type="checkbox" />
                    <div className="check-text flex"><span>{t('donatedWithCUBlood1')}<br /><span className="text-cb-red font-semibold"> CU BLOOD</span>{t('donatedWithCUBlood2')}</span></div>
                </label>
            )
            :
            (
                null
            )
    )
}

const LiveMoreThan3yearsCheckBox = ({ nationality, moreThan3, handleChange, t }) => {
    return (
        (nationality == 1) ?
            (
                <label className="flex font-cu-heading text-fnormal cursor-pointer check-box">
                    <input checked={moreThan3} onChange={handleChange} name="moreThan3" required type="checkbox" />
                    <div className="check-text flex"><span>{t('liveMoreThan3Years')}</span></div>
                </label>
            )
            :
            (
                null
            )
    )
}

const createArrayOfDay = (maxDay) => {
    maxDay = maxDay ? maxDay : 31
    let array = new Array(maxDay);
    for (let i = 0; i < maxDay; i++) {
        array[i] = i + 1;
    }
    return array;
}

const createArrayOfYear = (targetYear) => {
    let array = new Array(100);
    for (let i = 0; i <= 99; i++) {
        array[i] = targetYear - i;
    }
    return array;
}

export default I18.withNamespaces('form')(RegisterFillForm);
