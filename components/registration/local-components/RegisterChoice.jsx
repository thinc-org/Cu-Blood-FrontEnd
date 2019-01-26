import React, {Component} from 'react';
import Header from '@/shared-components/TopicCenter';

class RegisterChoice extends Component {

    testLoginSuccess = () => {
        let now = new Date();
        let time = now.getTime() + 3600 * 1000 * 2;
        now.setTime(time);
        document.cookie = 'accessToken=' + 1 + '; expires=' + now.toUTCString() + '; path=/';
        // log in by set cookie accessToken to 1 and test api will resolve this token in _app.js/ && expire in 2 hours
        // in production mode - this method will run only if login api is resolved a promise then pass the token to this method
    } 

    testLogout = () => {
        document.cookie = "accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        // log out by remove cookie accessToken
    }

    testInvalidateToken = () => {
        document.cookie = 'accessToken=' + 2;
        // invalidate accessToken (set accessToken to '2' and test api will reject as a promise in _app.js)
        // just a test method only 
        // please delete on production
    }

    render() {
        const ChoiceContainerClass = `w-full bg-white flex flex-col justify-center items-center rounded-lg`;
        const ChoiceContainerStyle = {maxWidth:"350px", height:"300px"};

        return (
            <div className="bg-cb-grey-lighter py-6">
                <Header english={`REGISTER`} thai={`ลงทะเบียน`} englishColor={`text-cb-pink`} borderColor={`border-cb-red`} />
                <div className="flex layout-wide justify-center items-center flex-col md:flex-row pb-10">
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
                <div className="flex justify-between mx-20">
                    <button className="bg-cb-red" onClick={this.testLoginSuccess}> login </button>
                    <button className="bg-cb-red" onClick={this.testLogout}> logout </button>
                    <button className="bg-cb-red" onClick={this.testInvalidateToken}> Invalidate Token </button>
                </div>
            </div>
        );
    }
}

export default RegisterChoice;