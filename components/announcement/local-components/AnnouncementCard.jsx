import React, {Component} from 'react'
import moment from 'moment';
import I18 from '@/core/i18n';
let i18n = I18.i18n;

export default class AnnouncementCard extends Component {
    render() {
        const { text, date, image } = this.props
        i18n.language === 'th' ? moment.locale('th') : moment.locale('en');
        
        return (
            <div className={"bg-white flex flex-col shadow-md text-black rounded-lg lg:mb-0 m-5 mt-10"} style={{ width: "19rem" }}>
                <div className="bg-white flex bg-center bg-cover" style={{ height: '150px', borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem', backgroundImage: "url(" + image + ")"}}></div>
                <div className="flex flex-row items-center px-6 bg-white my-5">
                    <div className="pl-2 font-semibold text-lg font-cu-body text-pink-dark">
                        {moment(date).format('DD MMMM YYYY')}
                    </div>
                </div>
                <div className="px-8 pb-3 bg-white text-sm mb-3 font-cu-body text-lg leading-normal select-none">
                    {text}
                </div>
            </div>

        )
    }
}