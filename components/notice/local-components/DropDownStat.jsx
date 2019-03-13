import React, {Component} from 'react';
import I18 from '@/core/i18n';
import '../../../static/css/notice.css';

class DropDownStat extends Component {
    constructor (props) {
        super(props);
    }

    render() {
        const { t } = this.props;
        return(
            <div className="bg-cb-grey-lighter py-10">
                <div className="layout-narrow font-cu-heading text-2xl">
                    <div className="mb-6 text-cb-pink">{t("statNumDonators")}</div>
                    <div className="flex items-center justify-center flex-wrap">
                        {this.numberList("100", `${t("statBloodGroup")} A`, "blood")}
                        {this.numberList("100", `${t("statBloodGroup")} B `, "blood")}
                        {this.numberList("100", `${t("statBloodGroup")} O`, "blood")}
                        {this.numberList("100", `${t("statBloodGroup")} AB`, "blood")}
                        {this.numberList("400", t("statDonatorTotal"), "blood")}
                    </div>
                    <div className="text-cb-pink mb-6">{t("statBloodTotal")}</div>
                    <div className="w-full text-center text-cb-red text-4xl mb-6">10,000 CC</div>
                    <div className="mb-6 text-cb-pink">{t("statNumEnroll")}</div>
                    <div className="flex justify-center items-center flex-wrap">
                        {this.numberList("2000", t("statMorning"), "enroll")}
                        {this.numberList("2000", t("statNoon"), "enroll")}
                        {this.numberList("2000", t("statAfternoon"), "enroll")}
                    </div>
                    <div className="mb-6 text-cb-pink">{t("statNewDonators")}</div>
                    <div className="w-full text-center text-cb-red text-4xl">2 {t("statPeople")}</div>
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
            classNameDes = "w-1/2 special-third-width";
        }
        
        if (number >= 10000) {
            number = number / 1000;
            number = number.toFixed(1);
            number = number + "k";
        }
        return(
            <div className={`flex flex-col items-center mb-6 ${classNameDes}`}>
                <div className="text-cb-red text-4xl">{number}</div>
                <div className="text-grey-darker text-xl">{description}</div>
            </div>
        );
    }
}

export default I18.withNamespaces('notice')(DropDownStat);