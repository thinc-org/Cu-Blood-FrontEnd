import React from 'react'

export default class NoticeHeader extends React.Component {
    render() {
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-20 flex flex-col items-center md:items-start">
                    <span className="text-6xl font-bold mb-8 text-black">ข้อควรรู้</span>
                    <Subheader thai={"คุณสมบัติผู้บริจาคโลหิต"} english={"CHARACTERISTIC AND CRITERIA"} />
                    <Subheader thai={"ขั้นตอนการบริจาคโลหิตกับโครงการ"} english={"PROCEDURES"} />
                    <Subheader thai={"การเตรียมตัวก่อน-หลังบริจาคโลหิต"} english={"PRE-POST DONATION PREPARATION"} hasLineBreak={false} />
                </div>
            </div>
        );
    }
}


const Subheader = (props) => {
    const { thai, english, hasLineBreak = true } = props
    return (
        <div className="text-xl sm:text-2xl flex flex-col items-center text-center md:items-start md:text-left">
            <span className="">
                {thai}
            </span>
            <span className="text-pink-dark">
                {english}
            </span>
            <LineBreak hasLineBreak={hasLineBreak} />
        </div>
    )
}

const LineBreak = ({ hasLineBreak = true }) => {
    return hasLineBreak ?
        (
            <div className="border-solid border-grey my-6 mx-0 w-64" style={{ borderBottomWidth: '0.05rem' }}></div>
        )
        :
        (
            null
        )
}