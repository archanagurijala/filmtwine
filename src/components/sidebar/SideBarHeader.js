import React, { Component } from 'react';
import Svg from '../../images/Svg';

export default class SideBarHeader extends Component {
    render() {
        return (
            <div className="pro-sidebar-header">
                <div>
                    <span className="margin30 d-inline-block"><img alt="" src={Svg.Filmtwinelogo} /></span>
                    <span className="d-sm-none d-lg-none d-md-none float-right close-btn"><img src={Svg.Close} alt="" onClick={() => this.props.handleToggle(false)} /></span>
                </div>
            </div>
        )
    }
}