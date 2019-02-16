import React from 'react';
import AboutHeader from '@/about/local-components/AboutHeader';
import PageHeader from '@/shared-components/TopicCenter';
import AboutCard from '@/about/local-components/AboutCard';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import AboutContent from '@/about/local-components/AboutContent';
import I18 from '@/core/i18n';

class About extends React.Component {

    static async getInitialProps() {
        return {
            namespacesRequired: ['common', 'about'],
        }
    }

    render() {
      const { t } = this.props;
        return (
            <div>
                <AboutHeader />
                <AboutContent/>
                <PageHeader english={t('staffHeaderSmall')} englishColor="text-pink" thai={t('staffHeaderBig')} borderColor="border-red" />
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


export default I18.withNamespaces('about')(About);
