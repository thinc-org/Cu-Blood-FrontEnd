import React from 'react';
import I18 from '@/core/i18n';

class AnnouncementHeader extends React.Component {
    render() {
      const { t, text } = this.props;
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-16 sm:py-20 text-center md:text-left" >
                    <div className=" font-bold mb-6 text-black text-4xl sm:text-6xl">
                        {t('announcementTitle')}
                    </div>
                    <div className="text-3xl text-grey-darkest" >
                        {text}
                    </div>
                </div>
            </div>
        );
    }
}
export default I18.withNamespaces('announcement')(AnnouncementHeader);
