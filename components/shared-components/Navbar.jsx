import React, { Component } from 'react';
import '../../static/css/nav.css';
import { UserInfoConsumer } from '../core/UserInfoProvider';
import I18, { Link } from '@/core/i18n'
let i18n = I18.i18n;

class Navbar extends Component {
    render() {
        const { onExpandListener, t } = this.props;
        return (
            <div className="font-cu-heading text-base font-medium tracking-normal leading-none sticky pin-t pin-l w-full shadow z-40 bg-white">
                <div className="layout-wide flex justify-between items-center md:justify-center py-1 sm:py-2 md:py-3">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" prefetch><a><img src='/static/logo/logo1.svg' alt="logo" className="h-10 sm:h-16 sm:w-16" /></a></Link>
                            <div className="border-l mx-4 h-5 sm:h-8 block"></div>
                            <ul className="list-reset py-6 text-grey-darkest hidden md:flex">
                                <Link href="/about" prefetch><a className="no-underline text-grey-darkest"><li className="mx-3">{t('about')}</li></a></Link>
                                <Link href="/notice" prefetch><a className="no-underline text-grey-darkest"><li className="mx-3">{t('notice')}</li></a></Link>
                                <Link href="/announcement" prefetch><a className="no-underline text-grey-darkest"><li className="mx-3">{t('announcement')}</li></a></Link>
                                <Link href="/contact" prefetch><a className="no-underline text-grey-darkest"><li className="mx-3">{t('contact')}</li></a></Link>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <ul className="list-reset py-6 flex">
                                <UserInfoConsumer>
                                    {(context) => <LoginOrLogout isLogin={context.isLogin} logout={context.logout} username={context.userInfo.username} t={t} />}
                                </UserInfoConsumer>
                            </ul>
                            <button style={{ width: '72px' }} onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en')} className="rounded-lg hidden md:flex flex-row items-center ml-4 p-2 px-3 bg-cb-pink-light mb-2">
                                <img className="h-5 opacity-75" src='/static/logo/ios-globe.svg' alt="change language" />
                                <span className="ml-2 font-sans text-xs tracking-wide font-semibold text-cb-red">{t('language').toUpperCase().substring(0, 2)}</span>
                            </button>
                        </div>
                    </div>
                    <div className="cursor-pointer flex md:hidden flex-col sm:py-5" onClick={onExpandListener}>
                        <div className="border-b-2 border-black w-8"></div>
                        <div className="border-b-2 border-black w-8 pt-1"></div>
                        <div className="border-b-2 border-black w-8 pt-1"></div>
                    </div>
                </div>
            </div>
        );
    }
}

const LoginOrLogout = ({ isLogin, logout, username, t }) => {
    if (isLogin === true) {
        return (
            <React.Fragment>
                <Link href="/u/profile" prefetch><a className="no-underline"><li className="text-cb-red hidden md:block mr-5 special-truncate">{username}</li></a></Link>
                <a className="no-underline cursor-pointer" onClick={logout}><li className="text-cb-red hidden md:block">{t('logout')}</li></a>
            </React.Fragment>
        )
    } else if (isLogin === false) {
        return (
            <Link href="/chulaLogin" prefetch><a className="no-underline"><li className="text-cb-red hidden md:block">{t('login')}</li></a></Link>
        )
    } else {
        return (
            null
        )
    }
}

export default I18.withNamespaces('common')(Navbar);