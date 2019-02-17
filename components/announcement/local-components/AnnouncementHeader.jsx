import React from 'react';
import I18 from '@/core/i18n';

class AnnouncementHeader extends React.Component {

    render() {
      const { t } = this.props;
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-16 sm:py-20 text-center md:text-left" >
                    <div className="text-6xl font-bold mb-6 text-black">
                        {t('announcementTitle')}
                    </div>
                    <div className="text-3xl text-grey-darkest" >
                        {t('announcementIntroBody1')}<br/>
                        {t('announcementIntroBody2')}
                    </div>
                </div>
            </div>
        );
    }
}
export default I18.withNamespaces('announcement')(AnnouncementHeader);
