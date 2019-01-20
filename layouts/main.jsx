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
        console.log("expanded");
      }
    
      onMenuCloseListener = () => {
        this.setState({
          onExpanded: false,
        });
        console.log("closed");
      }

    render () {
        return (
            <React.Fragment>
                <Navbar onExpandListener={this.onMenuExpandListener}/>
                <ExpandedMenu visibility={this.state.onExpanded} onCloseListener={this.onMenuCloseListener}/>
                { this.props.children }
            </React.Fragment>
        )
    }
}