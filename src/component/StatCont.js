import React, {Component} from "react";

class StatCont extends Component {
    render() {
        return (
            <div>
                <h2 className="text-xl pb-10 text-5xl text-cb-red">{this.props.number}</h2>
                <p className="text-2xl">{this.props.content}</p>                
            </div>
        );
    }
}

export default StatCont;