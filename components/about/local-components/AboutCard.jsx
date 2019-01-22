import React from 'react';

export default class AboutCard extends React.Component {
    render() {
        return(
            <div className="flex flex-col items-center p-4">
                <div className="bg-grey-lightest w-64 flex flex-col items-center text-center pb-12" style={{borderRadius: '2rem'}} >
                    <img src={this.props.picture} aria-hidden alt="User Profile Picture" className="rounded-full p-6 overflow-hidden h-64 flex self-center align-center" />
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