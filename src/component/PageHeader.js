import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        return (
        <div className="w-full flex justify-center font-cu-heading">
            <div className={`border-solid ${this.props.borderColor} border-b-8 text-center mt-10 mb-10`} >
                <div className={`text-base tracking-wide font-black mb-2 ${this.props.englishColor}`}>{this.props.english}</div>
                <div className={`text-4xl mb-3 font-black ${this.props.thaiColor}`}>{this.props.thai}</div> 
            </div>
        </div>
        );
    }
}

export default PageHeader;