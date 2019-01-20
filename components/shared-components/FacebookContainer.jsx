import React from 'react';
import FacebookCard from './FacebookCard';
import FacebookButton from './FacebookButton'
import PageHeader from './PageHeader';
import axios from '@/core/core';
import map from 'lodash/map';


class FacebookZone extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async getData() {
        return await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3')
    }

    componentDidMount() {
        this.getData()
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
        .catch(console.log)
    }

    render() {
        const posts = this.state.posts;
        const title = map(posts, 'title');
        const body = map(posts, 'body');

        //Just a temp random number
        var randomNumber = Math.floor(Math.random()*3);

        // layout-wide
        return (
            <div id="root" className="flex flex-col items-center text-white" style={{ backgroundColor: '#8e9dc0' }}>
                <PageHeader borderColor="border-white" thaiColor="white" thai="CU Blood on Facebook" englishColor="text-grey-light text-xs" english="OUR ACTIVITY" />
                <div className="flex flex-col items-center lg:flex-row w-screen layout-wide" >
                    <FacebookCard title={title[0]} body={body[0]}/>
                    <FacebookCard title={title[1]} body={body[1]}/>
                    <FacebookCard title={title[2]} body={body[2]}/>
                </div>
                <div className="mb-10">
                    <FacebookButton />
                </div>
            </div>

        )
    }
}

export default FacebookZone;
