import React from 'react';
import FacebookCard from './FacebookCard';
import FacebookButton from './FacebookButton'
import PageHeader from './PageHeader';
import map from 'lodash/map';

class FacebookZone extends React.Component {

    render() {
        const {posts} = this.props;
        const title = map(posts, 'title');
        const body = map(posts, 'body');

        // layout-wide
        return (
            <div id="root" className="layout-wide flex flex-col items-center text-white" style={{ backgroundColor: '#8e9dc0' }}>
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
