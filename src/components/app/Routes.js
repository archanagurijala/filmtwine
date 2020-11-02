import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Main from '../main/Main';

export default class Routes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(value) {
    this.setState({ toggle: value });
  }

  render() {
    const routes = [
      {
        path: '/Dashboard',
        exact: false,
        component: Main.Dashboard
      }, {
        path: '/Filmmakers',
        exact: false,
        component: Main.Filmmakers
      }, {
        path: '/filmtwine',
        exact: false,
        component: Main.FilmContent
      }, {
        path: '/',
        exact: true,
        component: Main.FilmContent
      }
    ];
    const mainComponents = routes.map(({ path, exact, component }, key) => <Route exact={exact} path={path} component={component} key={key} />);
    return (
      <Router>
        <App handleToggle={this.handleToggle} toggle={this.state.toggle} routes={routes} mainComponents={mainComponents} />
      </Router>
    )
  }
}
