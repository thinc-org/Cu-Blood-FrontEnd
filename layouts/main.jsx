import React from 'react'
import Navbar from '@/shared-components/Navbar';
import ExpandedMenu from '@/shared-components/ExpandedMenu'
import '@/core/tailwind.css';
import '@/core/core.js';

export default class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            onExpanded: false,
        }
    }

    onMenuExpandListener = () => {
        this.setState({
          onExpanded: true,
        })
    }
    
      onMenuCloseListener = () => {
        this.setState({
          onExpanded: false,
        });
    }

    render () {
        const isExpanded = this.state.onExpanded ? "block" : "hidden";
        return (
            <React.Fragment>
                <Navbar onExpandListener={this.onMenuExpandListener}/>
                <ExpandedMenu className={isExpanded} onCloseListener={this.onMenuCloseListener}/>
                { this.props.children }
            </React.Fragment>
        )
    }
}