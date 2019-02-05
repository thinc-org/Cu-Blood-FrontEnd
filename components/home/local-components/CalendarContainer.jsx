import React from 'react';
import TopicCenter from '@/shared-components/TopicCenter';
import map from 'lodash/map';
import moment from 'moment';
import I18 from '@/core/i18n';


 class CalendarContainer extends React.Component {

    render() {
        const {t} = this.props;
        const { calendarEvents = [] } = this.props;
        const eventTitle = map(calendarEvents, 'title');
        const majorLocation = map(calendarEvents, 'location');
        const majorTime = map(calendarEvents, 'time');
        const startDate = map(calendarEvents, 'startDate');
        const endDate = map(calendarEvents, 'endDate');

        return (
            <div className="bg-cb-pink-light ">
                <div className="layout-wide">
                    <TopicCenter borderColor="border-cb-red" english={t("calendarHeaderSmall")} thai={t("calendarHeaderBig")} englishColor="text-cb-pink" thaiColor="text-black" />
                    <MajorEvent title={eventTitle[0]} location={majorLocation[0]} time={majorTime[0]} startDate={startDate[0]} endDate={endDate[0]} />
                    <MinorEvent title={eventTitle[1]} startDate={startDate[1]} endDate={endDate[1]} />
                    <MinorEvent title={eventTitle[2]} startDate={startDate[2]} endDate={endDate[2]} />
                    <MinorEvent title={eventTitle[3]} startDate={startDate[3]} endDate={endDate[3]} />
                    <MinorEvent title={eventTitle[4]} startDate={startDate[4]} endDate={endDate[4]} hasLineBreak={false} />
                </div>
            </div>
        );
    }
}

const MinorEvent = (props) => {
    const { title, hasLineBreak, startDate, endDate } = props;
    const startDay = moment(startDate).format('DD');
    const endDay = moment(endDate).format('DD');
    const startMonth = moment(startDate).format('MMMM');
    const endMonth = moment(endDate).format('MMMM');

    if (title && startDate && endDate) {
        return (
            <div className="layout-narrow">
                <div className="flex flex-col sm:flex-row font-cu-heading justify-start py-5">
                    <div className="flex flex-col text-pink-dark items-center" >
                        <CalendarDate startMonth={startMonth} endMonth={endMonth} startDay={startDay} endDay={endDay} />
                    </div>
                    <div className="flex flex-col text-wrap text-center sm:text-left items-center">
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
    const { title, location, time, startDate, endDate } = props;

    const startDay = moment(startDate).format('DD');
    const endDay = moment(endDate).format('DD');
    const startMonth = moment(startDate).format('MMMM');
    const endMonth = moment(endDate).format('MMMM');
    if (title && startDate && endDate) {

        return (
            <div className="bg-white layout-narrow rounded-lg font-cu-heading text-3xl py-8 shadow-md flex flex-col sm:flex-row" style={{ maxWidth: '800px', paddingLeft: '0', paddingRight: '0', marginBottom: '2rem', marginTop: '2rem' }}>
                    <CalendarDate startMonth={startMonth} endMonth={endMonth} startDay={startDay} endDay={endDay} />
                <div className="flex flex-col px-8 sm:px-0 sm:pr-8 text-wrap w-full ">
                    {title}
                    <div className="flex flex-col sm:flex-row text-base pt-4">
                        <div className="w-1/2 text-pink-dark flex flex-row items-center pb-4 sm:pb-0">
                            <img className="w-14 h-14 mr-4" src='/static/logo/location.png' alt="clock"></img>
                            {location}
                        </div>
                        <div className="w-1/2 text-grey-darker flex flex-row items-center">
                            <img className="w-14 h-14 mr-4" src='/static/logo/greyClock.png' alt="clock"></img>
                            Time
                            {time}
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            null
        )
    }
}



const LineBreak = ({ hasLineBreak = true }) => {
    return hasLineBreak ?
        (
            <hr className="border-solid border-grey w-full" style={{ borderBottomWidth: '0.05rem', maxWidth: '600px' }} />
        )
        :
        (
            null
        )
}

const CalendarDate = (props) => {
    const { startMonth, endMonth, startDay, endDay } = props;

    const isSameMonth = startMonth === endMonth;
    const isSameDay = startDay === endDay;

    return isSameMonth ?
        (
            <div className="flex flex-row sm:flex-col text-pink-dark px-8 flex-start mb-2 sm:mb-0">
                <div className="font-bold mr-4 sm:mr-0">
                    {(isSameDay) ? (startDay) : <div>{startDay}-{endDay}</div>}

                </div>
                <div className="font-medium">
                    {startMonth}
                </div>
            </div>
        )
        :
        (
            <div className="flex flex-row sm:flex-col text-pink-dark px-8 flex-start mb-2 sm:mb-0">
                <div className="font-bold mr-4 sm:mr-0">
                    {startDay}-{endDay}
                </div>
                <div className="font-medium">
                    {endMonth}
                </div>
            </div>
        )
}
export default I18.withNamespaces('index')(CalendarContainer);
