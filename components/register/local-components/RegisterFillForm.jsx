import React, { Component } from 'react';

class RegisterFillForm extends Component {
    render() {
        const inputClassName = `bg-cb-grey-light rounded-lg mt-2 p-2`;
        const maxWidth = { maxWidth: "26.5rem" };
        const titleClassName = "text-center w-full md:w-64 border-cb-grey-border md:border-r font-cu-heading text-2xl";
        const borderOnSmall = "border-cb-grey-border w-full border md:hidden my-2";
        const inputContainer = "w-full flex flex-col items-center md:items-start";
        const p0 = { padding: "0px" };

        return (
            <form className="layout-wide flex flex-col items-center justify-center py-10">
                <div>
                    {/* Contact Information */}
                    <div className="flex flex-col md:flex-row">
                        <div className={titleClassName}>ข้อมูลส่วนตัว</div>
                        <hr className={borderOnSmall} />
                        <div className={inputContainer}>
                            {/* Top of Contact Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">อีเมลล์</div>
                                    <input className={`${inputClassName} w-full h-8`} type="email" required />
                                </div>
                                <div className="w-full sm:w-48">
                                    <div className="font-cu-body font-medium">เบอร์โทรศัพท์</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text" required />
                                </div>
                            </div>
                            {/* Bottom of Contact Information */}
                            <div className="w-full flex sm:flex-row mb-16 sm:mb-10 md:ml-10" style={maxWidth}>
                                {/* <div className="mr-6 sm:mr-10 w-1/2 sm:w-48 sm:mb-0">
                                    <div className="font-cu-body font-medium">วัน/เดือน/ปี เกิด</div>
                                    <input className={`${inputClassName} w-full h-8`} placeholder="dd/mm/yyyy" type="text"/>                                
                                </div> */}
                                <div className="w-full">
                                    <div className="font-cu-body font-medium">ที่อยู่</div>
                                    <textarea className={`${inputClassName} w-full h-16`} />
                                    {/* <input className={`${inputClassName} w-full h-8`} type="text" required /> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Basic Information */}
                    <div className="flex flex-col md:flex-row">
                        <div className={titleClassName}>ข้อมูลทั่วไป</div>
                        <hr className={borderOnSmall} />
                        <div className={inputContainer}>
                            {/* Top of Basic Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                {/* <div className="sm:mr-10 mb-6 sm:mb-0 w-1/2 sm:w-2/5">
                                    <div className="font-cu-body font-medium">หมู่เลือด</div>
                                    <select className={`${inputClassName} w-full h-8`}>
                                        <option value="A">A</option>
                                        <option value="B">B</option>
                                        <option value="AB">AB</option>
                                        <option value="O">O</option>
                                    </select>
                                </div> */}
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">ชื่อ</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text" required />
                                </div>
                                <div className="w-full sm:w-48">
                                    <div className="font-cu-body font-medium">นามสกุล</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text" required />
                                </div>
                            </div>
                            {/* Bottom of Basic Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">ชื่อเล่น</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text" required />
                                </div>
                                <div className="w-1/2 sm:w-24">
                                    <div className="font-cu-body font-medium">เพศ</div>
                                    <select className={`${inputClassName} w-full h-8`} style={p0}>
                                        <option value="ชาย">ชาย</option>
                                        <option value="หญิง">หญิง</option>
                                    </select>
                                </div>
                                {/* <div className="w-full">
                                    <div className="font-cu-body font-medium">ประวัติการแพ้ยา</div>
                                    <textarea className={`${inputClassName} w-full h-32`} />
                                </div> */}
                            </div>
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                <div className="mr-6 sm:mr-10 w-1/2 sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">วัน/เดือน/ปี เกิด</div>
                                    <input className={`${inputClassName} w-full h-8`} type="date" />
                                </div>
                                <div className="w-1/2 sm:w-24">
                                    <div className="font-cu-body font-medium">ไซส์เสื้อ</div>
                                    <select className={`${inputClassName} w-full h-8`} style={p0}>
                                        <option value="ชาย">S</option>
                                        <option value="หญิง">M</option>
                                        <option value="หญิง">L</option>
                                    </select>
                                </div>
                            </div>
                            <div className="w-full flex flex-col sm:flex-row mb-16 sm:mb-10 md:ml-10" style={maxWidth}>
                                <div className="w-1/2 sm:w-24 md:mr-10">
                                    <div className="font-cu-body font-medium">น้ำหนัก</div>
                                    <input className={`${inputClassName} w-full h-8`} type="number" />
                                </div>
                                <div className="w-1/2 sm:w-24">
                                        <div className="font-cu-body font-medium">สถานภาพ</div>
                                        <select className={`${inputClassName} w-full h-8`} style={p0}>
                                            <option value="ชาย">นิสิตจุฬา</option>
                                            <option value="หญิง">นิสิตเก่า</option>
                                            <option value="หญิง">บุคลากร</option>
                                            <option value="หญิง">อาจารย์</option>
                                        </select>
                                    </div>
                            </div>
                        </div>
                    </div>
                    {/* User Information */}
                    <div className="flex flex-col md:flex-row">
                        <div className={titleClassName}>บัญชีผู้ใช้</div>
                        <hr className={borderOnSmall} />
                        <div className={inputContainer}>
                            {/* Top of User Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">ที่อยู่</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text" />
                                </div>
                                <div className="w-full sm:w-48">
                                    <div className="font-cu-body font-medium">อีเมล</div>
                                    <input className={`${inputClassName} w-full h-8`} type="email" required />
                                </div>
                            </div>
                            {/* Bottom of User Information */}
                            <div className="w-full flex flex-col sm:flex-row md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">รหัสผ่านใหม่</div>
                                    <input className={`${inputClassName} w-full h-8`} type="password" required />
                                </div>
                                <div className="w-full sm:w-48">
                                    <div className="font-cu-body font-medium">ยืนยันรหัสผ่าน</div>
                                    <input className={`${inputClassName} w-full h-8`} type="password" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-12">
                        <div className="flex items-center font-cu-heading text-normal">
                            <input style={{ transform: "scale(1.5)" }} type="checkbox" />
                            <div className="ml-6 text-wrap">
                                I have <span className="text-cb-pink font-semibold">read the guide</span> and agreed to <span className="text-cb-pink font-semibold">Terms and Conditions</span>.
                            </div>
                        </div>
                        <input className={`px-10 py-3 text-white bg-cb-red rounded-lg mt-12`} type="submit" value="ลงทะเบียน" id="confirm" />
                    </div>
                </div>
            </form>
        );
    }
}

export default RegisterFillForm;