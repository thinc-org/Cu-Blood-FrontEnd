import React, { Component } from 'react';
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import Login from '@/shared-components/UserLogin'
import '../static/css/login.css'
import axios from '@/core/core';
import redirectTo from '@/core/redirectTo';
import I18 from '@/core/i18n';

class ChulaLogin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            errorMessage: "",
            formValid: false,
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const data = {}
        let state = null;
        for (let element of form.elements) {
            if (element.tagName === 'BUTTON') { continue; }
            data[element.name] = element.value;
        }
        axios.post('https://api-dev.fives.cloud/v0/profile/login', data)
            .then(() => {
                // clear username password before proceed to next page as security failsafe
                this.setState({
                    username: "",
                    password: "",
                })
                redirectTo('/u/profile')
            })
            .catch((e) => {
                if (e.response) {
                    state = {
                        username: "",
                        password: "",
                        errorMessage: e.response.data.message
                    }
                } else {
                    state = {
                        errorMessage: "ขออภัยขณะนี้ระบบมีปัญหา โปรดลองใหม่อีกครั้ง"
                    }
                }
                this.setState(state)
            })
    }

    handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({ [name]: value }, () => this.validateForm())
    }

    validateForm = () => {
        this.setState(prevState => ({
            formValid: prevState.username !== "" && prevState.password !=="",
        }))
    }

    componentDidUpdate() {
        console.log('update', this.state)
    }

    render() {
        return (
            <div className="flex flex-col special-height">
                <div className="layout-wide flex flex-row items-center special-height">
                    <div className="w-full mr-12 md:mr-32 hidden sm:flex sm:flex-col">
                        <img src="../static/icons/bulb.svg" alt="bulb" style={{ height: "40px", width: "35px" }} />
                        <span className="font-bold text-xl text-cb-pink my-2 font-cu-heading">รู้หรือไม่...</span>
                        <span className="font-bold text-xl my-2 font-cu-heading">การบริจาคโลหิตลดความเสี่ยงจากโรคต่าง ๆ</span>
                        <p className="text-base my-2 font-cu-body" style={{ color: "#9A9A9A" }}>
                            ไม่ว่าจะเป็นโรคมะเร็งชนิดต่างๆ เช่น มะเร็งตับ
                            มะเร็งปอด มะเร็งลําไส้ใหญ่ มะเร็งกระเพาะอาหาร
                            และอื่นๆ ทั้งยังช่วยลดปริมาณธาตุเหล็กส่วนเกิน
                            ในร่างกาย อันเป็นปัจจัยของการเกิดโรค
                            “เส้นเลือดหัวใจอุดตัน
                        </p>
                    </div>
                    <div className="w-full">
                        <Login
                            onSubmit={this.onSubmit}
                            errorMessage={this.state.errorMessage}
                            username={this.state.username}
                            password={this.state.password}
                            onChange={this.handleChange}
                            formValid={this.state.formValid}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center text-white mt-10 special-padding-buttom" style={{ backgroundColor: '#8e9dc0' }}><FacebookButton /></div>
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('common')(ChulaLogin);