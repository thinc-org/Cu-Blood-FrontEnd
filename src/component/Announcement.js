import React, {Component} from 'react';
import AnnounceContent from './AnnounceContent';
import axios from "../core/core";
import Header from "./PageHeader";

class Announcement extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            isFetched: false,
        }
    }

    //Collect only the lastest 5 data from API
    async getSomeData() {
        return await axios.get('./posts')
        .then(response => response.data.length)
        .then(dataNumber => axios.get(`./posts?_start=${dataNumber-5}&_limit=5`));
    }

    componentDidMount() {
        //Save data to state
        this.getSomeData()
        .then(response => this.setState({
            data: response.data,
            isFetched: true,
        }))
        .catch(err => console.log(err))
    }

    render() {
        if (!this.state.isFetched) {
            return <div></div>
        } 
        
        //Save data of title and date from API as list
        let title = []
        for (let element of this.state.data) {
            title.push(element.title);
        }

        let date = []
        for (let element of this.state.data) {
            date.push(`${element.id}`);
        }

        return(
            <div className="bg-white flex justify-center">
                <div className="font-cu-heading w-3/5 flex flex-col items-center mb-10">
                    <Header borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink"/>
                    <AnnounceContent title={title} date={date}/>
                </div>
            </div>
        );
    }
}

export default Announcement;