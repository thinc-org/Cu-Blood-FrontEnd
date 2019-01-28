import React, {Component} from 'react';

const UserInfoContext = React.createContext();

class UserInfoProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {},
        }
    }

    addUserInfo = (user) => {
        console.log(user, 'user')
        this.setState({
            userInfo: user
        })
    }

    render() {
        return(
            <UserInfoContext.Provider value={{
                addUserInfo: this.addUserInfo,
                userInfo: this.state.userInfo
            }}>
                {this.props.children}
            </UserInfoContext.Provider>
        );
    }
}

const UserInfoConsumer = UserInfoContext.Consumer;

export default UserInfoProvider;
export {UserInfoConsumer};