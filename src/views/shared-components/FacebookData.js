import React from 'react';
import axios from 'axios';

class FacebookData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async getData() {
        return await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=3')
    }

    componentDidMount() {
        this.getData()
        .then(res => {
            this.setState({
                posts: res.data
            })
        })
        .catch(err => console.log(err))
    }

    render() {

        //Map promise to title array
        const title = this.state.posts.map(element => {
            const temp = [];
            temp.push(element.title);
            return temp;
        })

        //Map promise to body array
        const body = this.state.posts.map(element => {
            const temp = [];
            temp.push(element.body);
            return temp;
        })

        //Just a temp random number
        var randomNumber = Math.floor(Math.random()*3);

        return(
            <div>
                <p className="font-bold">
                    {title[randomNumber]}
                </p>
                <p>
                    {body[randomNumber]}
                </p>
            
            </div>
        )
    }
}


export default FacebookData