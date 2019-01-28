import React from 'react';
import Link from 'next/link';

// import i18n for changing langauge
import I18 from '@/core/i18n'
import { UserInfoConsumer } from '../core/UserInfoProvider';
let i18n = I18.i18n;

const ExpandedMenu = ({ onCloseListener, className, t }) => {
    return (
        <div className={className}>
            <div style={{ width: "280px" }} className={"bg-white shadow-md h-screen fixed pin-r pin-t z-50 flex flex-col md:hidden font-cu-heading font-medium tracking-wide leading-none "}>
                <div className="flex flex-row justify-between items-center py-6 ml-5 mr-6 border-b">
                    <div onClick={onCloseListener} className="cursor-pointer flex items-center justify-center rounded-full bg-cb-grey-light" style={{ width: "36px", height: "36px" }}>
                        <img src="/static/icons/ios-close.svg" alt="Close Panel" style={{ width: "30px", height: "30px" }} />
                    </div>
                    <button style={{ width: '72px' }} onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'th' : 'en')} className="rounded-lg flex flex-row items-center ml-4 p-2 px-3 bg-cb-pink-light">
                        <img className="h-5 opacity-75" src='/static/logo/ios-globe.svg' alt="change language" />
                        <span className="ml-2 font-sans text-xs tracking-wide font-semibold text-cb-red">{t('language').toUpperCase().substring(0, 2)}</span>
                    </button>
                </div>
                <div className="tracking-normal">
                    <UserInfoConsumer>
                        {(context) => {
                            return context.isLogin ?
                                (
                                    <div className="pl-6 bg-cb-grey-light py-3">
                                        <div className="my-4 font-bold">{context.userInfo.firstName + " " + context.userInfo.lastName}</div>
                                        <ul className="list-reset text-grey-darkest flex flex-col">
                                            <li className="my-3">ไปที่หน้าโปรไฟล์</li>
                                            <li className="my-3 text-cb-red">ออกจากระบบ</li>
                                        </ul>
                                    </div>
                                )
                                :
                                null
                        }}
                    </UserInfoConsumer>
                    <ul className="list-reset text-grey-darkest flex flex-col ml-6 my-3">
                        <Link href="/about" prefetch><span onClick={onCloseListener}><a><li className="my-3">เกี่ยวกับเรา</li></a></span></Link>
                        <li className="my-3">ข้อควรรู้</li>
                        <li className="my-3">ข่าวประกาศ</li>
                        <Link href="/u/abt" prefetch><li className="my-3">ข่าวประกาศ</li></Link>
                        <UserInfoConsumer>
                            {(context) => context.isLogin ? null : <Link href="/chulaLogin" prefetch><span onClick={onCloseListener}><a><li className="my-3 text-cb-red">เข้าสู่ระบบ</li></a></span></Link>}
                        </UserInfoConsumer>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default I18.withNamespaces('common')(ExpandedMenu);