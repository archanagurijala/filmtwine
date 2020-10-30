import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';

export default class Filter extends Component {
  render() {
    return (
        <div className="filter-row">
          <div className="d-flex">
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button className="modify-button">Modify Filters</button>
          </div>
          <div className="display-flex d-xs-none">
            <span className="sort-by">Sort by: </span>
            <Dropdown className="dropdown-right">
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
    )
  }
}