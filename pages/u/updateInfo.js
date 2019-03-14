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
import moment from 'moment';
import Head from 'next/head';

class RegisterForm extends Component {

    static async getInitialProps() {
        const commonsData = await axios.get('/commons/')
            .then(response => response.data.result)
            .catch(console.log)

        return {
            commonsData,
            namespacesRequired: ['common', 'register', 'form'],
        };
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        // convert form data to api format
        const data = {}
        let bloodType = 0;
        let birthday = {
            day: 0,
            month: 0,
            year: 0,
        }
        for (let element of form.elements) {
            let value = element.value;
            const name = element.name;
            if (element.tagName === 'BUTTON') {
                continue;
            } else if (name === "bloodType") {
                bloodType += 4 * Number(value);
                continue;
            } else if (name === "rh") {
                bloodType += Number(value);
                continue;
            } else if (!isNaN(value) && name !== "phoneNumber" && name !== "password" && name !== "studentId" && name !== "year" && name !== "month" && name !== "day") {
                value = Number(value);
            } else if (name === "password" && value === "") {
                continue;
            } else if (name === 'day') {
                let day = Number(value) + 1;
                if (day <= 9) day = "0" + day;
                birthday.day = day;
                continue;
            } else if (name === 'month') {
                let month = Number(value) + 1;
                if (month <= 9) month = "0" + month
                birthday.month = month;
                continue;
            } else if (name === 'year') {
                birthday.year = moment().year() - Number(value);
                continue;
            }
            if (value === "on" || value === "off") {
                value = element.checked ? 1 : 0;
            }
            if (name === "schoolId") value++;
            if (name === "studentId" && value === "") value = null;
            data[name] = value;
        }

        if (!data.isEnrolled) data.isEnrolled = 0;
        data.bloodType = bloodType;
        data.birthday = birthday.year + "-" + birthday.month + "-" + birthday.day;
        axios.put('/profile/me/update', data)
            .then(() => redirectTo('/u/profile'))
            .catch(e => console.log(e))
    }

    render() {
        const { commonsData, t } = this.props;
        return (
            <div>
                <Head>
                    <title>
                        {t('editInfoBig')}
                    </title>
                </Head>
                <div className="bg-cb-grey-lighter"><Header english={t('editInfoSmall')} thai={t('editInfoBig')} englishColor={`text-cb-pink`} borderColor={`border-cb-red`} /></div>
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

export default I18.withNamespaces('updateInfo')(RegisterForm);