import React from 'react';
import AboutHeader from '@/about/local-components/AboutHeader';
import PageHeader from '@/shared-components/TopicCenter';
import AboutCard from '@/about/local-components/AboutCard';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import AboutContent from '@/about/local-components/AboutContent';
import DropDownStat from '@/about/local-components/DropDownStat';
import I18 from '@/core/i18n';
import axios from '@/core/core';
import '../static/css/about.css';
import Head from 'next/head';

class About extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showDropDownStat: false,
            year: (new Date()).getFullYear(),
            data: this.props.data,
        }
    }

    static async getInitialProps() {
        const year = (new Date()).getFullYear();
        const data = await fetchData(year);
        return {
            namespacesRequired: ['common', 'about'],
            data,
        }
    }

    handleYearSelect = async (e) => {
        const value = e.target.value;
        const newYear = (new Date()).getFullYear() - value;
        const data = await fetchData(newYear);
        this.setState({
            year: newYear,
            data,
        });
    }

    render() {
      const { t } = this.props;
      const image = "/static/icons/md-person.svg";
      const displayDropDownStat = this.state.showDropDownStat ? <DropDownStat data={this.state.data} onYearChange={this.handleYearSelect} year={this.state.year} /> : null;
        return (
            <div>
                <Head>
                    <title>
                        {t('aboutHeader')}
                    </title>
                </Head>
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
                <div className="layout-narrow pb-10 text-center sm:text-left"><button onClick={this.triggerDropDownStat} className="font-cu-heading bg-cb-red text-white px-4 py-2 rounded-lg">{t("aboutButtonDropDown")}</button></div>
                {displayDropDownStat}
                <FacebookButton />
                <Footer />
            </div>
        );
    }

    triggerDropDownStat = () => {
        const state = !this.state.showDropDownStat;
        this.setState({showDropDownStat: state})
    }
}

const fetchData = (year) => {
    const insightsPromise = axios.get('/commons/insights/' + year);
    const bloodtypePromise = axios.get(`/commons/insights/blood-types/${year}`)
    return Promise.all([insightsPromise, bloodtypePromise]
        .map(promise => promise
            .then(response => response.data)
            .then(data => data.result)
            .catch(e => null))
    )
}


export default I18.withNamespaces('about')(About);
