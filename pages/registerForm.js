import React, {Component} from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import Header from '@/shared-components/PageHeader';
import Form from '@/registration/local-components/RegisterFillForm';
import I18 from '@/core/i18n';

class RegisterForm extends Component {
    render() {
        return(
            <div>
                <div className="bg-cb-grey-lighter"><Header english={`REGISTER`} thai={`ลงทะเบียน`} englishColor={`text-cb-pink`} borderColor={`border-cb-red`}/></div>
                <div className="bg-white"><Form /></div>
                <div className="flex flex-col items-center text-white py-10" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div>
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('common')(RegisterForm);