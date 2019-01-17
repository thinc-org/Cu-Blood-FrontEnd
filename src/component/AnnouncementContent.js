import React, {Component} from 'react';
import Yell from '../asset/homePage/megaphone.png';
import Arrow from '../asset/homePage/forward-arrow2.png';

class AnnouncementContent extends Component {
    render() {
        const {title,date} = this.props;
        
        return(
            <div>
                {this.content(`จุฬาฯ ลงนามบันทึกความเข้าใจกับ North-Eastern Hill University (NEHU)`, `จันทร์, 14 มกราคม 2562`)}
                {this.content(title[1], date[1])}
                {this.content(title[2], date[2])}
                {this.content(title[3], date[3])}
                {this.content(title[4], date[4])}
                <div className="flex w-full items-center justify-end mt-8">
                    <p className="font-normal mr-2" style={{colo: "#333333"}}>ดูข่าวประกาศทั้งหมด</p>
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
                    <p className="text-xl font-normal mb-1" style={{color: "#333333"}}>{title}</p>
                    <p className="text-cb-pink font-medium font-cu-body">{date}</p>
                </div> 
            </div>
        );
    }
}

export default AnnouncementContent;