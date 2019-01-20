import React from 'react';

class AboutHeader extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return(
            <div id="AboutHeader" className="flex flex-col items-center font-cu-heading bg-pink-lightest ">
                <div className="w-2/3 text-5xl py-12 font-semibold ">
                    เกี่ยวกับเรา
                </div>
                <div className="w-2/3">
                    <div className="md:w-3/4 text-xl pb-12 w-full">
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