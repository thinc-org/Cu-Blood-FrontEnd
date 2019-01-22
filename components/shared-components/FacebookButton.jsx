import React from 'react'

class FacebookButton extends React.Component {

    render() {
        return(
            <div className="w-screen text-white flex flex-col items-center py-10" style={{backgroundColor: '#8e9dc0'}}>
                <div className="flex flex-row items-center rounded-lg px-6 py-2 font-cu-heading" style={{backgroundColor: "#7685a6"}}>
                    <img className="" src="/static/logo/flogo.svg" style={{
                        width: 30,
                        marginRight: 10
                    }} alt="Facebook Logo"/>
                    <div className="font-semibold text-lg py-1 leading-none">CU Blood</div>
                </div>
            </div>
        );
    }

}
export default FacebookButton