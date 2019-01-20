import React, {Component} from 'react';

class RegisterFillForm extends Component {
    render() {
        const inputClassName = `bg-cb-grey-light rounded-lg mt-2`

        return(
            <form className="layout-wide flex flex-col items-center justify-center py-10">
                <div>
                    {/* Personal Information */}
                    <div className="flex">
                        <div className="border-cb-grey-border border-r w-48 font-cu-heading text-2xl">ข้อมูลส่วนตัว</div>
                        <div className="flex flex-col">
                            {/* Top of Personal Information */}
                            <div className="flex mb-6 ml-10">
                                <div className="pr-10">
                                    <div className="font-cu-body font-medium">ชื่อ</div>
                                    <input className={`${inputClassName} w-48 h-8`} type="text"/>                                
                                </div>
                                <div>
                                    <div className="font-cu-body font-medium">นามสกุล</div>
                                    <input className={`${inputClassName} w-48 h-8`} type="text"/>  
                                </div>
                            </div>
                            {/* Bottom of Personal Information */}
                            <div className="flex mb-10 ml-10">
                                <div className="pr-10">
                                    <div className="font-cu-body font-medium">วัน/เดือน/ปี เกิด</div>
                                    <input className={`${inputClassName} w-48 h-8`} type="text"/>                                
                                </div>
                                <div>
                                    <div className="font-cu-body font-medium">เพศ</div>
                                    <input className={`${inputClassName} w-24 h-8`} type="text"/>  
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Medical Information */}
                    <div className="flex">
                        <div className="border-cb-grey-border border-r w-48 font-cu-heading text-2xl">ข้อมูลทางการแพทย์</div>
                        <div className="flex flex-col">
                            {/* Top of Medical Information */}
                            <div className="flex mb-6 ml-10">
                                <div className="pr-10">
                                    <div className="font-cu-body font-medium">หมู่เลือด</div>
                                    <input className={`${inputClassName} w-24 h-8`} type="text"/>                                
                                </div>
                                <div>
                                    <div className="font-cu-body font-medium">โรคประจำตัว</div>
                                    <input className={`${inputClassName} h-8`} style={{width: "288px"}} type="text"/>  
                                </div>
                            </div>
                            {/* Bottom of Medical Information */}
                            <div className="flex mb-10 ml-10">
                                <div className="pr-10">
                                    <div className="font-cu-body font-medium">ประวัติการแพ้ยา</div>
                                    <textarea className={`${inputClassName} h-32`} style={{width:"424px"}}/>                              
                                </div>
                            </div>
                        </div>                    
                    </div>
                    {/* User Information */}
                    <div className="flex">
                        <div className="border-cb-grey-border border-r w-48 font-cu-heading text-2xl">บัญชีผู้ใช้</div>
                        <div className="flex flex-col">
                            {/* Top of User Information */}
                            <div className="flex mb-6 ml-10">
                                <div className="pr-10">
                                    <div className="font-cu-body font-medium">ที่อยู่</div>
                                    <input className={`${inputClassName} w-48 h-8`} type="text"/>                                
                                </div>
                                <div>
                                    <div className="font-cu-body font-medium">อีเมล</div>
                                    <input className={`${inputClassName} w-48 h-8`} type="email"/>  
                                </div>
                            </div>
                            {/* Bottom of User Information */}
                            <div className="flex ml-10">
                                <div className="pr-10">
                                    <div className="font-cu-body font-medium">รหัสผ่านใหม่</div>
                                    <input className={`${inputClassName} w-48 h-8`} type="password"/>                                
                                </div>
                                <div>
                                    <div className="font-cu-body font-medium">ยืนยันรหัสผ่าน</div>
                                    <input className={`${inputClassName} w-48 h-8`} type="password"/>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center mt-12">
                        <div className="font-cu-heading text-normal">
                            <input style={{transform: "scale(1.5)"}} type="checkbox"/> 
                            <span className="ml-6">
                            I have <span className="text-cb-pink font-semibold">read the guide</span> and agreed to <span className="text-cb-pink font-semibold">Terms and Conditions</span>.    
                            </span>
                        </div>
                        <input className="px-10 py-3 text-white bg-cb-red rounded-lg mt-12" type="submit" value="ลงทะเบียน"/>
                    </div>                    
                </div>
            </form>
        );
    }
}

export default RegisterFillForm;