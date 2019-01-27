import React, {Component} from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import Login from '@/shared-components/UserLogin'
import '../static/css/login.css'
import axios from '@/core/core';
import redirectTo from '@/core/redirectTo';
import I18 from '@/core/i18n';

class ChulaLogin extends Component {

    setCookie(token) {
        let now = new Date();
        let time = now.getTime() + 3600 * 1000 * 2;
        now.setTime(time);
        document.cookie = 'accessToken=' + token + '; expires=' + now.toUTCString() + '; path=/';
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {}
        for (let element of form.elements) {
          if (element.tagName === 'BUTTON') { continue; }
          data[element.name] = element.value;
        }
        axios.post('https://api-dev.fives.cloud/v0/profile/login', data)
            .then(() => redirectTo('/u/abt'))
            // .catch(() => window.location.href = '/chulaLogin');
            .catch(console.log)
    }

    render() {
        return(
            <div className="flex flex-col special-height">
                <div className="layout-wide flex flex-row items-center special-height">
                    <div className="w-full text-sm mr-12 md:mr-32 hidden sm:block">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                    <div className="w-full">
                        <Login onSubmit={this.onSubmit}/>
                    </div>
                </div>
                <div className="flex flex-col items-center text-white mt-10 special-padding-buttom" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div>
                <Footer/>
            </div>
        );
    }
}

export default I18.withNamespaces('common')(ChulaLogin);