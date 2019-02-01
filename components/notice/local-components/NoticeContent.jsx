import React from 'react';
import TopicCenter from '@/shared-components/TopicCenter';
import I18 from '@/core/i18n';

class NoticeContent extends React.Component {
    render() {
        const { t } = this.props;
        const context11 = "อายุระหว่าง 17 ปีถึง 70 ปีบริบูรณ์ผู้ที่มีอายุ 17 ปีไม่ถึง 18 ปีต้องมีหนังสือยินยอมจากผู้ปกครอง";
        const context12 = "ผู้บริจาคโลหิตเป็นครั้งแรก ถ้าอายุเกิน 55 ปี – 60 ปีและให้อยู่ในดุลพินิจของแพทย์และ พยาบาล";
        const context13 = `ผู้บริจาคโลหิตอายุมากกว่า 60 ปี – 70 ปีแบ่งเกณฑ์การคัดเลือกตามอายุ 2 ช่วง ดังนี้`;
        return (
            <div className="layout-wide">
                <TopicCenter english={t('topic1Small')} englishColor="text-pink" thai={t('topic1Big')} borderColor="border-red" />
                <BulletPoint bullet={1} context={context11} />
                <BulletPoint bullet={2} context={context12} />
                <Context13 bullet={3} context={context13} t={t}/>
                <TopicCenter english={t('topic2Small')} englishColor="text-pink" thai={t('topic2Big')} borderColor="border-red" />
                <BulletPoint bullet={1} context={context21} />
                <BulletPoint bullet={2} context={context22} />
                <BulletPoint bullet={3} context={context23} />
                <TopicCenter english={t('topic3Small')} englishColor="text-pink" thai={t('topic3Big')} borderColor="border-red" />
                <BulletHeader header={"การเตรียมตัวก่อนบริจาคโลหิต"} />
                <BulletPoint bullet={1} context={context31} />
                <BulletPoint bullet={2} context={context32} />
                <BulletHeader header={"การเตรียมตัวขณะบริจาคโลหิต"} />
                <BulletPoint bullet={1} context={context33} />
                <BulletHeader header={"การเตรียมตัวหลังบริจาคโลหิต"} />
                <BulletPoint bullet={1} context={context34} />
                <NoticeContact />
            </div>
        );
    }
}


const BulletPoint = (props) => {

    const { bullet, context } = props
    return (
        <div className="bg-white font-cu-heading text-xl py-4 layout-narrow flex flex-col md:flex-row items-start justify-start">
            <div className="bg-pink-lightest w-16 h-16 text-pink-dark text-2xl p-4 rounded-full flex flex-col items-center justify-center mr-6 mb-4 md:mb-0" style={{minWidth: '64px'}}>
                {bullet}
            </div>
            <div className="flex flex-col">
                {context}
            </div>
        </div>
    )
}

const BulletHeader = (props) => {
    const { header } = props

    return (
        <div className="font-bold layout-narrow font-cu-heading text-2xl p-4">
            {header}
        </div>
    )
}

const NoticeContact = () => {
    return (
        <div className="flex justify-center text-center font-cu-heading font-medium text-2xl p-8">
            สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่ <br />
            โทร.0 2256 4300 , 0 2263 9600-99 ต่อ 1101,1760,1761
        </div>
    )
}

// Context## first # is sections; Second # is list number. For example, context11 is list 1 in section 1

const context11 = "อายุระหว่าง 17 ปีถึง 70 ปีบริบูรณ์ผู้ที่มีอายุ 17 ปีไม่ถึง 18 ปีต้องมีหนังสือยินยอมจากผู้ปกครอง";
const context12 = "ผู้บริจาคโลหิตเป็นครั้งแรก ถ้าอายุเกิน 55 ปี – 60 ปีและให้อยู่ในดุลพินิจของแพทย์และ พยาบาล";
const context13 = `ผู้บริจาคโลหิตอายุมากกว่า 60 ปี – 70 ปีแบ่งเกณฑ์การคัดเลือกตามอายุ 2 ช่วง ดังนี้`;
const Context13 = (props) => {
    const { bullet, context } = props
    return (
        <div className="bg-white font-cu-heading text-xl py-4 layout-narrow flex flex-col md:flex-row items-start justify-start">
            <div className="bg-pink-lightest w-16 h-16 text-pink-dark text-2xl p-4 rounded-full flex flex-col items-center justify-center mr-6 mb-4 md:mb-0" style={{minWidth: '64px'}}>
                {bullet}
            </div>
            <div className="flex flex-col">
                {context}
                <div>
                    <div className='py-4'>
                        <span className='text-pink font-bold'>3.1</span> การคัดเลือกผู้บริจาคโลหิตอายุมากกว่า 60 จนถึง 65 ปี (ไม่รับบริจาคในหน่วยรับบริจาคโลหิตเคลื่อนที่)
                     </div>
                    <span className=' font-semibold'>1.1 :</span> เป็นผู้บริจาคโลหิตประจํามาโดยตลอดจนกระทั่งอายุ 60 ปี <br />
                    <span className=' font-semibold'>1.2 :</span> บริจาคโลหิตได้ไม่เกินปีละ 3 ครั้ง คือทุก 4 เดือน <br />
                    <span className=' font-semibold'>1.3 :</span> ตรวจ Complete Blood Count (CBC),Serum Ferritin (SF) ปีละ 1 ครั้ง เพื่อประกอบการให้คําปรึกษาด้านสุขภาพทั่วไป และสําหรับแพทย์ใช้ผลการตรวจ SF ในการติดตามและปรับการให้ธาตุเหล็กทด<br />
                    <div className='pt-4'>
                        <span className='text-pink font-bold'>3.2</span> ผู้บริจาคโลหิตอายุมากกว่า 65 ปีจนถึง 70 ปี (ไม่รับบริจาคในหน่วยรับบริจาคโลหิตเคลื่อนที่)
                    </div>
                </div>
            </div>
        </div>
    )
}


const context21 = 'อายุระหว่าง 17 ปีถึง 70 ปีบริบูรณ์ผู้ที่มีอายุ 17 ปีไม่ถึง 18 ปีต้องมีหนังสือยินยอมจากผู้ปกครอง';
const context22 = 'ผู้บริจาคโลหิตเป็นครั้งแรก ถ้าอายุเกิน 55 ปี – 60 ปีและให้อยู่ในดุลพินิจของแพทย์และ พยาบาล';
const context23 = "ผู้บริจาคโลหิตอายุมากกว่า 60 ปี – 70 ปีแบ่งเกณฑ์การคัดเลือกตามอายุ 2 ช่วง ดังนี้";


const context31 = 'นอนหลับพักผ่อนให้เพียงพอ ตามเวลานอนปกติของตนเอง ในคืนก่อนวันที่จะมาบริจาคโลหิต';
const context32 = 'สุขภาพสมบูรณ์ทุกประการ ไม่เป็นไข้หวัด หรืออยู่ระหว่างรับประทานยาปฏิชีวนะใด ๆ เช่น ยาแก้อักเสบ แต่หยุดยาแล้วอย่างน้อย 7 วัน';
const context33 = 'สวมใส่เสื้อผ้าที่แขนเสื้อไม่คับเกินไป สามารถดึงขึ้นเหนือข้อศอกได้อย่างน้อย 3 นิ้ว';
const context34 = 'สวมใส่เสื้อผ้าที่แขนเสื้อไม่คับเกินไป สามารถดึงขึ้นเหนือข้อศอกได้อย่างน้อย 3 นิ้ว';

export default I18.withNamespaces('notice')(NoticeContent);
