import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        return (
        <div className="w-full flex flex-col justify-center font-cu-heading text-center mt-10 mb-10 h-auto">
            <div className={`text-base tracking-wide font-normal ${this.props.englishColor}`}>{this.props.english}</div>
            <div className={`text-3xl font-black ${this.props.thaiColor}`}>{this.props.thai}</div> 
            <hr className={`w-24 mt-2 border-b-4 ${this.props.borderColor}`}/>

        </div>
        );
    }
}

export default PageHeader;