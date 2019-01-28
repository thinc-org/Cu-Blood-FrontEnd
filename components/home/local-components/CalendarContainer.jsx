import React from 'react';
import TopicCenter from '@/shared-components/TopicCenter';
import map from 'lodash/map';

export default class CalendarContainer extends React.Component {

    render() {
        const { calendarEvents = [] } = this.props;
        const eventTitle = map(calendarEvents, 'title');
        return (
            <div className="bg-cb-pink-light">
                <TopicCenter borderColor="border-cb-red" english="Calendar" thai="ปฏิทินกิจกรรม" englishColor="text-cb-pink" thaiColor="text-black"/>
                <MajorEvent />
                <MinorEvent title={eventTitle[1]} />
                <MinorEvent title={eventTitle[2]} />
                <MinorEvent title={eventTitle[3]} />
                <MinorEvent title={eventTitle[4]} hasLineBreak={false} />
            </div>
        );
    }
}

const MinorEvent = (props) => {
    const { title, hasLineBreak } = props;
    if (title) {
        return (
            <div className="layout-narrow">
                <div className="flex flex-row  font-cu-heading justify-start items-center py-5">
                    <div className="flex flex-col text-pink-dark items-start w-24" >
                        <div className="font-bold">
                            27
                        </div>
                        <div className="font-medium">
                            January
                        </div>
                    </div>
                    <div>
                        {title}
                    </div>
                </div>
                <LineBreak hasLineBreak={hasLineBreak} />
            </div>
        )
    } else {
        return (
            null
        )
    }
}



const MajorEvent = (props) => {
    return (
        <div className="layout-wide py-8">
            <div className="bg-white layout-narrow rounded-lg font-cu-heading text-3xl py-8 shadow-md " style={{ maxWidth: '800px', paddingLeft: '0', paddingRight: '0', }}>
                <div className="flex flex-row">
                    <div className="flex flex-col text-pink-dark px-8 flex-start">
                        <div className="font-bold">
                            27
                    </div>
                        <div className="font-medium">
                            January
                    </div>
                    </div>
                    <div className="flex flex-col pr-8 text-wrap">

                        ประกาศเปิดตัวเว็บไซต์ CU Blood โดย Thinc. Development
    
                    <div className="flex flex-row text-base pt-8">
                            <div className="w-1/2 text-pink-dark flex flex-row items-center ">
                                <img className="w-14 h-14 mr-4" src='/static/logo/greyClock.png' alt="clock"></img>
                                อาคาร 100 ปี คณะวิศวกรรมศาสตร์
                        </div>
                            <div className="w-1/2 text-grey-darker flex flex-row items-center">
                                <img className="w-14 h-14 mr-4" src='/static/logo/location.png' alt="clock"></img>
                                10.00 AM - 12.00 PM
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}



const LineBreak = ({ hasLineBreak = true }) => {
    return hasLineBreak ?
        (
            <hr className="border-solid border-grey layout-wide" style={{ borderBottomWidth: '0.05rem', maxWidth: '600px' }} />
        )
        :
        (
            null
        )
}