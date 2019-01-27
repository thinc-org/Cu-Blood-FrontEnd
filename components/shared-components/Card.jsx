import React, {Component} from 'react'

export default class Card extends Component {
    render() {
        return (
            <div className="bg-white py-10 flex flex-col px-4 sm:px-10 rounded-lg shadow">
                {this.props.children}
            </div>
        );
    }
} 