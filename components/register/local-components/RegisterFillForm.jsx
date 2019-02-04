import React, { Component } from 'react';
import Form, { Selector, Input, FormGroup } from '@/shared-components/Form';

class RegisterFillForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
            phoneNumber: "",
            phoneNumberValid: false,
            birthday: "",
            birthdayValid: false,
            weight: "",
            weightValid: false,
            email: "",
            emailValid: false,
            formErrors: { phoneNumber: "", birthday: "", weight: "", email: "" },
            address: "",
            firstName: "",
            lastName: "",
            nickname: "",
            gender: "",
            shirtSize: "",
            status: "",
            nationality: "",
            academicYear: "",
            school: "",
            bloodType: "",
            rh: "",
            isDonated: false,
            accepted: false,
            moreThan3: false,
        };
    }

    componentDidMount() {
        if (!this.props.userInfo) return;
        console.log(this.props)
        let obj = {}
        let formErrors = {};
        for (const key in this.state) {
            if (key in this.props.userInfo) {
                obj[key] = this.props.userInfo[key]
                const result = this.validate(key, this.props.userInfo[key])
                if (result) {
                    for (const errorKey in result.formErrors) {
                        const message = result.formErrors[errorKey];
                        if (message !== "") formErrors[errorKey] = message;
                    }
                    obj = Object.assign({}, obj, result, { formErrors });
                }
            }
        }
        this.setState(obj)
    }

    handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value
        this.setState({ [name]: value },
            () => this.setState(this.validate(name, value), () => this.validateForm()))
    }

    validate = (name, value) => {
        let isValid = this.state[name + "Valid"]
        let formErrors = Object.assign({}, this.state.formErrors);
        switch (name) {
            case "phoneNumber":
                isValid = (/^0[0-9]{9}$/i).test(value) ? true : false;
                formErrors.phoneNumber = isValid ? "" : "เลขโทรศัพท์ไม่ถูกต้อง";
                break;
            case "birthday":
                const end = new Date(this.props.endDate);
                const endAge = new Date(end.getFullYear(), end.getMonth(), end.getDate() + 3).getTime() // three day as failsafe from actual date
                const nowAge = Date.now();
                const ageDifMs = ((endAge - nowAge > 0) ? endAge : nowAge) - new Date(value).getTime();
                const ageDate = new Date(ageDifMs); // miliseconds from epoch
                isValid = 17 <= Math.abs(ageDate.getUTCFullYear() - 1970);
                formErrors.birthday = isValid ? "" : "คุณต้องมีอายุมากกว่า 17 ปี ในวันที่บริจาคเลือด";
                break;
            case "weight":
                isValid = 20 < value;
                formErrors.weight = isValid ? "" : "กรุณากรอกน้ำหนักให้ถูกต้อง";
                break;
            case "email":
                isValid = 20 < value;
                const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                isValid = re.test(value.toLowerCase());
                formErrors.email = isValid ? "" : "อีเมลล์ของคุณไม่ถูกต้อง";
                break;
            default:
                return;
        }
        return { [name + "Valid"]: isValid, "formErrors": formErrors }
    }

    validateForm = () => {
        let isValid = this.state.accepted && ((this.state.nationality == 0) || this.state.moreThan3);
        if (isValid) {
            for (const key in this.state) {
                if ((key.toString().includes('Valid') && key.toString() !== 'formValid' && this.state[key] === false) || this.state[key] === "") {
                    isValid = false;
                    break;
                }
            }
        }
        this.setState({ formValid: isValid }, () => console.log(this.state))
    }

    render() {
        const { onSubmit, isEmail, isChulaId } = this.props;
        const inputClassName = `bg-cb-grey-light rounded-lg mt-2 p-2`;
        return (
            <form onSubmit={onSubmit} className="layout-wide flex flex-col items-center justify-center pb-10 sm:py-10">
                <div>
                    <FormGroup text="ข้อมูลติดต่อ">
                        <Form text="อีเมลล์" width="full" smWidth="48">
                            <Input disabled={isEmail} value={this.state.email} onChange={this.handleChange} name="email" type="email" error={this.state.formErrors.email} />
                        </Form>
                        <Form text="เบอร์โทรศัพท์" width="full" smWidth="48">
                            <Input value={this.state.phoneNumber} onChange={this.handleChange} name="phoneNumber" type="text" error={this.state.formErrors.phoneNumber} />
                        </Form>
                        <Form text="ที่อยู่" width="full">
                            <textarea value={this.state.address ? this.state.address : ""} onChange={this.handleChange} name="address" required className={`${inputClassName} w-full h-16`} />
                        </Form>
                    </FormGroup>
                    <FormGroup text="ข้อมูลทั่วไป">
                        <Form text="ชื่อ" width="full" smWidth="48">
                            <Input value={this.state.firstName} onChange={this.handleChange} name="firstName" type="text" />
                        </Form>
                        <Form text="นามสกุล" width="full" smWidth="48">
                            <Input value={this.state.lastName} onChange={this.handleChange} name="lastName" type="text" />
                        </Form>
                        <Form text="ชื่อเล่น" width="full" smWidth="48">
                            <Input value={this.state.nickname} onChange={this.handleChange} name="nickname" type="text" />
                        </Form>
                        <Form text="วัน/เดือน/ปี เกิด" width="full" smWidth="48">
                            <Input value={this.state.birthday} onChange={this.handleChange} name="birthday" type="date" error={this.state.formErrors.birthday} />
                        </Form>
                        <Form text="เพศ" width="24">
                            <Selector value={this.state.gender} onChange={this.handleChange} name="gender" choices={['ชาย', 'หญิง']} />
                        </Form>
                        <Form text="ไซส์เสื้อ" width="24">
                            <Selector value={this.state.shirtSize} onChange={this.handleChange} name="shirtSize" choices={['M (38")', 'L (40")', 'XL (42")', 'XXL (44")']} />
                        </Form>
                        <Form text="น้ำหนัก" width="24">
                            <Input value={this.state.weight} onChange={this.handleChange} name="weight" type="number" error={this.state.formErrors.weight} />
                        </Form>
                        <Form text="สถานภาพ" width="24">
                            <Selector value={this.state.status} onChange={this.handleChange} name="status" choices={['นิสิตจุฬา', 'นิสิตเก่า', 'บุคลากร', 'อาจารย์']} />
                        </Form>
                        <Form text="สัญชาติ" width="24">
                            <Selector value={this.state.nationality} onChange={this.handleChange} name="nationality" choices={['ไทย', 'ต่างชาติ']} />
                        </Form>
                        <Form text="ชั้นปี" width="24">
                            <Selector disabled={isChulaId} value={this.state.academicYear} onChange={this.handleChange} name="academicYear" choices={['1', '2', '3', '4', '5', '6', "ปริญญาโท", 'ปริญญาเอก', 'อื่นๆ']} />
                        </Form>
                        <Form text="รหัสนิสิต" width="full" smWidth="48">
                            <Input disabled={isChulaId} name="studentId" type="text" />
                        </Form>
                        <Form text="คณะ" width="full" smWidth="48">
                            <Selector disabled={isChulaId} value={this.state.school} onChange={this.handleChange} name="school" choices={
                                ['คณะวิศวกรรมศาสตร์', 'คณะพาณิชยศาสตร์และการบัญชี', 'คณะวิทยาศาสตร์', 'คณะครุศาสตร์',
                                    'คณะสหเวชศาสตร์ ', 'คณะอักษรศาสตร์', "คณะเภสัชศาสตร์", 'คณะเศรษฐศาสตร์', 'คณะทันตแพทยศาสตร์',
                                    'คณะรัฐศาสตร์', 'คณะนิเทศศาสตร์', 'คณะจิตวิทยา', 'คณะนิติศาสตร์', 'คณะพยาบาลศาสตร์',
                                    'คณะแพทยศาสตร์', 'คณะศิลปกรรมศาสตร์', 'คณะสถาปัตยกรรมศาสตร์', 'คณะสัตวแพทยศาสตร์',
                                    'คณะวิทยาศาสตร์การกีฬา', 'วิทยาลัยวิทยาศาสตร์สาธารณสุข', 'บัณฑิตวิทยาลัย', 'สำนักวิชาทรัพยากรการเกษตร', 'อื่นๆ']
                            } />
                        </Form>
                    </FormGroup>
                    <FormGroup text="ข้อมูลทางการแพทย์">
                        <Form text="โรคประจำตัว (ถ้ามี)" width="full">
                            <textarea name="medicalCondition" className={`${inputClassName} w-full h-16`} />
                            {/* not required == no state */}
                        </Form>
                        <Form text="หมู่เลือด" width="32" smWidth="48">
                            <Selector value={this.state.bloodType} onChange={this.handleChange} name="bloodType" choices={['A', 'B', 'O', 'AB']} />
                        </Form>
                        <Form text="RH" width="32" smWidth="48">
                            <Selector value={this.state.rh} onChange={this.handleChange} name="rh" choices={['+', '-']} />
                        </Form>
                        <div className="check">
                            <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                                <input checked={this.state.isDonated} onChange={this.handleChange} name="isDonated" type="checkbox" />
                                <div className="check-text flex">ท่านเคยบริจาคโลหิตมาก่อนหรือไม่</div>
                            </label>
                            <DonatedWithCubloodCheckBox isDonated={this.state.isDonated} />
                            <LiveMoreThan3yearsCheckBox nationality={this.state.nationality} moreThan={this.state.moreThan3} handleChange={this.handleChange} />
                        </div>
                    </FormGroup>
                    <div className="flex flex-col items-center justify-center mt-6 md:mt-12">
                        <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                            <input checked={this.state.accepted} onChange={this.handleChange} name="accepted" required type="checkbox" />
                            <div className="check-text flex"><span>I have <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="no-underline"><span className="text-cb-pink font-semibold">read the guide</span></a> and agreed to <span className="text-cb-pink font-semibold">Terms and Conditions</span>.</span></div>
                        </label>
                        <button disabled={!this.state.formValid} className="px-10 py-3 text-white bg-cb-red rounded-lg mt-6 btn" type="submit" id="confirm" >ลงทะเบียน</button>
                    </div>
                </div>
            </form>
        );
    }

}

const DonatedWithCubloodCheckBox = ({ isDonated }) => {
    return (
        isDonated ?
            (
                <label className="flex font-cu-heading text-fnormal cursor-pointer check-box">
                    <input name="isDonated" type="checkbox" />
                    <div className="check-text flex"><span>ท่านเคยเข้าร่วมบริจาคโลหิตกับโครงการ <br /><span className="text-cb-red font-semibold">CU BLOOD</span> มาก่อนหรือไม่</span></div>
                </label>
            )
            :
            (
                null
            )
    )
}

const LiveMoreThan3yearsCheckBox = ({ nationality, moreThan3, handleChange }) => {
    return (
        (nationality == 1) ?
            (
                <label className="flex font-cu-heading text-fnormal cursor-pointer check-box">
                    <input checked={moreThan3} onChange={handleChange} name="moreThan3" required type="checkbox" />
                    <div className="check-text flex"><span>ท่านพำนักอยู่ในประเทศไทยมามากกว่า 3 ปีหรือไม่่ (เฉพาะคนต่างชาติ)</span></div>
                </label>
            )
            :
            (
                null
            )
    )
}

export default RegisterFillForm;