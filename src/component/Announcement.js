import React, {Component} from 'react';
import AnnounceHead from './AnnounceHead';
import AnnounceCont from './AnnounceCont';
import axios from "../core/core";

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
                <div className="font-cu-heading w-3/5 flex flex-col items-center my-10">
                    <AnnounceHead />
                    <div className="text-center mt-10 border-cb-red border-b-8">
                        <h2 className="text-base tracking-wide text-cb-pink mb-1">Announcement</h2>
                        <h2 className="text-3xl mb-3">ข่าวประกาศ</h2>
                    </div>
                    <AnnounceCont title={title} date={date}/>
                </div>
            </div>
        );
    }
}

export default Announcement;