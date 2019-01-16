import React from 'react';
import FacebookCard from './FacebookCard';
import FacebookButton from './FacebookButton'


class FacebookZone extends React.Component {
    // constructor(props) {
    //     super(props);

    // }



    render () {

        return (
            <div id="root" className=" pt-10 flex flex-col items-center text-white " style={{backgroundColor: '#8e9dc0'}}>
                <div className=" ">
                    OUR ACTIVITY
                </div>

                <div className="font-bold font text-3xl">
                    CU Blood on Facebook
                </div>

                <hr className="border-2 w-32 mt-6 mb-12" />

                <div className="flex lg:justify-around flex-col lg:flex-row w-screen">
                    <FacebookCard />
                    <FacebookCard />
                    <FacebookCard />
                </div>
                


                <div className="my-12">
                    <FacebookButton />
                </div>


            </div>
                

        )
    }
}

export default FacebookZone;
