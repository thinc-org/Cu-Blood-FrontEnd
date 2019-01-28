import React, { Component } from 'react';
import axios from '@/core/core';

const UserInfoContext = React.createContext();

class UserInfoProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            isLogin: false,
        }
    }

    addUserInfo = (user) => {
        this.setState({
            userInfo: user,
            isLogin: true,
        })
    }

    logout = (noRedirect) => {
        axios.post('https://api-dev.fives.cloud/v0/profile/logout')
            .then((resp) => {
                console.log(resp, 'logout response')
                this.setState({ userInfo: {}, isLogin: false })
            })
            // .catch(console.log)
            // .finally(() => {noRedirect === true ? null : window.location.href = '/'})
        // })
    }

    render() {
        return (
            <UserInfoContext.Provider value={{
                addUserInfo: this.addUserInfo,
                userInfo: this.state.userInfo,
                isLogin: this.state.isLogin,
                logout: this.logout,
            }}>
                {this.props.children}
            </UserInfoContext.Provider>
        );
    }
}

const UserInfoConsumer = UserInfoContext.Consumer;

export default UserInfoProvider;
export { UserInfoConsumer };