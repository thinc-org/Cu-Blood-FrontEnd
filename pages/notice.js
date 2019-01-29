import React from 'react';
import NoticeHeader from '@/notice/local-components/NoticeHeader'
import Footer from '@/shared-components/Footer';
import FacebookButton from '@/shared-components/FacebookButton';
import I18 from '@/core/i18n';

class Notice extends React.Component {
    render() {
        return (
            <div>
                <NoticeHeader />
            </div>
        );
    }
}


export default I18.withNamespaces('common')(Notice)