import React from 'react';

export default class AboutCard extends React.Component {
    render() {
        return(
            <div id="AboutCardArea" className="flex flex-col items-center p-2">
                <div className="bg-grey-lightest w-64 flex flex-col items-center text-center pb-12">
                    <img src={this.props.picture} aria-hidden alt="User Profile Picture" className="w-3/4 rounded-full py-6"/>
                    <div className="pb-2">
                        {this.props.englishName}   
                    </div>
                    <div>
                        {this.props.myRole}
                    </div>
                </div>
            </div>
        )
    }
}