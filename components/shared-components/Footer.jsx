import React from 'react';

class Footer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return(
            <div className="bg-black font-cu-body text-white text-base py-6">
                <div className="layout-wide">
                    <p className="font-bold">Copyright &copy; {(new Date()).getFullYear()} CU Blood Project</p>
                    <p className="opacity-50"><strong>Chulalongkorn University</strong> &mdash; Developed by Thinc 6<sup>th</sup> Generation</p>
                </div>
            </div>
        )
    }
}

export default Footer