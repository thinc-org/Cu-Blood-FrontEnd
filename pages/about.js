import React from 'react';
import AboutHeader from '@/about/local-components/AboutHeader';
import PageHeader from '@/shared-components/PageHeader';
import AboutCard from '@/about/local-components/AboutCard';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <PageHeader english="STAFFS" englishColor="text-pink" thai="บุคลากร" borderColor="border-red" />
                <div className=" flex flex-col items-center">
                    <div className="w-2/3 flex flex-row flex-wrap pb-8 justify-center">
                        <AboutCard englishName="Boom" myRole="Front-end" picture="/static/logo/ios-globe.svg" />
                        <AboutCard englishName="New" myRole="Front-end" picture="/static/logo/clock.svg" />
                        <AboutCard englishName="Poom" myRole="Front-end" picture="/static/logo/cu-logo-pink.svg" />
                        <AboutCard englishName="Five" myRole="Master" picture="/static/logo/logo1.svg" />
                        <AboutCard englishName="Pond" myRole="Dev-ops" picture="/static/logo/logo2.svg" />
                        <AboutCard englishName="Jean" myRole="Back-end" picture="/static/logo/logo2.svg" />
                    </div>
                </div>
                <div className="flex flex-col items-center text-white py-10" style={{ backgroundColor: '#8e9dc0' }}>
                    <FacebookButton />
                </div>
                <Footer />
            </div>
        );
    }
}
