import React from 'react';

class AboutHeader extends React.Component {

    render() {
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-20 text-center md:text-left" >
                    <div className="text-6xl font-bold mb-6 text-black">
                        เกี่ยวกับเรา
                    </div>
                    <div className="text-3xl text-grey-darkest" >
                        CU Blood  เป็นโครงการเพื่อรณรงค์ให้นิสิตปัจจุบัน
                        นิสิตเก่า บุคลากรและคณาจารย์ จากจุฬาล
                        งกรณ์มหาวิทยาลัยร่วมกันไปรจากโลหิตกับสภากาชาดไทย 
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutHeader;
