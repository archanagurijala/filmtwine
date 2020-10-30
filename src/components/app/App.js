import React, { Component } from 'react';
import SideBar from '../sidebar/SideBar';
import Header from '../header/Header';
import './../common/styles.css';
import './../common/reset.css';
import './App.css';

export default class App extends Component {

  render() {
    return (
        <div className="app">
          <SideBar handleToggle={this.props.handleToggle} toggle={this.props.toggle} routes={this.props.routes}></SideBar>
          <main>
            <Header handleToggle={this.props.handleToggle}></Header>
            {this.props.mainComponents}
          </main>
        </div>
    )
  }
}