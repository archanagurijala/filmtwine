import React, { Component } from 'react';
import Table from './Table';
import Pagination from './Pagination';
import FilmContentData from './data';

export default class DataTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            films: FilmContentData.films,
            columns: FilmContentData.columns,
            currentPage: 1,
            filmsPerPage: 10,
            currentSort: 'default'
        };
        this.handleClick = this.handleClick.bind(this);
        this.prevClick = this.prevClick.bind(this);
        this.nextClick = this.nextClick.bind(this);
    }
    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    prevClick() {
        this.setState({
            currentPage: this.state.currentPage - 1
        });
    }
    nextClick() {
        this.setState({
            currentPage: this.state.currentPage + 1
        });
    }
    onSortChange = (value) => {
        const { currentSort, films } = this.state;
        const _value = value;
        let _films = [];
		let nextSort;

		if (currentSort === 'down')  {
            nextSort = 'up';
            _films = films.sort((a,b) => {
                return a[_value] - b[_value];
            })
        }
		else if (currentSort === 'up') {
            nextSort = 'down';
            _films = films.sort((a,b) => {
                return b[_value] - a[_value];
            })
        }
		else if (currentSort === 'default') {
            nextSort = 'down';
            _films = films.sort((a) => {
                return a[_value];
            })
        }

		this.setState({
            currentSort: nextSort,
            films: _films
        });
        console.log("currentSort: ", currentSort);
        console.log("films: ", films);
	}
    render() {
        const { films, currentPage, filmsPerPage, columns  } = this.state;
        const indexOfLastFilm = currentPage * filmsPerPage;
        const indexOfFirstFilm = indexOfLastFilm - filmsPerPage;
        const currentFilms = films.slice(indexOfFirstFilm, indexOfLastFilm);
        const totalPages = Math.ceil(films.length / filmsPerPage);
        const pageNumbers = Array.from(Array((totalPages + 1) - 1).keys()).map(i => 1 + i);
        console.log("films in render: ", films);
        return (
            <div className="table-content padding30">
                <Table 
                    columns ={columns}
                    currentFilms={currentFilms}
                    onSortChange={this.onSortChange}
                />
                <Pagination 
                    currentPage={currentPage}
                    pageNumbers={pageNumbers}
                    totalPages={totalPages}
                    prevClick={this.prevClick}
                    nextClick={this.nextClick}
                    handleClick={this.handleClick}
                />
            </div>
        )
    }
}