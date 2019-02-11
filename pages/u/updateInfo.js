import React, { Component } from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import Header from '@/shared-components/TopicCenter';
import Form from '@/register/local-components/RegisterFillForm';
import I18 from '@/core/i18n';
import '../../static/css/registerForm.css';
import { UserInfoConsumer } from '@/core/UserInfoProvider';
import axios from '@/core/core';
import redirectTo from '@/core/redirectTo';

class RegisterForm extends Component {

    static async getInitialProps() {
        const commonsData = await axios.get('https://api-dev.fives.cloud/v0/commons/')
            .then(response => response.data.result)
            .catch(console.log)

        return ({ commonsData });
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // convert form data to api format
        const data = {}
        let bloodType = 0;
        for (let element of form.elements) {
            let value = element.value;
            const name = element.name;
            if (element.tagName === 'BUTTON') {
                continue;
            } else if (name === "bloodType") {
                bloodType += 2 * Number(value);
            } else if (name === "rh") {
                bloodType += Number(value);
            } else if (!isNaN(value) && name !== "phoneNumber" && name !== "password") {
                value = Number(value);
            } else if(name === "password" && value === "") {
                continue;
            }
            if (value === "on" || value === "off") {
                value = element.checked ? 1 : 0;
            }
            if (name === "schoolId") value++;
            data[name] = value;
        }

        if(!data.isEnrolled) data.isEnrolled = 0;
        data.bloodType = bloodType;
        axios.put('https://api-dev.fives.cloud/v0/profile/me/update', data)
            .then(() => redirectTo('/u/profile'))
            .catch(e => console.log(e))
    }

    render() {
        const { commonsData } = this.props;
        return (
            <div>
                <div className="bg-cb-grey-lighter"><Header english={`EDIT INFO`} thai={`แก้ไขข้อมุล`} englishColor={`text-cb-pink`} borderColor={`border-cb-red`} /></div>
                <div className="bg-white">
                    <UserInfoConsumer>
                        {({ userInfo, isUpdated }) => (<Form key={isUpdated ? 0 : 1} commonsData={commonsData} onSubmit={this.onSubmit} userInfo={userInfo} updateInfo={true} isEmail={true} />)}
                    </UserInfoConsumer>
                </div>
                {/* <div className="flex flex-col items-center text-white py-10" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div> */}
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('common')(RegisterForm);