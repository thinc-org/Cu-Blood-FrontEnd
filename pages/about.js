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
      const image = "/static/icons/md-person.svg";
        return (
            <div>
                <AboutHeader />
                <AboutContent/>
                <PageHeader english={t('staffHeaderSmall')} englishColor="text-pink" thai={t('staffHeaderBig')} borderColor="border-red" />
                <div className="layout-wide flex flex-wrap flex-row justify-center pb-10">
                    <AboutCard englishName={t('person1')} myRole={t('role1')} picture={image} />
                    <AboutCard englishName={t('person2')} myRole={t('role2')} picture={image} />
                    <AboutCard englishName={t('person3')} myRole={t('role3')} picture={image}  />
                    <AboutCard englishName={t('person4')} myRole={t('role4')} picture={image} />
                    <AboutCard englishName={t('person5')} myRole={t('role5')} picture={image} />
                    <AboutCard englishName={t('person6')} myRole={t('role6')} picture={image} />
                    <AboutCard englishName={t('person7')} myRole={t('role7')} picture={image} />
                    <AboutCard englishName={t('person8')} myRole={t('role8')} picture={image} />
                    <AboutCard englishName={t('person9')} myRole={t('role9')} picture={image} />
                    <AboutCard englishName={t('person10')} myRole={t('role10')} picture={image} />
                    <AboutCard englishName={t('person11')} myRole={t('role11')} picture={image} />
                    <AboutCard englishName={t('person12')} myRole={t('role12')} picture={image} />
                    <AboutCard englishName={t('person13')} myRole={t('role13')} picture={image} />
                    <AboutCard englishName={t('person14')} myRole={t('role14')} picture={image} />
                        
                </div>
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}


export default I18.withNamespaces('about')(About);
