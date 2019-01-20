import React from 'react';

class AboutHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div id="AboutHeader" className=" flex flex-col items-center font-cu-heading bg-pink-lightest ">
                <div className="layout-wide text-5xl py-12 font-semibold" style={{maxWidth:"820px"}}>
                    <div>เกี่ยวกับเรา</div>
                </div>
                <div className="layout-wide flex justify-center">
                    <div className="text-xl pb-12" style={{maxWidth:"820px"}}>
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