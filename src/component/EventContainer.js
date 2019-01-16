import React, { Component } from 'react';
// import Slider from 'react-slick';
import EventCard from './EventCard'

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
            <Slider {...this.settings}>
                <EventCard id="1" />
                <EventCard id="2" />
                <EventCard id="3" />
                <EventCard id="4" />
                <EventCard id="5" />
            </Slider>
        );
    }
}

export default EventContainer;