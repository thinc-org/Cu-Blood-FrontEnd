import React from 'react';
import clock from '../../assets/logo/clock.svg';
import FacebookData from './FacebookData'


class FacebookCard extends React.Component {

    render() {
        let backgroundPhotoURL = "https://picsum.photos/400/400/?random";
        
        
        return(
            
            <div className="text-black lg:w-1/3 bg-transparent flex lg:justify-center  content-start overflow-show mb-10">
                <div className="bg-white shadow-lg" style={{borderRadius: '1rem', width: "19rem"}}>
                    <div className="bg-white flex bg-center" style={{ height: '150px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', backgroundImage: 'url(' + backgroundPhotoURL + ')'}}>
                    </div>
                    <div className="flex flex-row items-start px-6 bg-white my-6">
                        <img className="w-6 pt-1" src={clock} alt="clock"/>
                        <p className="pl-2 font-bold text-lg" style={{ color: '#8e9dc0'}}>
                            Today
                        </p>
                    </div>
                    <div className="px-8 pb-3 bg-white text-sm mb-6">
                            <FacebookData />
                    </div>
                    <div className="bg-cb-grey-lighter flex justify-center" style={{borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem'}}>
                        <button className="px-4 py-4" style={{color: '#8e9dc0'}}>View on Facebook</button>
                    </div>
                </div>

            </div>
            
        );
    };
}

export default FacebookCard;
