import React, { Component } from 'react';
import axios from '@/core/core';

const UserInfoContext = React.createContext();

class UserInfoProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
            isLogin: false,
            isUpdated: false,
        }
    }

    addUserInfo = (user) => {
        this.setState({
            userInfo: user,
            isLogin: true,
            isUpdated: true,
        }, () => this.setState({isUpdated: false},  () => console.log(this.state.userInfo, "fetch from context")))
    }

    logout = () => {
        axios.post('https://api-dev.fives.cloud/v0/profile/logout')
            .finally(() => window.location.href = '')
    }

    deleteUserContext = () => {
        this.setState({ userInfo: {}, isLogin: false })
    }

    render() {
        return (
            <UserInfoContext.Provider value={{
                addUserInfo: this.addUserInfo,
                userInfo: this.state.userInfo,
                isLogin: this.state.isLogin,
                logout: this.logout,
                deleteUserContext: this.deleteUserContext,
                isUpdated: this.state.isUpdated,
            }}>
                {this.props.children}
            </UserInfoContext.Provider>
        );
    }
}

const UserInfoConsumer = UserInfoContext.Consumer;

export default UserInfoProvider;
export { UserInfoConsumer };