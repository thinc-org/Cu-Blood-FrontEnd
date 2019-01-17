import React from 'react';
import Arrow from '../asset/homePage/forward-arrow2.png';

export default ({id}) => {

    let styles = {
        height: '275px',
        width: 'auto',
    }

    


    return (
        <div className="flex flex-row shadow-lg bg-white m-4 " style={{borderRadius: '1rem', width: '30rem'}}>
            <div className="bg-cb-pink-light text-cb-pink p-6 font-cu-heading flex flex-col " style={{borderTopLeftRadius: '1rem', borderBottomLeftRadius: '1rem'}} >
                <span className="text-3xl font-bold  whitespace-no-wrap">06-08</span>
                <span className="text-sm">มกราคม</span>
            </div>
            <div className="p-6 text-grey-darkest flex flex-col justify-between truncate float-none"  style={styles}>
                <div>
                    <div className="text-2xl font-cu-heading whitespace-normal font-bold">
                        ประกาศเปิดตัวเว็บไซต์ CU Blood โดย
                        Thinc. Development {id}
                    </div>
                    <div className="border-t border-black my-4"></div>
                    <p className="font-cu-body truncate text-xl text-cu-body pt-6" 
                        style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>
                        น็อคแบรนด์ รายชื่อเบอร์เกอร์บึ้มแอนด์บุญคุณ เทเลกราฟ
                        อัลบั้มบู๊วิลล์แฟนซีเทคโน แต๋วดยุคเต๊ะไหร่ คลับโบ้ยโมหจริต
                        โลชั่นแอนด์ เฟอร์นิเจอร์ นอมินี โบตั๋นเอ๋ เบอร์เกอร์ นาฏย
                        ศาลาสถาปัตย์ดีไซน์เนอร์
                    </p>
                </div>
                <div className="flex justify-end items-start">
                    <span className="text-right font-cu-heading mr-3 font-semibold">อ่านต่อ</span>
                    <img alt="arrow forward" className="w-6" src={Arrow}/>
                </div>
            </div>
        </div>
    );
}