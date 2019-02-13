import React, {Component} from 'react'
import Header from '@/shared-components/TopicLeft'
import I18, { Link } from '@/core/i18n';

class UserLogin extends Component {

    render() {
        const { onSubmit, errorMessage, username, password, onChange, formValid, t} = this.props;
        return (
            <div>
                <Header borderColor="border-cb-red" english="LOGIN" thai="เข้าสู่ระบบ" englishColor="text-cb-pink" />
                <div className="text-red mb-4">{errorMessage}</div>
                <form onSubmit={onSubmit}>
                    <span className="font-cu-heading">อีเมล์</span>
                    <input autocomplete="new-username" className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10 p-6" value={username} onChange={onChange} type="text" name="username" />
                    <div className="flex justify-between">
                        <span className="font-cu-heading">รหัสผ่าน</span>
                        <span className="font-cu-heading font-semibold text-grey">ลืมรหัสผ่าน</span>
                    </div>
                    <input autocomplete="new-password" className="bg-cb-grey-light rounded-lg mt-2 w-full h-8 mb-10 p-6" value={password} onChange={onChange} type="password" name="password" />
                    <div className="flex flex-row justify-between items-center">
                        <Link href="/registerForm"><a className="no-underline"><span className="font-cu-heading text-grey underline">ลงทะเบียน</span></a></Link>
                        <button disabled={!formValid} type="submit" className="px-10 py-3 text-white bg-cb-pink rounded-lg btn" id="confirm">เข้าสู่ระบบ</button>
                    </div>
                </form>
            </div>
        );
    }
}


export default I18.withNamespaces('login')(UserLogin)
