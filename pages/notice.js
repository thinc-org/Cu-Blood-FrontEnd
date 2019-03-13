import React from 'react';
import NoticeHeader from '@/notice/local-components/NoticeHeader'
import NoticeContent from '@/notice/local-components/NoticeContent'
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import DropDownStat from '@/notice/local-components/DropDownStat';
import ReactDOM from 'react-dom';
import I18 from '@/core/i18n';

class Notice extends React.Component {

    constructor(props) {
        super(props);
        this.myRefs = [];
        this.state = {
            showDropDownStat: false
        }
    }

    static async getInitialProps() {
        return {
            namespacesRequired: ['common', 'notice'],
        }
    }

    scrollToTopic = (id) => {
        const element = this.myRefs[id];
        const reactDom = ReactDOM.findDOMNode(element.current)
        const isIE = /*@cc_on!@*/false || !!document.documentMode;
        const isEdge = !isIE && !!window.StyleMedia;
        // const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
        (isEdge || isIE) ?
            window.scrollTo(0, window.scrollY + reactDom.getBoundingClientRect().top - 60)
            :
            window.scrollTo({
                top: window.scrollY + reactDom.getBoundingClientRect().top - 60,
                behavior: "smooth",
            });
    }

    render() {
        const displayDropDownStat = this.state.showDropDownStat ? <DropDownStat /> : null;
        const { t } = this.props;
        return (
            <div>
                <NoticeHeader scrollToTopic={this.scrollToTopic} />
                <NoticeContent myRefs={this.myRefs} />
                <div className="layout-narrow pb-10 text-center sm:text-left"><button onClick={this.triggerDropDownStat} className="text-cu-heading bg-cb-red text-white px-4 py-2 rounded-lg">{t("noticeButtonDropDown")}</button></div>
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


export default I18.withNamespaces('notice')(Notice);
