import React from 'react';
import FacebookCard from './FacebookCard';

class FacebookZone extends React.Component {
    // constructor(props) {
    //     super(props);

    // }



    render () {

        return (
            <div id="root" className="bg-indigo-light pt-10 flex flex-col items-center text-white">
                <div className=" ">
                    OUR ACTIVITY
                </div>

                <div className="font-bold">
                    CU Blood on Facebook
                </div>

                <hr className=""/>

                <div className="w-screen flex justify-around">
                    
                    <FacebookCard />
                    <FacebookCard />
                    <FacebookCard />
                </div>

            </div>
                

        )
    }
}

export default FacebookZone;
