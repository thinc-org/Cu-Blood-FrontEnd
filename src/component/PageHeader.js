import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        return (
        <div className="w-full flex flex-col justify-center font-cu-heading text-center mt-10 mb-10 h-auto">
            <div className={`text-base tracking-wide font-black mb-2 ${this.props.englishColor}`}>{this.props.english}</div>
            <div className={`text-4xl font-black ${this.props.thaiColor}`}>{this.props.thai}</div> 
            <hr className={`w-48 mt-6 ${this.props.borderColor}`} style={{borderWidth: 3}}/>

        </div>
        );
    }
}

export default PageHeader;