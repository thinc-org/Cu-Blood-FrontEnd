import React, {Component} from 'react';

class PageHeader extends Component {
    render() {
        return (
        <div className="w-full flex justify-center">
            <div className={`border-solid ${this.props.borderColor} border-b-8 text-center mt-10 mb-10`} >
                <h2 className={`text-base tracking-wide mb-1 ${this.props.englishColor}`}>{this.props.english}</h2>
                <h1 className={`text-3xl mb-3 ${this.props.thaiColor}`}>{this.props.thai}</h1> 
            </div>
        </div>
        );
    }
}

export default PageHeader;