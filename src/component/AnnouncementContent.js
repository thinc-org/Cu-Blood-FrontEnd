import React, {Component} from 'react';
import Yell from '../asset/homePage/megaphone.png';
import Arrow from '../asset/homePage/forward-arrow2.png';

class AnnouncementCont extends Component {
    render() {
        const [title1, title2, title3, title4, title5] = this.props.title;
        const [date1, date2, date3, date4, date5] = this.props.date;
        
        return(
            <div>
                {this.content(`จุฬาฯ ลงนามบันทึกความเข้าใจกับ North-Eastern Hill University (NEHU)`, `จันทร์, 14 มกราคม 2562`)}
                {this.content(title1, date1)}
                {this.content(title2, date2)}
                {this.content(title3, date3)}
                {this.content(title4, date4)}
                <div className="flex w-full items-start justify-end mt-8">
                    <p className="font-semibold mr-2" style={{colo: "#333333"}}>ดูข่าวประกาศทั้งหมด</p>
                    <img src={Arrow} alt="arrow" className="w-6" />
                </div>
            </div>
        );
    }
    
    content = (title, date) => {
        return (
            <div className="border-cb-grey border-b flex items-center py-4">
                <img src={Yell} alt="Megaphone" className="w-8 mr-6"/>
                <div>
                    <p className="text-xl font-semibold mb-1" style={{color: "#333333"}}>{title}</p>
                    <p className="text-cb-pink font-medium font-cu-body">{date}</p>
                </div> 
            </div>
        );
    }
}

export default AnnouncementCont;