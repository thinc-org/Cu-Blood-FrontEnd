import React, {Component} from 'react';
import Header from '@/shared-components/PageHeader';

class RegisterChoice extends Component {
    render() {
        return (
            <div>
                <Header english={`REGISTER`} thai={`ลงทะเบียน`} englishColor={`text-cb-pink`} borderColor={`border-cb-red`} />
            </div>
        );
    }
}

export default RegisterChoice;