import React, {Component} from "react";

class StatCont extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2 className="text-xl pb-10 text-5xl text-red-dark">{this.props.number}</h2>
                <p className="text-2xl">{this.props.content}</p>                
            </div>
        );
    }
}

export default StatCont;