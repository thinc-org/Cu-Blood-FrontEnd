import React, { Component } from 'react';
import I18 from '@/core/i18n';
import Form, { Selector } from '@/shared-components/Form';
import find from 'lodash/find';

class DropDownStat extends Component {
    constructor(props) {
        super(props);
    }

    convertStatToData(statData) {
        let obj = {};
        let data = [0, 0, 0, 0];
        for (let i = 0; i < 16; i++) {
            obj = find(statData, ['bloodType', i]);
            data[Math.floor(i / 4)] += obj ? Number(obj.count) : 0;
        }
        return data;
    }

    convertInsightToData(insightData) {
        let totalVolume = 0;
        let firstEnrollmentCount = 0;
        let popularTimes = [0, 0, 0];
        insightData && insightData.map(obj => {
            totalVolume += obj.totalVolume ? Number(obj.totalVolume) : 0;
            firstEnrollmentCount += obj.firstEnrollmentCount ? Number(obj.firstEnrollmentCount) : 0;
            popularTimes[0] += (obj.popularTimes && obj.popularTimes[0]) ? Number(obj.popularTimes[0].count) : 0;
            popularTimes[1] += (obj.popularTimes && obj.popularTimes[1]) ? Number(obj.popularTimes[1].count) : 0;
            popularTimes[2] += (obj.popularTimes && obj.popularTimes[2]) ? Number(obj.popularTimes[2].count) : 0;
        })
        return {
            totalVolume,
            firstEnrollmentCount,
            popularTimes,
        }
    }

    render() {
        const { t, year, data, onYearChange } = this.props;
        const projectInsightsRawData = data[0];
        const projectInsights = this.convertInsightToData(projectInsightsRawData);
        const bloodTypesRawData = data[1];
        const bloodTypes = this.convertStatToData(bloodTypesRawData);
        const { popularTimes, firstEnrollmentCount, totalVolume } = projectInsights;

        const choices = [];
        for (let i = (new Date()).getFullYear(); i >= 2019; i--) {
            choices.push(i);
        }

        return (
            <div className="bg-cb-grey-lighter pb-10 pt-5">
                <div className="layout-narrow font-cu-heading text-2xl">
                    <Form text={t('year')} width="full" smWidth="24">
                        <Selector choices={choices} name="year" value={(new Date()).getFullYear() - year} onChange={onYearChange} />
                    </Form>
                    <div className="mb-6 text-cb-pink mt-5">{t("statNumDonators")}</div>
                    <div className="flex items-center justify-center flex-wrap">
                        {this.numberList(bloodTypes[0], `${t("statBloodGroup")} A`, "blood")}
                        {this.numberList(bloodTypes[1], `${t("statBloodGroup")} B `, "blood")}
                        {this.numberList(bloodTypes[2], `${t("statBloodGroup")} O`, "blood")}
                        {this.numberList(bloodTypes[3], `${t("statBloodGroup")} AB`, "blood")}
                        {this.numberList(bloodTypes[0] + bloodTypes[1] + bloodTypes[2] + bloodTypes[3], t("statDonatorTotal"), "blood")}
                    </div>
                    <div className="mb-6 text-cb-pink">{t("statNumEnroll")}</div>
                    <div className="sm:flex justify-between px-4">
                        {this.numberList(popularTimes[0] + " " + t("statPeople"), t("statMorning"), "enroll")}
                        {this.numberList(popularTimes[1] + " " + t("statPeople"), t("statAfternoon"), "enroll")}
                        {this.numberList(popularTimes[2] + " " + t("statPeople"), t("statEvening"), "enroll")}
                    </div>
                    <div className="flex justify-center items-center flex-wrap">
                        <div className="flex flex-col sm:flex-row w-full justify-between">
                            <div>
                                <div className="text-cb-pink mb-6">{t("statBloodTotal")}</div>
                                <div className="w-full text-center text-cb-red text-4xl mb-6">{totalVolume} CC</div>
                            </div>
                            <div>
                                <div className="mb-6 text-cb-pink">{t("statNewDonators")}</div>
                                <div className="w-full text-center text-cb-red text-4xl">{firstEnrollmentCount} {t("statPeople")}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    numberList = (number, description, type) => {
        let classNameDes;
        switch (type) {
            case "blood":
                classNameDes = "w-1/2 sm:w-1/5";
                break;

            case "enroll":
                classNameDes = "";
        }

        if (number >= 10000) {
            number = number / 1000;
            number = number.toFixed(1);
            number = number + "k";
        }
        return (
            <div className={`flex flex-col items-center mb-6 ${classNameDes}`}>
                <div className="text-cb-red text-4xl">{number}</div>
                <div className="text-grey-darker text-xl">{description}</div>
            </div>
        );
    }
}

export default I18.withNamespaces('about')(DropDownStat);