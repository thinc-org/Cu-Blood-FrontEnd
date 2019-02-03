import React, {Component} from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import Header from '@/shared-components/TopicCenter';
import Form from '@/register/local-components/RegisterFillForm';
import I18 from '@/core/i18n';
import '../../static/css/registerForm.css';
import axios from '@/core/core';

class RegisterForm extends Component {

    static async getInitialProps() {
        const endDate = await axios.get('https://api-dev.fives.cloud/v0/commons/')
            .then(response => response.data.result.endDate)
            .catch(console.log)

        return({endDate});
    }
    
    render() {
        const {endDate} = this.props;
        return(
            <div>
                <div className="bg-cb-grey-lighter"><Header english={`REGISTER`} thai={`ลงทะเบียน`} englishColor={`text-cb-pink`} borderColor={`border-cb-red`}/></div>
                <div className="bg-white"><Form endDate={endDate} /></div>
                {/* <div className="flex flex-col items-center text-white py-10" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div> */}
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('common')(RegisterForm);