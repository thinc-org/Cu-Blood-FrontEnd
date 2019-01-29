import React, { Component } from 'react';
import axios from '@/core/core';

const CommonsInfoContext = React.createContext();

class CommonsProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commonsInfo: {},
        }
    }

    addCommonsInfo = (info) => {
        this.setState({
            commonsInfo: info
        })
    }

    render() {
        return (
            <CommonsInfoContext.Provider value={{
                commonsInfo: this.state.commonsInfo,
                addCommonsInfo: this.addCommonsInfo
            }}>
                {this.props.children}
            </CommonsInfoContext.Provider>
        );
    }
}

const CommonsInfoConsumer = CommonsInfoContext.Consumer;

export default CommonsProvider;
export { CommonsInfoConsumer };