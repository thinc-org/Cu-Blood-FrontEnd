import React from 'react';
import AnnouncementHeader from '@/announcement/local-components/AnnouncementHeader'
import AnnouncementCard from '@/announcement/local-components/AnnouncementCard'
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import I18 from '@/core/i18n';
import axios from 'axios';
import map from 'lodash/map';
import moment from 'moment';


// import Pager from '@/announcement/local-components/Pager';

class Notice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            dataFromApi: this.props.announcementData,
            totalPage: 10
        }
    }

    //Set totalPage to number of array.object / 10

    // componentDidMount() {
    //     const { announcementData } = this.props;
    //     if (this.state.totalPage==-1) {
    //         this.setState({
    //             totalPage: (announcementData.length/10)
    //         })
    //     }
    // }


    //get data from api
    static async getInitialProps() {
        const announcementDataPromise = axios.get(`https://api-dev.fives.cloud/v0/announcements/all/1`);
        const data = await Promise.all([announcementDataPromise]
            .map(p => p
              .then(response => response.data)
              .catch(e => null)))
            .catch(console.log);

    

        const [announcementData] = data;
                return {
                    announcementData: announcementData ? announcementData.result.data : undefined
                };

    }
    
    getData = () => {
        
        const currentPage = this.state.currentPage;
        axios.get(`https://api-dev.fives.cloud/v0/announcements/all/${currentPage}`)
        .then(response => {
            const temp = response.data.result.data
            this.setState({
                dataFromApi: temp
            })
        })

        // console.log(announcementDataPromise);
        
    }
    

    //go to next page
    nextPage = () => {
        let myPage = 10;
        let data = this.getData();

        if (this.state.currentPage < 10) {
            myPage = this.state.currentPage + 1;
            return (
                this.setState({
                    currentPage: myPage,
                    dataFromApi: data
                })
            )
        } 
        
        
    }

    //go to previous page
    previousPage = () => {
        let myPage = 1
        let data = this.getData();

        if (this.state.currentPage > 1) {
            myPage = this.state.currentPage - 1;
            return (
                this.setState({
                    currentPage: myPage,
                    dataFromApi: data
                })
            )
        } 
        
    }

    render() {

        const announcementData = this.state.dataFromApi;
        const announcementTitle = map(announcementData, 'title');
        const announcementDate = map(announcementData, 'updatedAt');
        const announcementImage = map(announcementData, 'displayImage');



        const lengthOfArray = 10;

        
        



        //format date
        const announcementDateMoment = (props) => {
            let data = moment(announcementDate[props]).format('DD MMMM YYYY');
            return(
                data
            );
        }

        //array for cards
        const AnnouncementCardLoop = () => {
            let data = [];
            for(let i = 0; i < lengthOfArray; i++) {
                data.push(<AnnouncementCard text={announcementTitle[i]} date={announcementDateMoment(i)} image={announcementImage[i]}/>);
            }

            return data;
        }


        //page chooser
        const Pager = (props) => {
            const { currentPage, totalPage, next, previous } = props


            return (
                <div className='flex flex-row justify-center items-center pb-10 text-pink font-cu-heading text-2xl'>
                    <button onClick={previous} className='bg-pink-lightest w-10 h-10 text-pink-dark rounded-full items-center justify-center flex'> {"<"} </button>

                    <span className='mx-2'>
                        {currentPage}
                    </span>
                    /
                    <span className='mx-2'>
                        {totalPage}
                    </span>
                    <button onClick={next} className='bg-pink-lightest text-pink-dark w-10 h-10 rounded-full items-center justify-center flex'> {'>'} </button>
                </div>
            )
        }




        return (
            <div className="bg-grey-lightest">
                <AnnouncementHeader />
                <div className="flex flex-row flex-wrap pb-10 justify-center">
                     <AnnouncementCardLoop />
                </div>
                <Pager currentPage={this.state.currentPage} totalPage={this.state.totalPage} next={this.nextPage} previous={this.previousPage}/>
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}




export default I18.withNamespaces('common')(Notice)