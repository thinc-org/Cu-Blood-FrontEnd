import React, {Component} from 'react';

class RegisterFillForm extends Component {
    render() {
        const inputClassName = `bg-cb-grey-light rounded-lg mt-2`;
        const maxWidth = {maxWidth: "26.5rem"};
        const titleClassName = "text-center w-full md:w-64 border-cb-grey-border md:border-r font-cu-heading text-2xl";
        const borderOnSmall = "border-cb-grey-border w-full border md:hidden my-2";
        const inputContainer = "w-full flex flex-col items-center md:items-start";

        return(
            <form className="layout-wide flex flex-col items-center justify-center py-10">
                <div>
                    {/* Personal Information */}
                    <div className="flex flex-col md:flex-row">
                        <div className={titleClassName}>ข้อมูลส่วนตัว</div>
                        <hr className={borderOnSmall}/>
                        <div className={inputContainer}>
                            {/* Top of Personal Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">ชื่อ</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text"/>                                
                                </div>
                                <div className="w-full sm:w-48">
                                    <div className="font-cu-body font-medium">นามสกุล</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text"/>  
                                </div>
                            </div>
                            {/* Bottom of Personal Information */}
                            <div className="w-full flex sm:flex-row mb-16 sm:mb-10 md:ml-10" style={maxWidth}>
                                <div className="mr-6 sm:mr-10 w-1/2 sm:w-48 sm:mb-0">
                                    <div className="font-cu-body font-medium">วัน/เดือน/ปี เกิด</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text"/>                                
                                </div>
                                <div className="w-1/2 sm:w-24"> 
                                    <div className="font-cu-body font-medium">เพศ</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text"/>  
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Medical Information */}
                    <div className="flex flex-col md:flex-row">
                        <div className={titleClassName}>ข้อมูลทางการแพทย์</div>
                        <hr className={borderOnSmall}/>
                        <div className={inputContainer}>
                            {/* Top of Medical Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 mb-6 sm:mb-0 w-1/2 sm:w-2/5">
                                    <div className="font-cu-body font-medium">หมู่เลือด</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text"/>                                
                                </div>
                                <div className="w-full">
                                    <div className="font-cu-body font-medium">โรคประจำตัว</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text"/>  
                                </div>
                            </div>
                            {/* Bottom of Medical Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-16 sm:mb-10 md:ml-10" style={maxWidth}>
                                <div className="w-full">
                                    <div className="font-cu-body font-medium">ประวัติการแพ้ยา</div>
                                    <textarea className={`${inputClassName} w-full h-32`} />                              
                                </div>
                            </div>
                        </div>                    
                    </div>
                    {/* User Information */}
                    <div className="flex flex-col md:flex-row">
                        <div className={titleClassName}>บัญชีผู้ใช้</div>
                        <hr className={borderOnSmall}/>
                        <div className={inputContainer}>
                            {/* Top of User Information */}
                            <div className="w-full flex flex-col sm:flex-row mb-6 md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">ที่อยู่</div>
                                    <input className={`${inputClassName} w-full h-8`} type="text"/>                                
                                </div>
                                <div className="w-full sm:w-48">
                                    <div className="font-cu-body font-medium">อีเมล</div>
                                    <input className={`${inputClassName} w-full h-8`} type="email"/>  
                                </div>
                            </div>
                            {/* Bottom of User Information */}
                            <div className="w-full flex flex-col sm:flex-row md:ml-10" style={maxWidth}>
                                <div className="sm:mr-10 w-full sm:w-48 mb-6 sm:mb-0">
                                    <div className="font-cu-body font-medium">รหัสผ่านใหม่</div>
                                    <input className={`${inputClassName} w-full h-8`} type="password"/>                                
                                </div>
                                <div className="w-full sm:w-48">
                                    <div className="font-cu-body font-medium">ยืนยันรหัสผ่าน</div>
                                    <input className={`${inputClassName} w-full h-8`} type="password"/>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-12">
                        <div className="flex items-center font-cu-heading text-normal">
                            <input style={{transform: "scale(1.5)"}} type="checkbox"/> 
                            <div className="ml-6 text-wrap">
                            I have <span className="text-cb-pink font-semibold">read the guide</span> and agreed to <span className="text-cb-pink font-semibold">Terms and Conditions</span>.    
                            </div>
                        </div>
                        <input className="px-10 py-3 text-white bg-cb-red rounded-lg mt-12" type="submit" value="ลงทะเบียน"/>
                    </div>                    
                </div>
            </form>
        );
    }
}

export default RegisterFillForm;