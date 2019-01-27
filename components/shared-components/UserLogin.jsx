import React from 'react'
import Header from '@/shared-components/TopicLeft'

export default () => {
    return (
        <div>
            <Header borderColor="border-cb-red" english="LOGIN" thai="เข้าสู่ระบบ" englishColor="text-cb-pink" />
            <form>
                <span className="font-cu-heading font-bold">บัญชีผู้ใช้งาน</span>
                <input className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10" type="text"/>
                <div className="flex justify-between">
                    <span className="font-cu-heading font-bold">รหัสผ่าน</span>
                    <span  className="font-cu-heading font-semibold text-grey">ลืมรหัสผ่าน</span>
                </div>
                <input className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10" type="password"/>
                <div className="flex flex-row justify-between items-center">
                    <span className="font-cu-heading font-bold text-grey underline">ลงทะเบียน</span>
                    <input type="submit" className="px-10 py-3 text-white bg-cb-pink rounded-lg" value="เข้าสู่ระบบ" id="confirm"/>
                </div>
            </form>
        </div>
    );
}