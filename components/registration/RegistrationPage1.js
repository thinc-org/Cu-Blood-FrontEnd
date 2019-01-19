import React, {Component} from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';

class RegistrationPage1 extends Component {
    render() {
        return(
            <div>
                <div className="flex flex-col items-center text-white py-10" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div>
                <Footer />
            </div>
        );
    }
}

export default RegistrationPage1;