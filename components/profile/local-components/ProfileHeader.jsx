import React, { Component } from 'react';
import { UserInfoConsumer } from '@/core/UserInfoProvider';
import I18 from '@/core/i18n';

class ProfileHeader extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="bg-cb-pink-light">
                <div className="layout-wide flex flex-col py-16 sm:py-20 font-cu-heading text-center md:text-left">
                    <div className="text-6xl text-black font-bold mb-6">{t('profileHeader')}</div>
                    <UserInfoConsumer>
                        {({userInfo}) => {
                            if ((userInfo === null) || (userInfo === undefined)) {
                                return <div></div>
                            }
                            return(
                                <div className="text-3xl flex flex-col text-grey-darkest">
                                    <div className="font-semibold">{`${userInfo.firstName} ${userInfo.lastName}`}</div>
                                    <div>{userInfo.username}</div>
                                    <div>{userInfo.phoneNumber}</div>
                                </div>
                            );
                        }}
                    </UserInfoConsumer>
                </div>
            </div>
        );
    }
}

export default I18.withNamespaces('profile')(ProfileHeader);