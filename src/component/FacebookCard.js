import React from 'react'
import clock from '../asset/logo/clock.png'

class FacebookCard extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        
        return(
            
            <div className="text-black w-1/3 bg-transparent px-10 overflow-hidden flex justify-center items-center flex-col">
                <div className="bg-white" style={{borderRadius: '1rem', width: "19rem"}}>
                    <div className="bg-white flex bg-center" style={{ height: '150px', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', backgroundImage: 'url("https://picsum.photos/400/400/?random")'}}>
                    </div>
                    <div className="flex flex-row px-8 bg-white ">
                        <img src={clock} alt=""/>
                        <p className="flex items-center pl-2" style={{ color: '#8e9dc0'}}>
                            Today
                        </p>
                    </div>
                    <div className="p-8 bg-white text-sm">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia autem ea explicabo tenetur porro odio iste ipsa rerum harum! Animi aut totam quam, recusandae impedit sed minus voluptatem nobis odit.</p>
                    </div>
                    <div className="bg-grey-lightest px-10 py-4 flex justify-center" style={{borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem'}}>
                        <button className="" style={{color: '#8e9dc0'}}>View on Facebook</button>
                    </div>
                </div>
                <div>
                </div>
            </div>
            
        );
    };
}

export default FacebookCard;