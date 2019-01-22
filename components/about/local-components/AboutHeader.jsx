import React from 'react';

class AboutHeader extends React.Component {

    render() {
        return(
            <div className="bg-cb-pink-light">
                <div id="AboutHeader" className="layout-wide flex flex-col items-center font-cu-heading py-10">
                    <div className="text-5xl mb-10 font-semibold w-full" style={{maxWidth:"55rem"}}>
                        <div>เกี่ยวกับเรา</div>
                    </div>
                    <div className="text-xl w-full" style={{maxWidth:"55rem"}}>
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