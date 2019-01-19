import React from 'react'

class FacebookButton extends React.Component {

    render() {
        return(
            <div className="flex items-center rounded-lg py-2 px-6 font-cu-heading" style={{backgroundColor: "#7685a6"}}>
                <img className="" src="/static/logo/flogo.svg" style={{
                    width: 30,
                    marginRight: 10
                }} alt="Facebook Logo"/>
                <div className="font-semibold text-lg pt-2">CU Blood</div>
            </div>
        );
    }

}
export default FacebookButton