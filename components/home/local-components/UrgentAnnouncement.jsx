import React, { Component } from "react";
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n;

class UrgentAnnouncement extends Component {
  render() {
    const { commonsData = {}, t } = this.props;
    i18n.language === 'th' ? moment.locale('th') : moment.locale('en');
    const startDate = moment(commonsData.startDate);
    const endDate = moment(commonsData.endDate);
    const regisEndDate = moment(commonsData.registrationEndDate);
    const regisStartDate = moment(commonsData.registrationStartDate);
    const now = moment();
    const startAndEndMonth = startDate.format('M') === endDate.format('M') 
      ? startDate.format('MMMM') 
      : startDate.format('MMM') + '-' + endDate.format('MMM');
    
    return commonsData.startDate ?
    (
      <div className="bg-cb-red flex justify-center sm:block">
        <div className="flex flex-col sm:flex-row py-6 justify-center sm:items-center font-cu-heading text-white">
          <div className=" sm:pb-0 sm:pr-4 md:pr-8 mb-3 sm:mb-0 flex justify-start sm:justify-end">
            {this.contentDate(startDate.format('D') + "-" + endDate.format('D'), startAndEndMonth)}
            {this.contentDesc(t('donationDate'), `${t('left')} ${startDate.diff(now, 'days')} ${t('days')}`)}
          </div>
          <div className="sm:border-l border-t w-full sm:w-px sm:h-16 special-color"></div>
          <div className=" sm:pl-4 md:pl-8 mt-3 sm:mt-0 flex items-end">
            {regisStartDate > now ? this.contentDate(regisStartDate.format('D'), regisStartDate.format('MMMM')) : this.contentDate(regisEndDate.format('D'), regisEndDate.format('MMMM'))}
            {regisStartDate > now ? this.contentDesc(t('startOfRegistrationDate'), `${t('left')} ${regisStartDate.diff(now, 'days')} ${t('days')}`) : this.contentDesc(t('endOfRegistrationDate'), `${t('left')} ${regisEndDate.diff(now, 'days')} ${t('days')}`)}
          </div>
        </div>
      </div>
    ) 
    :
    (
      null
    )
  }

  contentDate = (date, month) => {
    return (
      <div className="mr-4 text-right">
        <p className="text-3xl font-bold special-wrap">{date}</p>
        <p className="text-xl font-normal leading-none" >{month}</p>
      </div>
    );
  }

  contentDesc = (title, time) => {
    return (
      <div className="flex flex-col">
        <p className="text-3xl">{title}</p>
        <p className="text-xl font-normal leading-none" style={{ color: 'rgba(255, 255, 255, 0.5)' }}>{time}</p>
      </div>
    )
  }
}

export default I18.withNamespaces('index')(UrgentAnnouncement);
