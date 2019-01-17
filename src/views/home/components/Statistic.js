import React, {Component} from 'react';
import axios from "../../../core/core";
import StatCont from "./StatCont";
import Header from "../../shared-components/PageHeader";

class Statistic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isFetched: false,
        }
    }
    
    //Collect only the lastest 4 data from API
    async getSomeData() {
        return await axios.get('./posts')
        .then(response => response.data.length)
        .then(dataNumber => axios.get(`./posts?_start=${dataNumber-4}&_limit=4`));
    }

    componentDidMount() {
        //Save data to state
        this.getSomeData()
        .then(response => this.setState({
            data: response.data,
            isFetched: true,
        }))
        .catch(console.log)
    }

    render() {
        if (!this.state.isFetched) {
            return <div></div>
        } 
        
        //Execute the content of each block
        let content = this.state.data.map(element => {
        let a = [];
        a.push(<StatCont number={element.id} content={element.title}/>);
        return a;
        });

        let contentStyle = "border-cb-grey border-b w-full sm:w-1/2 text-center pb-6 sm:pb-0 sm:flex justify-center";

        return (
            <div className="flex flex-col items-center font-cu-heading bg-white">
                <Header borderColor="border-cb-red" english="STATISTIC" thai="ข้อมูลทางสถิติ" englishColor="text-cb-pink"/>
                <div className="flex flex-wrap w-4/5 sm:w-3/5 mb-10">
                    <div className={`${contentStyle} sm:border-r sm:pr-6 sm:pb-6`}>
                        {content[0]}
                    </div>
                    <div className={`${contentStyle} pt-6 sm:pt-0 sm:pl-6 sm:pb-6`}>
                        {content[1]}
                    </div>
                    <div className={`${contentStyle} pt-6 sm:border-b-0 sm:border-r sm:pr-6`}>
                        {content[2]}
                    </div>
                    <div className={`text-center w-full sm:w-1/2 sm:border-b-0 pt-6 sm:pl-6 sm:flex sm:justify-center`}>
                        {content[3]}
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistic;