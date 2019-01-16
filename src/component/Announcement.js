import React, {Component} from 'react';
import AnnounceHead from './AnnounceHead';

class Announcement extends Component {
    render() {
        return(
            <div className="bg-white flex justify-center">
                <div className="font-cu-heading w-3/5 flex flex-col items-center my-10">
                    <AnnounceHead />
                    <div className="text-center mt-10 border-cb-red border-b-8">
                        <h2 className="text-base tracking-wide text-cb-pink mb-1">Announcement</h2>
                        <h2 className="text-3xl mb-3">ข่าวประกาศ</h2>
                    </div>
                    <div>
                        Class
                    </div>
                    <div>
                        End
                    </div>
                </div>
            </div>
        );
    }
}

export default Announcement;