import React from 'react';
import I18 from '@/core/i18n';
let i18n = I18.i18n;

class AboutContent extends React.Component {
    render() {
      const { t } = this.props;
        return (
            <div className='layout-narrow py-8'>
                <Paragraph title={<div className='font-bold'>{t('aboutContentHeader')}</div>} body={t('aboutContentBody1')} />
                <Paragraph title={t('aboutContentsubHeader1')} body={t('aboutContentsubBody1')} />
                <Paragraph title={t('aboutContentsubHeader2')} body={t('aboutContentsubBody2')} />
                <Paragraph title={t('aboutContentsubHeader3')} body={t('aboutContentsubBody3')} />
                <Paragraph title={t('aboutContentsubHeader4')} body={
                    <div>
                        <div className='py-4'>
                            {t('aboutContentsubBody4-1')}
                        </div >
                        <div className='py-4 font-semibold'>
                            “ บริจาคโลหิต 1 ล้านซีซีในโอกาสครบรอบวิศวฯจุฬาฯ 100 ปี ”
                        </div>
                        <div className='py-4'>
                            โดยในปีแรกกําหนดให้ผู้เข้าร่วมมีเพียงนิสิตปัจจุบัน และนิสิตเก่า คณะวิศวกรรมศาสตร์เท่านั้น ต่อมาจึงได้ขยายไปยังนิสิต นิสิตเก่า คณาจารย์และบุคลากรของทุกคณะหรือ หน่วยงานภายใน จุฬาลงกรณ์มหาวิทยาลัย ด้วยความร่วมแรงร่วมใจและการสนับสนุน จากทุกภาคส่วนทําให้เกิดโครงก
                        </div>
                        <div className='py-4 text-pink'>
                            “ เลือดชมพู CUB0157 หรือ CU Blood ”
                        </div>
                    </div>
                } />

                <hr className="border-solid border-grey w-full mt-8" style={{ borderBottomWidth: '0.05rem', maxWidth: '600px' }} />
            </div>
        )
    }
}

const Paragraph = (props) => {
    const { title, body } = props;

    return (
        <div className='flex flex-col font-cu-heading text-2xl pt-10 items-center md:items-start text-center md:text-left'>
            <div className='font-medium pb-6 text-4xl'>
                {title}
            </div>
            <div>
                {body}
            </div>
        </div>
    )
}
export default I18.withNamespaces('about')(AboutContent);
