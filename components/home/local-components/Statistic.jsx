import React, { Component } from 'react';
import axios from '@/core/core'
import StatisticContent from "./StatisticContent";
import Header from "@/shared-components/TopicCenter";
import find from 'lodash/find';
import I18 from '@/core/i18n';

class Statistic extends Component {

    convertStatToData(statData) {
        let obj = {};
        let data = [0, 0, 0, 0];
        for(let i = 0; i < 11; i++) {
            obj = find(statData, ['bloodType', i]);
            data[Math.floor(i/4)] += obj ? Number(obj.count) : 0;
        }
        return data;
    }

    render() {
        const { statData, t, year } = this.props;
        let data = this.convertStatToData(statData)
        let contentStyle = "border-cb-grey-border border-b sm:border-b-0 w-full sm:w-1/2 text-center pb-6 sm:flex justify-center";

        return (
            <div className="bg-cb-grey-lighter">
                <div className="layout-wide flex flex-col items-center font-cu-heading">
                    <Header borderColor="border-cb-red" english={t('statisticHeaderSmall') + year} thai={t('statisticHeaderBig') + year} englishColor="text-cb-pink" />
                    <div className="relative w-full">
                        <div className="flex flex-col items-center sm:mb-10 w-full">
                            <div className="border-cb-grey-border sm:border-b flex flex-col sm:flex-row w-full justify-center items-center">
                                <div className={`${contentStyle} sm:border-r sm:pr-6`}>
                                    {/* <StatisticContent number={statNumber[0]} content={statContent[0]} /> */}
                                    <StatisticContent number={data[0]} content={t('bloodTypeA')} />
                                </div>
                                <div className={`${contentStyle} pt-6 sm:pt-0 sm:pl-6`}>
                                    {/* <StatisticContent number={statNumber[1]} content={statContent[1]} /> */}
                                    <StatisticContent number={data[1]} content={t('bloodTypeB')} />

                                </div>
                            </div>
                            <div className="flex flex-col sm:flex-row w-full items-center">
                                <div className={`${contentStyle} pt-6 sm:border-b-0 sm:border-r sm:pr-6`}>
                                    {/* <StatisticContent number={statNumber[2]} content={statContent[2]} /> */}
                                    <StatisticContent number={data[2]} content={t('bloodTypeO')} />
                                </div>
                                <div className={`text-center w-full sm:w-1/2 sm:border-b-0 pt-6 sm:pl-6 sm:flex sm:justify-center`}>
                                    {/* <StatisticContent number={statNumber[3]} content={statContent[3]} /> */}
                                    <StatisticContent number={data[3]} content={t('bloodTypeAB')} />
                                </div>
                            </div>
                            <div className="sm:absolute w-full h-full">
                                <div className="flex justify-center items-center w-full h-full">
                                    <div className="bg-white shadow py-2 px-8 sm:px-0 md:px-8  rounded-lg mt-10 sm:mt-0 mb-10 sm:mb-10">
                                        <StatisticContent number={data[0] + data[1] + data[2] + data[3]} content={t('totalDonors')} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default I18.withNamespaces('index')(Statistic);
