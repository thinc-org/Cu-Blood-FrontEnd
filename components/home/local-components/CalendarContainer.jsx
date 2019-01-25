import React from 'react';
import PageHeader from '@/shared-components/PageHeader';
import map from 'lodash/map';

export default class CalendarContainer extends React.Component {

    render() {
        const { calendarEvents = [] } = this.props;
        const eventTitle = map(calendarEvents, 'title');
        return (
            <div className="bg-cb-pink-light">
                <div>
                    <PageHeader borderColor="border-cb-red" english="Calendar" thai="ปฏิทินกิจกรรม" englishColor="text-cb-pink" />
                    <MinorEvent title={eventTitle[234324]} />
                    {/* <LineBreak /> */}
                    <MinorEvent title={eventTitle[1]} />
                    {/* <LineBreak /> */}
                    <MinorEvent title={eventTitle[23324]} />
                    {/* <LineBreak /> */}
                    <MinorEvent title={eventTitle[3]} hasLineBreak={false}/>
                </div>
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

const LineBreak = ({hasLineBreak = true}) => {
    return hasLineBreak ?
        (
            <hr className="border-solid border-grey layout-wide" style={{ borderBottomWidth: '0.05rem' }} />
        )
        :
        (
            null
        )
}