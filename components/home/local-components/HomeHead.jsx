import React, { Component } from "react";
import I18, {Link} from '@/core/i18n';

class HomeHead extends Component {
  render() {
    const { t } = this.props;
    return (
      <div className="bg-cover bg-center" style={{ backgroundImage: 'url(../../../static/home/homehead.jpg)' }}>
        <div style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="layout-wide font-cu-heading py-16 sm:py-20 md:items-start text-center md:text-left">
            <div className="text-6xl mb-6 text-white font-bold">
              CU Blood
          </div>
            <div className="text-3xl font-normal mb-6 text-grey-lightest lg:w-2/5">
              {t('homeHeaderText1')}
              <span className="text font-bold">{t('homeHeaderTextBold')}</span>
              {t('homeHeaderText2')}
            </div>
            <Link href="/u/profile">
              <button className="text-2xl bg-cb-red rounded-lg text-white px-20 py-4 mb-8 leading-none">{t('registerButton')}</button>
            </Link>
            <div className="w-auto flex justify-center md:justify-start">
              <Link href="/about" prefetch>
                <div className="flex items-center justify-center cursor-pointer">
                  <p className="text-2xl text-white font-normal mr-2">
                    {t('aboutCuButton')}
                  </p>
                  <div>
                    <img src='/static/home/forward-arrow.svg' alt="arrow" className="w-6" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default I18.withNamespaces('index')(HomeHead);
