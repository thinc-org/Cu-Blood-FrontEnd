import React, { Component } from 'react';
import Form, { Selector, Input, FormGroup } from '@/shared-components/Form';

class RegisterFillForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
            phoneNumber: "",
            phoneNumberValid: false,
            formErrors: {phoneNumber: ""},
        };
    }

    handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
            () => this.validate(name, value))
    } 

    validate = (name, value) => {
        let isValid = this.state[name]
        let formErrors = Object.assign({}, this.state.formErrors);
        switch(name) {
            case "phoneNumber":
                isValid = (/^0[0-9]{9}$/i).test(value) ? true : false;
                formErrors.phoneNumber = isValid ? "" : "เลขโทรศัพท์ไม่ถูกต้อง";
                break;
            default:
                return;
        }
        // console.log(formErrors)
        this.setState({[name + "Valid"]: isValid, "formErrors": formErrors}, () => this.validateForm())
    }

    validateForm = () => {
        let isValid = true;
        for(const key in this.state) {
            if(key.toString().includes('Valid') && key.toString() !== 'formValid' && this.state[key] === false) {
                isValid = false;
                break;
            }
        }
        this.setState({formValid : isValid}, () => console.log(this.state))
    }

    render() {
        const inputClassName = `bg-cb-grey-light rounded-lg mt-2 p-2`;
        return (
            <form className="layout-wide flex flex-col items-center justify-center pb-10 sm:py-10">
                <div>
                    <FormGroup text="ข้อมูลติดต่อ">
                        <Form text="อีเมลล์" width="full" smWidth="48">
                            <Input type="email" />
                        </Form>
                        <Form text="เบอร์โทรศัพท์" width="full" smWidth="48">
                            <Input value={this.state.phone} onChange={this.handleChange} type="text" name="phoneNumber" error={this.state.formErrors.phoneNumber} />
                        </Form>
                        <Form text="ที่อยู่" width="full">
                            <textarea required className={`${inputClassName} w-full h-16`} />
                        </Form>
                    </FormGroup>
                    <FormGroup text="ข้อมูลทั่วไป">
                        <Form text="ชื่อ" width="full" smWidth="48">
                            <Input type="text" />
                        </Form>
                        <Form text="นามสกุล" width="full" smWidth="48">
                            <Input type="text" />
                        </Form>
                        <Form text="ชื่อเล่น" width="full" smWidth="48">
                            <Input type="text" />
                        </Form>
                        <Form text="วัน/เดือน/ปี เกิด" width="full" smWidth="48">
                            <Input type="date" />
                        </Form>
                        <Form text="เพศ" width="24">
                            <Selector choices={['ชาย', 'หญิง']} />
                        </Form>
                        <Form text="ไซส์เสื้อ" width="24">
                            <Selector choices={['M (38")', 'L (40")', 'XL (42")', 'XXL (44")']} />
                        </Form>
                        <Form text="น้ำหนัก" width="24">
                            <Input type="number" />
                        </Form>
                        <Form text="สถานภาพ" width="24">
                            <Selector choices={['นิสิตจุฬา', 'นิสิตเก่า', 'บุคลากร', 'อาจารย์']} />
                        </Form>
                        <Form text="สัญชาติ" width="24">
                            <Selector choices={['ไทย', 'ต่างชาติ']} />
                        </Form>
                        <Form text="ชั้นปี" width="24">
                            <Selector choices={['1', '2', '3', '4', '5', '6', "ปริญญาโท", 'ปริญญาเอก', 'อื่นๆ']} />
                        </Form>
                        <Form text="รหัสนิสิต" width="full" smWidth="48">
                            <Input type="text" />
                        </Form>
                        <Form text="คณะ" width="full" smWidth="48">
                            <Selector choices={
                                ['คณะวิศวกรรมศาสตร์', 'คณะพาณิชยศาสตร์และการบัญชี', 'คณะวิทยาศาสตร์', 'คณะครุศาสตร์',
                                    'คณะสหเวชศาสตร์ ', 'คณะอักษรศาสตร์', "คณะเภสัชศาสตร์", 'คณะเศรษฐศาสตร์', 'คณะทันตแพทยศาสตร์',
                                    'คณะรัฐศาสตร์', 'คณะนิเทศศาสตร์', 'คณะจิตวิทยา', 'คณะนิติศาสตร์', 'คณะพยาบาลศาสตร์',
                                    'คณะแพทยศาสตร์', 'คณะศิลปกรรมศาสตร์', 'คณะสถาปัตยกรรมศาสตร์', 'คณะสัตวแพทยศาสตร์',
                                    'คณะวิทยาศาสตร์การกีฬา', 'วิทยาลัยวิทยาศาสตร์สาธารณสุข', 'บัณฑิตวิทยาลัย', 'สำนักวิชาทรัพยากรการเกษตร', 'อื่นๆ']
                            } />
                        </Form>
                    </FormGroup>
                    <FormGroup text="ข้อมูลทางการแพทย์">
                        <Form text="โรคประจำตัว" width="full">
                            <textarea className={`${inputClassName} w-full h-16`} />
                        </Form>
                        <Form text="หมู่เลือด" width="32" smWidth="48">
                            <Selector choices={['A', 'B', 'O', 'AB']} />
                        </Form>
                        <Form text="RH" width="32" smWidth="48">
                            <Selector choices={['+', '-']} />
                        </Form>
                        <div className="check">
                            <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                                <input type="checkbox" />
                                <div className="check-text flex">ท่านเคยบริจาคโลหิตมาก่อนหรือไม่</div>
                            </label>
                            <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                                <input type="checkbox" />
                                <div className="check-text flex"><span>ท่านเคยเข้าร่วมบริจาคโลหิตกับโครงการ <br/><span className="text-cb-red font-semibold">CU BLOOD</span> มาก่อนหรือไม่</span></div>
                            </label>
                        </div>
                    </FormGroup>
                    <div className="flex flex-col items-center justify-center mt-6 md:mt-12">
                        <label className="flex font-cu-heading text-normal cursor-pointer check-box">
                            <input required type="checkbox" />
                            <div className="check-text flex"><span>I have <a href="https://google.com" target="_blank" rel="noopener noreferrer" className="no-underline"><span className="text-cb-pink font-semibold">read the guide</span></a> and agreed to <span className="text-cb-pink font-semibold">Terms and Conditions</span>.</span></div>
                        </label>
                        <button disabled={!this.state.formValid} className="px-10 py-3 text-white bg-cb-red rounded-lg mt-6 btn" type="submit" id="confirm" >ลงทะเบียน</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default RegisterFillForm;