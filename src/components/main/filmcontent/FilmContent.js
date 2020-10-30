import React, { Component } from 'react';
import './FilmContent.css';
import Filter from './Filter';
import DataTable from './DataTable';

export default class FilmContent extends Component {
  render() {
    return (
      <div className="film-content padding30">
        <h2>Film Submissions</h2>
        <Filter />
        <DataTable />
      </div>
    )
  }
}