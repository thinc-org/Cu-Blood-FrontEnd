import React from 'react';
import AboutHeader from './local-components/AboutHeader';
import PageHeader from '@/shared-components/PageHeader';

class About extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <PageHeader english="STAFFS" englishColor="text-pink" thai="บุคลากร" borderColor="border-red"/>
            </div>
        );
    }
}

export default About;