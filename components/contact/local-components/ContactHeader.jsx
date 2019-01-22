import React, {Component} from 'react';

class ContactHeader extends Component {
    render() {
        return(
            <div className="bg-cb-pink-light">
                <div className="layout-wide flex flex-col py-10 font-cu-heading" style={{maxWidth: "55rem"}}>
                    <div className="text-5xl font-black mb-10 w-full">ติดต่อเรา</div>
                    <div className="text-xl flex flex-col w-full">
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