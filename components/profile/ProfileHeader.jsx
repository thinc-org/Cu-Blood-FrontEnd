import React, { Component } from 'react';

class ProfileHeader extends Component {
    render() {
        return (
            <div className="bg-cb-pink-light">
                <div className="layout-wide flex flex-col py-16 font-cu-heading text-center md:text-left">
                    <div className="text-6xl text-black font-bold mb-6">ประวัติส่วนตัว</div>
                    <div className="text-3xl flex flex-col text-grey-darkest">
                        <div className="font-semibold">{this.props.name}</div>
                        <div>{this.props.email}</div>
                        <div>{this.props.tel}</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfileHeader;