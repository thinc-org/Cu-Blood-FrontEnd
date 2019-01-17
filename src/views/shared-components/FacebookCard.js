import React from 'react';
import clock from '../../assets/logo/clock.png';
import FacebookData from './FacebookData'


class FacebookCard extends React.Component {

    render() {
        let backgroundPhotoURL = "https://picsum.photos/400/400/?random";
        
        
        return(
            
            <div className="text-black lg:w-1/3 bg-transparent flex lg:justify-center  content-center overflow-hidden mb-12">
                <div className="bg-white" style={{borderRadius: '1rem', width: "19rem"}}>
                    <div className="bg-white flex bg-center" style={{ height: '150px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', backgroundImage: 'url(' + backgroundPhotoURL + ')'}}>
                    </div>
                    <div className="flex flex-row px-3 bg-white mt-2">
                        <img src={clock} alt=""/>
                        <p className="flex items-center pl-2 font-bold" style={{ color: '#8e9dc0'}}>
                            Today
                        </p>
                    </div>
                    <div className="px-8 pb-3 bg-white text-sm">
                            <FacebookData />
                    </div>
                    <div className="bg-grey-lightest px-10 py-4 flex justify-center" style={{borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem'}}>
                        <button className="" style={{color: '#8e9dc0'}}>View on Facebook</button>
                    </div>
                </div>

            </div>
            
        );
    };
}

export default FacebookCard;