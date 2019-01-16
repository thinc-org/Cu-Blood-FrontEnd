import React, {Component} from 'react';
import Yell from '../asset/homePage/megaphone.png';
import Arrow from '../asset/homePage/forward-arrow2.png';

class AnnounceCont extends Component {
    render() {
        return(
            <div>
                {this.content(`จุฬาฯ ลงนามบันทึกความเข้าใจกับ North-Eastern Hill University (NEHU)`, `จันทร์, 14 มกราคม 2562`)}
                {this.content(this.props.title[0], this.props.date[0])}
                {this.content(this.props.title[1], this.props.date[1])}
                {this.content(this.props.title[2], this.props.date[2])}
                {this.content(this.props.title[3], this.props.date[3])}
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

export default AnnounceCont;