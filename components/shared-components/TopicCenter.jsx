import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        return (
        <div className="flex flex-col justify-center font-cu-heading text-center py-10 h-auto">
            <div className={`text-base tracking-wide font-normal ${this.props.englishColor}`}>{this.props.english}</div>
            <div className={`text-3xl font-black ${this.props.thaiColor}`}>{this.props.thai}</div> 
            <hr className={`w-24 mt-2 ${this.props.borderColor}`} style={{borderBottomWidth: "6px"}}/>
        </div>
        );
    }
}

export default PageHeader;