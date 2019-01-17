import React, { Component } from 'react';
import Slider from 'react-slick';
import EventCard from './EventCard'
import Header from './PageHeader';

class EventContainer extends Component {
    constructor() {
        super();
        this.settings = {
            className: 'center',
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1400,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
            ]
        };
    }

    render() {
        return (
            <div className="bg-cb-grey-lighter w-full">
                <Header english="CALENDAR" thai="ปฏิทินกิจกรรม" borderColor="border-cb-red" englishColor="text-cb-red"/>
                <Slider {...this.settings}>
                    <EventCard id="1" />
                    <EventCard id="2" />
                    <EventCard id="3" />
                    <EventCard id="4" />
                    <EventCard id="5" />
                </Slider>   
            </div>
        );
    }
}

export default EventContainer;