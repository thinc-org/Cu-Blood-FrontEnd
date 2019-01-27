import React, {Component} from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import Login from '@/shared-components/UserLogin'
import I18 from '@/core/i18n';

class ChulaLogin extends Component {
    render() {
        return(
            <div>
                <div className="layout-wide flex flex-row items-center">
                    <div className="w-full text-sm mr-20 hidden sm:block">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                    <div className="w-full">
                        <Login/>
                    </div>
                </div>
                <div className="flex flex-col items-center text-white mt-10" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div>
                <Footer/>
            </div>
        );
    }
}

export default I18.withNamespaces('common')(ChulaLogin);