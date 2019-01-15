import React, {Component} from 'react';

class Statistic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container border-solid border-2 border-black flex flex-col items-center font-cu-heading">
                <div className="border-sold border-red-dark border-b-8 text-center mt-10 mb-10" >
                    <h2 className="text-lg mb-3 text-pink">STATISTICS</h2>
                    <h1 className="text-3xl mb-3">ข้อมูลทางสถิติ</h1> 
                </div>
                <div className="flex flex-wrap w-3/5 mb-10">
                    <div className="border-grey border-r border-b border-solid text-center w-1/2 pt-5 pb-10 pr-10 pl-10">
                        <h2 className="text-xl pb-10 text-5xl text-red-dark">2,593</h2>
                        <p className="text-2xl">ผู้ลงทะเบียนบริจาคเลือด ปี พ.ศ. 2561</p>
                    </div>
                    <div className="border-grey border-b border-solid text-center w-1/2 pt-5 pb-10 pr-10 pl-10">
                        <h2 className="text-xl pb-10 text-5xl text-red-dark">1,000</h2>
                        <p className="text-2xl">ชั่วโมงการทำงานของ Thinc. Development</p>
                    </div>
                    <div className="border-grey border-r border-solid text-center w-1/2 pt-10 pr-10 pl-10">
                        <h2 className="text-xl pb-10 text-5xl text-red-dark">3</h2>
                        <p className="text-2xl">ผู้มาเข้าร่วมประชุมตอนเก้าโมงเช้า</p>
                    </div>
                    <div className="text-center w-1/2 pt-10 pr-10 pl-10">
                        <h2 className="text-xl pb-10 text-5xl text-red-dark">555</h2>
                        <p className="text-2xl">ไม่มีไร ชอบเฉยๆ</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistic;