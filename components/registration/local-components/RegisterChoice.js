import React, {Component} from 'react';
import Header from '@/shared-components/PageHeader';

class RegisterChoice extends Component {
    render() {
        const ChoiceContainerClass = `w-full bg-white flex flex-col justify-center items-center rounded-lg`;
        const ChoiceContainerStyle = {maxWidth:"350px", height:"300px"};

        return (
            <div className="bg-cb-grey-lighter py-6">
                <Header english={`REGISTER`} thai={`ลงทะเบียน`} englishColor={`text-cb-pink`} borderColor={`border-cb-red`} />
                <div className="flex w-full px-4 justify-center items-center flex-col md:flex-row pb-10">
                    <div className={`mb-10 md:mb-0 md:mr-4 ${ChoiceContainerClass}`} style={ChoiceContainerStyle}>
                        <div className="mb-6">
                            <img className="mr-6" style={{width: "5rem"}} src="/static/logo/logo1.svg" alt="CUBlood logo"/>
                            <img style={{width: "7.5rem"}} src="/static/logo/CU-logo-color.svg" alt="CU logo"/>
                        </div>
                        <div className="text-center">
                            <div className="font-cu-heading text-lg">Chulalongkorn University</div>
                            <div className="font-cu-heading text-lg">Current students and Registered Users</div>
                        </div>
                    </div>
                    <div className={`md:ml-4 ${ChoiceContainerClass}`} style={ChoiceContainerStyle}>
                        <div className="mb-6">
                            <img style={{width: "7.5rem"}} src="/static/logo/CU-logo-pink.svg" alt="CU logo pink"/>
                        </div>
                        <div className="text-center">
                            <div className="font-cu-heading text-lg">Chulalongkorn University</div>
                            <div className="font-cu-heading text-lg">Alumni</div>
                        </div>
                    </div> 
                </div>
            </div>
        );
    }
}

export default RegisterChoice;