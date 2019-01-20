import React from 'react'

class FacebookButton extends React.Component {

    render() {
        return(
            <div className="py-10 flex flex-col items-center text-white" style={{ backgroundColor: '#8e9dc0' }}>
                <div className="flex items-center rounded-lg py-2 px-6 font-cu-heading" style={{backgroundColor: "#7685a6"}}>
                    <img className="" src="/static/logo/flogo.svg" style={{
                        width: 30,
                        marginRight: 10
                    }} alt="Facebook Logo"/>
                    <div className="font-semibold text-lg">CU Blood</div>
                </div>
            </div>
        );
    }

}
export default FacebookButton