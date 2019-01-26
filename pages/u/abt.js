import React from 'react';
import AboutHeader from '@/about/local-components/AboutHeader';
import PageHeader from '@/shared-components/TopicCenter';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import I18 from '@/core/i18n';

class About extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <PageHeader english="Dashboard" englishColor="text-pink" thai="just a test page" borderColor="border-red" />
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}


export default I18.withNamespaces('common')(About)