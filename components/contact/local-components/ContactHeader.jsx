import React, {Component} from 'react';

class ContactHeader extends Component {
    render() {
        return(
            <div className="bg-cb-pink-light">
                <div className="layout-wide flex flex-col py-16 font-cu-heading text-center md:text-left">
                    <div className="text-6xl font-black mb-6">ติดต่อเรา</div>
                    <div className="text-3xl flex flex-col text-grey-darkest">
                        <div className="font-semibold">จุฬาลงกรณ์มหาวิทยาลัย</div>
                        <div>254 ถนนพญาไท แขวงวังใหม่ เขตปทุมวัน</div>
                        <div>กรุงเทพ 10330</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactHeader;