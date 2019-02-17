import React from 'react';
import I18 from '@/core/i18n';
class AboutHeader extends React.Component {

    render() {
      const { t } = this.props;
        return (
            <div className="font-cu-heading bg-cb-pink-light">
                <div className="layout-wide py-16 sm:py-20 text-center md:text-left" >
                    <div className="text-6xl font-bold mb-6 text-black">
                        {t('aboutHeader')}
                    </div>
                    <div className="text-3xl text-grey-darkest" >
                        {t('AboutHeaderText')}
                    </div>
                </div>
            </div>
        );
    }
}

export default I18.withNamespaces('about')(AboutHeader);
