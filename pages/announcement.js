import React from 'react';
import AnnouncementHeader from '@/announcement/local-components/AnnouncementHeader'
import AnnouncementCard from '@/announcement/local-components/AnnouncementCard'
import AnnouncementContent from '@/announcement/local-components/AnnouncementContent'
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import axios from '@/core/core';
import map from 'lodash/map';
import I18, { Link } from '@/core/i18n';
import Head from 'next/head';

class Announcement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            dataFromApi: this.props.announcementData,
            totalPage: this.props.numberOfPage,
            isButtonDisabledRight: false,
            isButtonDisabledLeft: true,
        }
    }

    //get data from api
    static async getInitialProps({ query: { id } }) {
        if (id) {
            const data = await axios.get('/announcements/' + id)
                .then(response => response.data)
                .then(data => data.result)
                .catch(() => null)
            return {
                namespacesRequired: ['common', 'announcement'],
                currentId: id,
                data,
            }
        } else {
            const announcementDataPromise = axios.get('/announcements/all/1');
            const data = await Promise.all([announcementDataPromise]
                .map(p => p
                    .then(response => response.data)
                    .catch(e => null)))
                .catch(console.log);
            const [announcementData] = data;
            return {
                announcementData: announcementData ? announcementData.result.data : undefined,
                numberOfPage: announcementData ? announcementData.result.pageCount : undefined,
                namespacesRequired: ['common', 'announcement'],
            };
        }

    }

    getData = (myPage) => {

        axios.get(`/announcements/all/${myPage}`)
            .then(response => {
                const temp = response.data.result.data
                this.setState({
                    dataFromApi: temp
                })
            })

    }

    update = (myPage) => {
        this.setState({
            // dataFromApi: data,
            currentPage: myPage
        })
        this.getData(myPage);
        window.scrollTo({
            top: 300,
            left: 0,
            behavior: 'smooth'
        });
    }

    disabledButton = (myPage) => {
        if (myPage >= this.state.totalPage) {
            this.setState({
                isButtonDisabledRight: true
            })
        }
        if (myPage < this.state.totalPage) {
            this.setState({
                isButtonDisabledRight: false
            })
        }
        if (myPage > 1) {
            this.setState({
                isButtonDisabledLeft: false
            })
        }
        if (myPage <= 1) {
            this.setState({
                isButtonDisabledLeft: true
            })
        }
    }

    //go to next page
    nextPage = () => {
        let myPage = this.state.currentPage + 1;
        this.disabledButton(myPage)
        return (
            this.update(myPage)
        )
    }


    //go to previous page
    previousPage = () => {
        let myPage = this.state.currentPage - 1;
        this.disabledButton(myPage)
        return (
            this.update(myPage)
        )
    }


    render() {
        const announcementData = this.state.dataFromApi;
        const announcementTitle = map(announcementData, 'title');
        const announcementDate = map(announcementData, 'updatedAt');
        const announcementImage = map(announcementData, 'displayImage');
        const announcementIds = map(announcementData, 'id');
        // console.log('page' + this.state.currentPage);
        // console.log(this.state.isButtonDisabledLeft);

        //array for cards
        const AnnouncementCardLoop = () => {
            let data = [];
            for (let i = 0; i < announcementIds.length; i++) {
                data.push(
                    <Link key={i} href={'/announcement?id=' + announcementIds[i]}>
                        <a className="no-underline flex">
                            <AnnouncementCard
                                text={announcementTitle[i]}
                                date={announcementDate[i]}
                                image={announcementImage[i]}
                            />
                        </a>
                    </Link>
                );
            }
            return data;
        }


        //page chooser
        const Pager = (props) => {
            const { currentPage, totalPage, next, previous } = props
            return (
                <div className='flex flex-row justify-center items-center pb-10 text-pink font-cu-heading text-2xl'>
                    <button disabled={this.state.isButtonDisabledLeft} onClick={previous} className='bg-pink-lightest w-10 h-10 text-pink-dark rounded-full items-center justify-center flex'> {"<"} </button>
                    <span className='mx-2'>
                        {currentPage}
                    </span>
                    /
                    <span className='mx-2'>
                        {totalPage}
                    </span>
                    <button disabled={this.state.isButtonDisabledRight} onClick={next} className='bg-pink-lightest text-pink-dark w-10 h-10 rounded-full items-center justify-center flex'> {'>'} </button>
                </div>
            )
        }

        const { currentId } = this.props;
        if (!announcementData && !currentId) {
            this.getData(1);
        }
        const { t } = this.props;
        return (
            <div className="bg-grey-lightest">

                {
                    currentId ?
                        (
                            <React.Fragment>
                                <AnnouncementContent data={this.props.data} />
                                <Head>
                                    <title>
                                        {this.props.data.title}
                                    </title>
                                </Head>
                            </React.Fragment>
                        )
                        :
                        (
                            <React.Fragment>
                                <Head>
                                    <title>
                                        {t('announcementTitle')}
                                    </title>
                                </Head>
                                <AnnouncementHeader text={announcementTitle ? announcementTitle[0] : null} />
                                <div className="flex flex-row flex-wrap pb-10 justify-center">
                                    <AnnouncementCardLoop />
                                </div>
                                <Pager
                                    currentPage={this.state.currentPage}
                                    totalPage={this.state.totalPage}
                                    next={this.nextPage}
                                    previous={this.previousPage}
                                    isButtonDisabled={this.state.isButtonDisabled}
                                />
                            </React.Fragment>
                        )
                }
                <FacebookButton />
                <Footer />
            </div>
        );
    }
}

export default I18.withNamespaces('announcement')(Announcement);