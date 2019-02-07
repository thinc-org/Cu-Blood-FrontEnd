import React, { Component } from 'react';
import axios from '@/core/core'
import StatisticContent from "./StatisticContent";
import Header from "@/shared-components/TopicCenter";
import map from 'lodash/map';
import I18 from '@/core/i18n';

class Statistic extends Component {

    render() {
        const {statData, t} = this.props;
        const statNumber = map(statData, 'id');
        const statContent = map(statData, 'title');

        let contentStyle = "border-cb-grey-border border-b sm:border-b-0 w-full sm:w-1/2 text-center pb-6 sm:flex justify-center";

        return (
            <div className="bg-cb-grey-lighter">
                <div className="layout-wide flex flex-col items-center font-cu-heading">
                    <Header borderColor="border-cb-red" english={t('statisticHeaderSmall')} thai={t('statisticHeaderBig')} englishColor="text-cb-pink" />
                    <div className="flex flex-col items-center mb-10 w-full">
                        <div className="border-cb-grey-border sm:border-b flex flex-col sm:flex-row w-full justify-center items-center">
                            <div className={`${contentStyle} sm:border-r sm:pr-6`}>
                                {/* <StatisticContent number={statNumber[0]} content={statContent[0]} /> */}
                                <StatisticContent number={"252"} content={"Number of people donated blood"} />
                            </div>
                            <div className={`${contentStyle} pt-6 sm:pt-0 sm:pl-6`}>
                                {/* <StatisticContent number={statNumber[1]} content={statContent[1]} /> */}
                                <StatisticContent number={"759"} content={"Number of people participated"} />

                            </div>
                        </div>
                        <div className="flex flex-col sm:flex-row w-full items-center">
                            <div className={`${contentStyle} pt-6 sm:border-b-0 sm:border-r sm:pr-6`}>
                                {/* <StatisticContent number={statNumber[2]} content={statContent[2]} /> */}
                                <StatisticContent number={"5"} content={"Number of people died"} />
                            </div>
                            <div className={`text-center w-full sm:w-1/2 sm:border-b-0 pt-6 sm:pl-6 sm:flex sm:justify-center`}>
                                {/* <StatisticContent number={statNumber[3]} content={statContent[3]} /> */}
                                <StatisticContent number={"160"} content={"Number of people infected by disease"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default I18.withNamespaces('index')(Statistic);
