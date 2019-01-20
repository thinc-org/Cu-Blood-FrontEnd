import React from 'react'
import Navbar from '@/shared-components/Navbar';
import ExpandedMenu from '@/shared-components/ExpandedMenu';
import '@/core/tailwind.css';
import '@/core/core.js';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            isExpanding: false,
            isHidden: true,
        }
    }

    onMenuExpandListener = () => {
        this.setState({
          isExpanding: true,
          isHidden: false,
        })
    }
    
    onMenuCloseListener = () => {
        this.setState({
          isExpanding: false,
        })
        this.onHidden();
    }

    onHidden = () => {
        setTimeout(() => {
            this.setState({
                isHidden: true,
            })}
        , 500)
    }

    render () {
        const isExpanding = this.state.isExpanding ? "fadeIn animated faster fixed z-50 " : "fadeOut animated faster ";
        const isHidden = this.state.isHidden ? "hidden" : "";
        console.log(isExpanding, "isExpanding")
        console.log(isHidden, "isHidden")
        return (
            <React.Fragment>
                <Navbar onExpandListener={this.onMenuExpandListener}/>
                <ExpandedMenu className={isExpanding + isHidden} onCloseListener={this.onMenuCloseListener}/>
                { this.props.children }
            </React.Fragment>
        )
    }
}