import React from 'react';
import AboutHeader from '@/about/local-components/AboutHeader';
import PageHeader from '@/shared-components/PageHeader';
import AboutCard from '@/about/local-components/AboutCard';
import Main from '$/main'

class About extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <PageHeader english="STAFFS" englishColor="text-pink" thai="บุคลากร" borderColor="border-red" />
                <div className="flex flex-col md:flex-row justify-center flex-wrap">
                    <AboutCard englishName="Boom" myRole="Front-end" picture="/static/logo/ios-globe.svg" />
                    <AboutCard englishName="New" myRole="Front-end" picture="/static/logo/ios-globe.svg" />
                    <AboutCard englishName="Poom" myRole="Front-end" picture="/static/logo/ios-globe.svg" />
                </div>
            </div>
        );
    }
}

export default About;