import React from 'react';
import TextTruncate from 'react-text-truncate';
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n;

class FacebookCard extends React.Component {

    render() {
        const {post, hasMarginBottom = true } = this.props;
        const {created_time , permalink_url, full_picture, message} = post;

        i18n.language === 'th' ? moment.locale('th') : moment.locale('en');


        return (
            <div className={"bg-white flex flex-col justify-between shadow-md text-black lg:mb-0 " + (hasMarginBottom ? "mb-10" : "mb-0")} style={{ borderRadius: '1rem', width: "19rem" }}>
                <div>
                    <div className="bg-white flex bg-center bg-cover shadow-inner" style={{ height: '150px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', backgroundImage: 'url(' + full_picture + ')', backgroundColor: '#b8c2cc'}}></div>
                    <div className="flex flex-row items-center px-6 bg-white my-5">
                        <img className="w-8" src='/static/logo/clock.svg' alt="clock" />
                        <p className="pl-2 font-semibold text-lg font-cu-body" style={{ color: '#8e9dc0' }}>
                            {moment(created_time).add('years', (i18n.language === 'th' ? 543 : 0)).format('LL')}
                        </p>
                    </div>
                    <div className="px-8 pb-3 bg-white text-sm mb-3">
                        <div className="font-cu-body text-lg leading-normal select-none">
                            <TextTruncate
                                line={4}
                                truncateText="…"
                                text={message}
                            />
                        </div>
                    </div>
                </div>
                <div className="bg-cb-grey-lighter flex justify-center" style={{ borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                    <a href={permalink_url} target="_blank" rel="noopener noreferrer"><button className="px-4 py-4 font-cu-body text-lg font-bold" style={{ color: '#8e9dc0' }}>View on Facebook</button></a>
                </div>
            </div>
        );
    };
}

export default I18.withNamespaces('common')(FacebookCard);
