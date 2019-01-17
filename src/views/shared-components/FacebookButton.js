import React from 'react'
import flogo from '../../assets/logo/flogo.svg'

class FacebookButton extends React.Component {

    render() {
        return(
            <div className="flex items-center border rounded-lg p-3 px-6">
                <img  src={flogo} style={{
                    height: 30,
                    width: 30,
                    marginRight: 10
                }} alt="Facebook Logo"/>

                CU Blood
            </div>
        );
    }

}
export default FacebookButton