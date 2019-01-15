import React, {Component} from 'react';

class Statistic extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="container border-solid border-2 border-black flex flex-col items-center">
                <div className="border-sold border-black border-b-2 text-center">
                    <h2>STATITICS</h2>
                    <h1>ข้อมูลทางสถิติ</h1> 
                </div>
                <div className="flex flex-wrap">
                    <div className="border-black border-2 border-solid">
                        <h2>2,593</h2>
                    </div>
                    <div className="border-black border-2 border-solid">
                        <h2>2555</h2>
                    </div>
                    <div className="border-black border-2 border-solid">
                        <<h2>2555</h2>
                    </div>
                    <div className="border-black border-2 border-solid">
                        <<h2>2555</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Statistic;