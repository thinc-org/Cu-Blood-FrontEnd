import React, { Component } from 'react';
import axios from '@/core/core';
import moment from 'moment';

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
        };
    }

    componentDidMount() {
        const { id } = this.props;
        axios.get('/announcements/' + id)
            .then(response => response.data)
            .then(data => this.setState({ "data": data.result }))
            .catch(console.log)
    }

    render() {
        const ReactMarkdown = require('react-markdown')
        const { data } = this.state;
        return data ?
            (
                <div className="layout-narrow pt-8 pb-8 text-xl font-cu-body">
                    <span>{moment(data.createdAt).format('MMMM Do YYYY')}</span>
                    <h1 className="font-cu-heading font-bold text-3xl sm:text-5xl mb-3">{data.title}</h1>
                    <div className="flex flex-col items-center mb-5">
                        <img
                            alt="header image"
                            src={data.displayImage}
                            style={{
                                "height": "100%",
                                "maxHeight": "500px",
                                "maxWidth": "500px",
                                "width": "100%"
                            }}
                        />
                    </div>
                    <ReactMarkdown source={data.body} />
                </div >
            )
            :
            null
    }
}
