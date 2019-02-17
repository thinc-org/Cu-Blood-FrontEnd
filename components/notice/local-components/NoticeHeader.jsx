import React from 'react'
import I18 from '@/core/i18n'

class NoticeHeader extends React.Component {
    render() {
      const { t, scrollToTopic } = this.props;
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-16 sm:py-20 flex flex-col items-center md:items-start">
                    <span className="text-4xl sm:text-6xl font-bold mb-8 text-black">{t('noticeHeader')}</span>
                    <div className="cursor-pointer" onClick={() => scrollToTopic(0)}><Subheader thai={t('topic1Big')} english={t('topic1Small')} /></div>
                    <div className="cursor-pointer" onClick={() => scrollToTopic(1)}><Subheader thai={t('topic2Big')} english={t('topic2Small')} /></div>
                    <div className="cursor-pointer" onClick={() => scrollToTopic(2)}><Subheader thai={t('topic3Big')} english={t('topic3Small')} hasLineBreak={false} /></div>
                </div>
            </div>
        );
    }
}


const Subheader = (props) => {
    const { thai, english, hasLineBreak = true } = props
    return (
        <div className="text-xl sm:text-2xl flex flex-col items-center text-center md:items-start md:text-left">
            <span className="">
                {thai}
            </span>
            <span className="text-pink-dark">
                {english}
            </span>
            <LineBreak hasLineBreak={hasLineBreak} />
        </div>
    )
}

const LineBreak = ({ hasLineBreak = true }) => {
    return hasLineBreak ?
        (
            <div className="border-solid border-grey my-6 mx-0 w-64" style={{ borderBottomWidth: '0.05rem' }}></div>
        )
        :
        (
            null
        )
}

export default I18.withNamespaces('notice')(NoticeHeader);
