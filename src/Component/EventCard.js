import React from 'react';

export default ({id}) => {

    let styles = {
        height: '250px',
        width: 'auto',
        minWidth: '450px',
    }
    return (
        <div className="flex shadow rounded bg-white m-4" style={styles}>
            <div className="bg-pink-lightest text-pink-dark p-6 font-cu-heading flex flex-col rounded-l">
                <span className="text-2xl font-bold  whitespace-no-wrap">06-08</span>
                <span className="text-sm hidden sm:block">มกราคม</span>
            </div>
            <div className="p-6 text-grey-darkest flex flex-col justify-between">
                <div>
                    <div className="text-2xl font-cu-heading">
                        ประกาศเปิดตัวเว็บไซต์ CU Blood โดย
                        Thinc. Development {id}
                    </div>
                    <div className="border-t border-black my-4"></div>
                    <p className="font-cu-body text-base" style={{textOverflow: 'ellipsis', overflow: 'hidden'}}>น็อคแบรนด์ รายชื่อเบอร์เกอร์บึ้มแอนด์บุญคุณ เทเลกราฟ
                        อัลบั้มบู๊วิลล์แฟนซีเทคโน แต๋วดยุคเต๊ะไหร่ คลับโบ้ยโมหจริต
                        โลชั่นแอนด์ เฟอร์นิเจอร์ นอมินี โบตั๋นเอ๋ เบอร์เกอร์ นาฏย
                        ศาลาสถาปัตย์ดีไซน์เนอร์
                    </p>
                </div>
                <span className="text-right font-cu-heading">อ่านต่อ</span>
            </div>
        </div>
    );
}