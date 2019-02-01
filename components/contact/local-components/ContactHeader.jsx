import React, { Component } from 'react';
import I18 from '@/core/i18n';

class ContactHeader extends Component {
    render() {
      const { data = [],t } = this.props;
        return (
            <div className="bg-cb-pink-light">
                <div className="layout-wide flex flex-col py-16 font-cu-heading text-center md:text-left">
                    <div className="text-6xl text-black font-bold mb-6">{ t('contactHeader')}</div>
                    <div className="text-3xl flex flex-col text-grey-darkest">
                        <div className="font-semibold">{ t('addressLine1')}</div>
                        <div>{ t('addressLine2')}</div>
                        <div>{ t('addressLine3')}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default I18.withNamespaces('contact')(ContactHeader);
