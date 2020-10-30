import React, { Component } from 'react';
import 'react-pro-sidebar/dist/css/styles.css';
import './SideBar.css';
import SideBarFooter from './SideBarFooter';
import SideBarHeader from './SideBarHeader';
import SideBarContent from './SideBarContent';

export default class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'Film'
        }
    }
    selectedItem = (selected) => {
        this.props.handleToggle(false);
        this.setState({ selectedItem: selected });
    }

    render() {
        return (
            <div className={this.props.toggle ? "pro-sidebar xs toggled" : "pro-sidebar xs"}>
                <div className="pro-sidebar-inner">
                    <div className="pro-sidebar-layout">
                        <SideBarHeader handleToggle={this.props.handleToggle} />
                        <SideBarContent selected={this.state.selectedItem} selectedItem={this.selectedItem} />
                        <SideBarFooter />
                    </div>
                </div>
                <div className="overlay" role="button" tabIndex="0" aria-label="overlay" onKeyPress={() => this.props.handleToggle(false)} onClick={() => this.props.handleToggle(false)}></div>
            </div>
        );
    }
}