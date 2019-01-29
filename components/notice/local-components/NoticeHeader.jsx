import React from 'react'

export default class NoticeHeader extends React.Component {
    render() {
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-20 text-center md:text-left" >
                    <div className="text-6xl font-bold mb-8 text-black">
                        ข้อควรรู้
                    </div>
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
        <div className="text-2xl ">
            <div className="">
                {thai}
            </div>
            <div className="text-pink-dark">
                {english}
            </div>
            <div className={`py-6 ${hasLineBreak ? `` : `hidden`}`} style={{width: '25rem'}}>
                <LineBreak hasLineBreak={hasLineBreak}/>
            </div>
        </div>
    )
}

const LineBreak = ({ hasLineBreak = true }) => {
    return hasLineBreak ?
        (
            <hr className="border-solid border-grey w-full " style={{ borderBottomWidth: '0.05rem'}} />
        )
        :
        (
            null
        )
}