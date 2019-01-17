import React from 'react';
import clock from '../../assets/logo/clock.svg';
import FacebookData from './FacebookData'


class FacebookCard extends React.Component {

    render() {
        let backgroundPhotoURL = "https://picsum.photos/400/400/?random";
        
        
        return(
            
            <div className="text-black lg:w-1/3 bg-transparent flex lg:justify-center lg:self-start self-center overflow-show mb-12">
                <div className="bg-white shadow-lg" style={{borderRadius: '1rem', width: "19rem"}}>
                    <div className="bg-white flex bg-center " style={{ height: '150px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', backgroundImage: 'url(' + backgroundPhotoURL + ')'}}>
                    </div>
                    <div className="flex flex-row px-6 bg-white mt-2">
                        <img className="w-10 py-4" src={clock} alt="clock"/>
                        <p className="flex items-center pl-2 font-semibold" style={{ color: '#8e9dc0'}}>
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
