import React from 'react';
import PageHeader from '@/shared-components/PageHeader'

export default class CalendarContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div className="bg-cb-pink-light">
                <PageHeader borderColor="border-cb-red" english="Calendar" thai="ปฏิทินกิจกรรม" englishColor="text-cb-pink" />
                <MinorEvent title='โครงการ I wish I knew before I graduated'/>
                <LineBreak />
                <MinorEvent title='Hello World'/>
            </div>
        );
    }
}

const MinorEvent = (props) => {
    return (
        <div>
            <div className="flex flex-row layout-wide font-cu-heading justify-start items-center py-5">
                <div className="flex flex-col text-pink-dark items-start w-24" >
                    <div className="font-bold">
                        27
                    </div>
                    <div className="font-medium">
                        January
                    </div>
                </div>
                <div>
                    {props.title}
                </div>
            </div>
        </div>
    )
}

const LineBreak = () => {
    return(
        <hr className="border-solid border-grey layout-wide" style={{borderBottomWidth: '0.05rem'}}/>
    )
}