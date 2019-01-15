import React from 'react'
import flogo from '../assets/flogo.png'

class FacebookButton extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return(
            <div className="flex items-center border rounded-lg p-3 px-6">
                <img  src={flogo} style={{
                    height: 30,
                    width: 30,
                    marginRight: 10
                }}/>

                CU Blood
            </div>
        );
    }

}
export default FacebookButton