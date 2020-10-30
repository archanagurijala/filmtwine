import React, { Component } from 'react';
import { Nav } from 'react-bootstrap';
import Svg from '../../images/Svg';
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="mobile-header">
          <div className="btn-toggle d-sm-none d-lg-none d-md-none">
            <img src={Svg.Hamburger} alt="" onClick={() => this.props.handleToggle(true)} />
            <img alt="" src={Svg.FilmtwineMobile} className="margin20 onlyLeftMargin" />
            <img alt="" src={Svg.Search} className="margin30 onlyLeftMargin" />
            <span className="notification"><img alt="" src={Svg.Bell} className="margin20 onlyLeftMargin" /><span className="badge badge-pill badge-danger ml-2">6</span></span>
            <img alt="" src={Svg.User} className="margin20 onlyLeftMargin" />
          </div>
          <Nav className="justify-content-end header-right d-xs-none">
            <Nav.Item>
              <label className="search-label" htmlFor="search-input">
                <img alt="" src={Svg.Search} />
                <input
                  type="text"
                  id="search-input"
                  placeholder="Search Films and Filmmakers"
                />
              </label>
            </Nav.Item>
            <span className="seperator"> </span>
            <span className="notification"><img alt="" src={Svg.Bell} /><span className="badge badge-pill badge-danger ml-2">6</span></span>
            <span className="seperator"> </span>
            <img alt="" src={Svg.User} />
          </Nav>
        </div>
      </div>
    );
  }
}
