import React, {Component} from 'react';
import axios from "../core/core";
import StatCont from "./StatCont";

class Statistic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isFetched: false,
        }
    }
    async getSomeData() {
        return await axios.get('./posts')
        .then(response => response.data.length)
        .then(dataNumber => axios.get(`./posts?_start=${dataNumber-4}&_limit=4`));
        // return await axios.get('./posts?_page=0&_limit=4')
    }

    componentDidMount() {
        this.getSomeData()
        .then(response => this.setState({
            data: response.data,
            isFetched: true,
        }, () => console.log(this.state.data)))
        .catch(err => console.log(err))
    }

    render() {
        if (!this.state.isFetched) {
            return <div></div>
        } 
        
        let content = this.state.data.map(element => {
        let a = [];
        a.push(<StatCont number={element.id} content={element.title}/>);
        return a;
        });

        return (
            <div className="flex flex-col items-center font-cu-heading">
                <div className="border-sold border-red-dark border-b-8 text-center mt-10 mb-10" >
                    <h2 className="text-base tracking-wide mb-3 text-pink">STATISTICS</h2>
                    <h1 className="text-3xl mb-3">ข้อมูลทางสถิติ {}</h1> 
                </div>
                <div className="flex flex-wrap w-3/5 mb-10">
                    <div className="border-grey border-r border-b border-solid text-center w-1/2 pt-5 pb-10 pr-10 pl-10">
                        {content[0]}
                    </div>
                    <div className="border-grey border-b border-solid text-center w-1/2 pt-5 pb-10 pr-10 pl-10">
                        {content[1]}
                    </div>
                    <div className="border-grey border-r border-solid text-center w-1/2 pt-10 pr-10 pl-10">
                        {content[2]}
                    </div>
                    <div className="text-center w-1/2 pt-10 pr-10 pl-10">
                        {content[3]}
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistic;