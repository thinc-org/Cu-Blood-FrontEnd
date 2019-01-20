import React from 'react';
// import FacebookData from './FacebookData'

class FacebookCard extends React.Component {

    render() {
        const {title, body, pictureUrl, url} = this.props;
        // let backgroundPhotoURL = "https://picsum.photos/400/400/?random";
        
        return(
            <div className="text-black lg:w-1/3 bg-transparent flex lg:justify-center lg:self-start self-center overflow-show mb-10">
                <div className="bg-white shadow-lg" style={{borderRadius: '1rem', width: "19rem"}}>
                    <div className="bg-white flex bg-center" style={{ height: '150px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', backgroundImage: 'url(' + pictureUrl + ')'}}>
                    </div>
                    <div className="flex flex-row items-center px-6 bg-white my-6">
                        <img className="w-10" src='/static/logo/clock.svg' alt="clock"/>
                        <p className="pl-2 font-semibold text-lg" style={{ color: '#8e9dc0'}}>
                            Today
                        </p>
                    </div>
                    <div className="px-8 pb-3 bg-white text-sm mb-6">
                        <div>
                            <p className="font-bold font-cu-heading leading-normal mb-2">
                                {title}
                            </p>
                            <p className="font-cu-body leading-none">
                                {body}
                            </p>
                        </div>
                    </div>
                    <div className="bg-cb-grey-lighter flex justify-center" style={{borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem'}}>
                        <a href={url}><button className="px-4 py-4" style={{color: '#8e9dc0'}}>View on Facebook</button></a>
                    </div>
                </div>

            </div>
            
        );
    };
}

export default FacebookCard;
