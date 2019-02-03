import React from 'react';
import AboutHeader from '@/about/local-components/AboutHeader';
import PageHeader from '@/shared-components/TopicCenter';
import AboutCard from '@/about/local-components/AboutCard';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import AboutContent from '@/about/local-components/AboutContent';

class About extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <AboutContent/>
                <PageHeader english="STAFFS" englishColor="text-pink" thai="บุคลากร" borderColor="border-red" />
                <div className="layout-wide flex flex-wrap flex-row justify-center pb-10">
                    <AboutCard englishName="Boom" myRole="Front-end" picture="/static/logo/ios-globe.svg" />
                    <AboutCard englishName="New" myRole="Front-end" picture="/static/logo/ios-globe.svg" />
                    <AboutCard englishName="Poom" myRole="Front-end" picture="/static/logo/ios-globe.svg" />
                    <AboutCard englishName="Five" myRole="Consultant" picture="/static/logo/ios-globe.svg" />
                    <AboutCard englishName="Pond" myRole="Dev-ops" picture="/static/logo/ios-globe.svg" />
                    <AboutCard englishName="Jean" myRole="Back-end" picture="/static/logo/ios-globe.svg" />
                </div>
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}


export default About;