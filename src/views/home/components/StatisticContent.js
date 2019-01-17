import React, {Component} from "react";

class StatisticContent extends Component {
    render() {
        return (
            <div>
                <div className="font-bold pb-4 text-5xl text-cb-red">{this.props.number}</div>
                <p className="text-2xl">{this.props.content}</p>                
            </div>
        );
    }
}

export default StatisticContent;