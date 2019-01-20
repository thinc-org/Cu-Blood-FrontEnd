import React, { Component } from 'react';
import axios from '@/core/core'
import StatisticContent from "./StatisticContent";
import Header from "@/shared-components/PageHeader";
import map from 'lodash/map';

class Statistic extends Component {
    
    render() {
        const data = this.props.statData;
        const statNumber = map(data, 'id');
        const statContent = map(data, 'title');

        let contentStyle = "border-cb-grey-border border-b sm:border-b-0 w-full sm:w-1/2 text-center pb-6 sm:flex justify-center";

        return (
            <div className="flex flex-col items-center font-cu-heading bg-white">
                <Header borderColor="border-cb-red" english="STATISTIC" thai="ข้อมูลทางสถิติ" englishColor="text-cb-pink" />
                <div className="flex flex-col items-center mb-10 px-4">
                    <div className="border-cb-grey-border sm:border-b flex flex-col sm:flex-row w-full justify-center items-center">
                        <div className={`${contentStyle} sm:border-r sm:pr-6`}>
                            <StatisticContent number={statNumber[0]} content={statContent[0]} />
                        </div>
                        <div className={`${contentStyle} pt-6 sm:pt-0 sm:pl-6`}>
                            <StatisticContent number={statNumber[1]} content={statContent[1]} />
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row w-full items-center">
                        <div className={`${contentStyle} pt-6 sm:border-b-0 sm:border-r sm:pr-6`}>
                            <StatisticContent number={statNumber[2]} content={statContent[2]} />
                        </div>
                        <div className={`text-center w-full sm:w-1/2 sm:border-b-0 pt-6 sm:pl-6 sm:flex sm:justify-center`}>
                            <StatisticContent number={statNumber[3]} content={statContent[3]} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistic;