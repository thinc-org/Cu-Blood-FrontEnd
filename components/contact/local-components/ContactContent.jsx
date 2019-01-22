import React, {Component} from 'react';

class ContactContent extends Component {
    render() {
        return(
            <div className="layout-wide py-10 flex flex-col sm:flex-row font-cu-heading text-xl items-center" style={{maxWidth: "40rem"}}>
                <div className="w-full sm:w-1/2 flex items-center pb-6 sm:pb-0 sm:pr-6">
                    <div className="mr-4"><img className="w-5" src="/static/icons/map.svg" alt="Map logo"/></div>
                    <div>View on <span className="font-semibold">Google Maps</span></div>
                </div>
                <div className="w-full sm:w-1/2 border-cb-grey-border border-t sm:border-t-0 sm:border-l pt-6 sm:pt-0 sm:pl-8 flex flex-col font-semibold">
                    <div className="flex items-center pb-6 sm:pb-0">
                        <div className="mr-4"><img className="w-6" src="/static/icons/telephone.svg" alt="Phone logo"/></div>
                        <div>091-234-5678</div>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4"><img className="w-6" src="/static/icons/mail.svg" alt="Phone logo"/></div>
                        <div>cu.blood@gmail.com</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactContent;