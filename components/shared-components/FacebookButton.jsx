import React from 'react'

class FacebookButton extends React.Component {

    render() {
        return (
            <div className="w-full text-white flex flex-col items-center py-10" style={{ backgroundColor: '#8e9dc0' }}>
                <a className="no-underline" target="_blank" rel="noopener noreferrer" href="https://facebook.com/CU.Blood">
                    <div className="flex flex-row items-center rounded-lg px-6 py-2 font-cu-heading" style={{ backgroundColor: "#7685a6" }}>
                        <img className="mr-3" src="/static/logo/flogo.svg" style={{ width: 30 }} alt="Facebook Logo" />
                        <span className="font-semibold text-lg text-white leading-none pt-1">CU Blood</span>
                    </div>
                </a>
            </div>
        );
    }

}
export default FacebookButton