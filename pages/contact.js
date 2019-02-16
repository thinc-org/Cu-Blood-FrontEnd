import React, {Component} from 'react';
import FacebookContainer from '@/shared-components/FacebookContainer';
import axios from '@/core/core';
import Footer from '@/shared-components/Footer';
import ContactHeader from '@/contact/local-components/ContactHeader';
import ContactContent from '@/contact/local-components/ContactContent';
// import I18 from '@/core/i18n';

class Contact extends Component {
    static async getInitialProps() {
        const facebookPosts = await axios.get('/commons/facebook/posts/')
        .then(response => response.data)
        .then(result => result.result)
        .catch(console.log);

        return {facebookPosts};
    }
    
    render() {
        const {facebookPosts} = this.props
        return (
            <div>
                <ContactHeader />
                <ContactContent />
                <FacebookContainer posts={facebookPosts} />
                <Footer />
            </div>
        );
    }
}

export default Contact