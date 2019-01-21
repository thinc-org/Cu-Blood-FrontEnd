import React from 'react';
import Link from 'next/link';

// import i18n for changing langauge
import I18 from '@/core/i18n'
let i18n = I18.i18n;

const Navbar = ({onExpandListener, t}) => {
    return (
            <div className="font-cu-heading text-base font-medium tracking-normal leading-none sticky pin-t pin-l w-full shadow z-40 bg-white">
                <div className="layout-wide flex justify-between items-center md:justify-center py-2 md:py-3">
                    <div className="flex justify-between w-full">
                        <div className="flex items-center">
                            <Link href="/" prefetch><a><img src='/static/logo/logo1.svg' alt="logo" className="h-16 w-16" /></a></Link>
                            <div className="border-l mx-4 h-8 block"></div>
                            <ul className="list-reset py-6 text-grey-darkest hidden md:flex">
                                <Link href="/about" prefetch><a className="no-underline text-grey-darkest"><li className="mx-3">เกี่ยวกับเรา</li></a></Link>
                                <li className="mx-3">ข้อควรรู้</li>
                                <li className="mx-3">ข่าวประกาศ</li>
                                <li className="mx-3">ติดต่อเรา</li>
                            </ul>
                        </div>
                        <div className="flex items-center">
                            <ul className="list-reset py-6">
                                <Link href="/register" prefetch><a className="no-underline"><li className="text-cb-red hidden md:block">เข้าสู่ระบบ</li></a></Link>
                            </ul>
                            <button style={{ width: '72px' }} onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en')} className="rounded-lg hidden md:flex flex-row items-center ml-4 p-2 px-3 bg-cb-pink-light mb-2">
                                <img className="h-5 opacity-75" src='/static/logo/ios-globe.svg' alt="change language" />
                                <span className="ml-2 font-sans text-xs tracking-wide font-semibold text-cb-red">{t('language').toUpperCase().substring(0, 2)}</span>
                            </button>
                        </div>
                    </div>
                    <div className="cursor-pointer flex md:hidden flex-col mr-6 py-5" onClick={onExpandListener}>
                        <div className="border-b-2 border-black w-8"></div>
                        <div className="border-b-2 border-black w-8 pt-1"></div>
                        <div className="border-b-2 border-black w-8 pt-1"></div>
                    </div>
                </div>
            </div>
        );
};

export default I18.withNamespaces('common')(Navbar);