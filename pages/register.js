import React, {Component} from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import RegisterChoice from '@/registration/local-components/RegisterChoice';
import I18 from '@/core/i18n';

class RegistrationPage1 extends Component {
    render() {
        return(
            <div>
                <RegisterChoice />
                <div className="flex flex-col items-center text-white py-10" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div>
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('common')(RegistrationPage1);