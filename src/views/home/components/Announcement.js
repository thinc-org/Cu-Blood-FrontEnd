import React, {Component} from 'react';
import AnnouncementContent from './AnnouncementContent';
import axios from "../../../core/core";
import Header from "../../shared-components/PageHeader";

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
        .catch(console.log)
    }

    render() {
        if (!this.state.isFetched) {
            return <div></div>
        } 
        
        //Save data of title and date from API as list
        let title = this.state.data.map(element => {
            let a = [];
            a.push(element.title);
            return a;
            });

        let date = this.state.data.map(element => {
            let a = [];
            a.push(element.id);
            return a;
            });


        return(
            <div className="bg-white w-full flex flex-col items-center">
                <Header borderColor="border-cb-red" english="ANNOUNCEMENT" thai="ข่าวประกาศ" englishColor="text-cb-pink"/>
                <div className="font-cu-heading w-full px-4 flex justify-center">
                    <div className=""><AnnouncementContent title={title} date={date}/></div>
                </div>
            </div>
        );
    }
}

export default Announcement;