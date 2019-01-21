import React from 'react';
import FacebookCard from './FacebookCard';
import FacebookButton from './FacebookButton'
import PageHeader from './PageHeader';
import map from 'lodash/map';

class FacebookZone extends React.Component {

    render() {
        const { posts } = this.props;
        // const body = map(posts, 'message');
        // const pictureUrl = map(posts, 'full_picture');
        // const url = map(posts, 'permalink_url')

        // layout-wide
        return (
            <div className="" style={{ backgroundColor: '#8e9dc0' }}>
                <div className="flex flex-col items-center text-white layout-wide pb-10">
                    <PageHeader borderColor="border-white" thaiColor="white" thai="CU Blood on Facebook" englishColor="text-grey-light text-xs" english="OUR ACTIVITY" />
                    <div className="flex flex-col justify-between items-center md:items-stretch lg:flex-row w-full md:mb-10" >
                        <FacebookCard post={posts[0]} />
                        <FacebookCard post={posts[1]} />
                        <FacebookCard post={posts[2]} />
                    </div>
                    <FacebookButton />
                </div>
            </div>
        )
    }
}

export default FacebookZone;
