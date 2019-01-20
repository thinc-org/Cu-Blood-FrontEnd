import React from 'react'
import Navbar from '@/shared-components/Navbar';
import ExpandedMenu from '@/shared-components/ExpandedMenu';
import '@/core/tailwind.css';
import '@/core/core.js';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            isExpanding: false
        }
    }

    onMenuExpandListener = () => {
        this.setState({
          isExpanding: true
        })
    }
    
    onMenuCloseListener = () => {
        this.setState({
          isExpanding: false,
        })
    }

    render () {
        return (
            <React.Fragment>
                <Navbar onExpandListener={this.onMenuExpandListener}/>
                <ExpandedMenu className={'fixed z-50 expand-menu' + (this.state.isExpanding ? ' is-expanding' : '')} onCloseListener={this.onMenuCloseListener}/>
                { this.props.children }
            </React.Fragment>
        )
    }
}