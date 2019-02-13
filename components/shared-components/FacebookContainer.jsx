import React from 'react';
import FacebookCard from './FacebookCard';
import FacebookButton from './FacebookButton'
import PageHeader from './TopicCenter';

class FacebookZone extends React.Component {

    render() {
        const { posts } = this.props;
        return (
            <div className="" style={{ backgroundColor: '#8e9dc0' }} >
                <div className="flex flex-col items-center text-white layout-wide">
                    <FacebookApp posts={posts} />
                    <FacebookButton />
                </div>
            </div >
        )
    }
}

const FacebookApp = ({ posts }) => {
    return (posts ?
        (
            <React.Fragment>
                <PageHeader borderColor="border-white" thaiColor="white" thai="CU Blood on Facebook" englishColor="text-grey-light text-xs" english="OUR ACTIVITY" />
                <div className="flex flex-col justify-between items-center lg:items-stretch lg:flex-row w-full mb-3" >
                    <FacebookCard post={posts[0]} />
                    <FacebookCard post={posts[1]} />
                    <FacebookCard post={posts[2]} hasMarginBottom={false} />
                </div>
            </React.Fragment>
        ) : null
    );
}

export default FacebookZone;
