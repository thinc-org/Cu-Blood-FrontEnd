import React, {Component} from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import Header from '@/shared-components/PageHeader';

class RegisterForm extends Component {
    render() {
        return(
            <div>
                <div className="layout-wide bg-cb-grey-lighter"><Header english={`REGISTER`} thai={`ลงทะเบียน`} englishColor={`text-cb-pink`} borderColor={`border-cb-red`}/></div>
                <div className="layout-wide flex flex-col items-center text-white py-10" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div>
                <Footer />
            </div>
        );
    }
}

export default RegisterForm;