import React from 'react'
import Header from '@/shared-components/TopicLeft'
import { Link } from '@/core/i18n';

export default ({onSubmit}) => {
    return (
        <div>
            <Header borderColor="border-cb-red" english="LOGIN" thai="เข้าสู่ระบบ" englishColor="text-cb-pink" />
            <form onSubmit={onSubmit}>
                <span className="font-cu-heading">บัญชีผู้ใช้งาน</span>
                <input className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10 p-6" type="text" name="username"/>
                <div className="flex justify-between">
                    <span className="font-cu-heading">รหัสผ่าน</span>
                    <span  className="font-cu-heading font-semibold text-grey">ลืมรหัสผ่าน</span>
                </div>
                <input className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10 p-6" type="password" name="password"/>
                <div className="flex flex-row justify-between items-center">
                    <Link href="/registerForm"><span className="font-cu-heading text-grey underline">ลงทะเบียน</span></Link>
                    <button type="submit" className="px-10 py-3 text-white bg-cb-pink rounded-lg" id="confirm">เข้าสู่ระบบ</button>
                </div>
            </form>
        </div>
    );
}