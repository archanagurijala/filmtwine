import React, { Component } from 'react';
import Svg from '../../../images/Svg';

export default class Table extends Component {
    render() {
        const { columns, currentFilms, onSortChange } = this.props;
        
        const sortTypes = {
            up: {
                image: 'Sortup',
                fn: (a, b) => a.currentColumn - b.currentColumn
            },
            down: {
                image: 'Sortdown',
                fn: (a, b) => b.currentColumn - a.currentColumn
            },
            default: {
                image: 'Sortup',
                fn: (a, b) => a.currentColumn
            }
        }
        console.log("sortTypes: ", sortTypes);
        return (
            <table className="table table-borderless">
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        {columns.map(({ name, selector }, key) => (
                            <th className={selector === 'name' || selector === 'category' ? '' : 'd-xs-none'} id={key}>
                                {name}
                                <button onClick={() => onSortChange(selector)} className="sort-button"> 
                                    <span ><img src={Svg.Sort} alt="" /></span>
                                </button>
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {currentFilms.map((film, key) => (
                        <tr>
                            <td id={key}><input type="checkbox" /></td>
                            <td id={film.name} className="name">{film.name}</td>
                            <td id={film.maker} className="d-xs-none">{film.maker}</td>
                            <td id={film.category}><span className="table-buttons">{film.category}</span></td>
                            <td id={film.genre}><span className="table-buttons d-xs-none">{film.genre}</span></td>
                            <td id={film.length} className="d-xs-none">{film.length}</td>
                            <td id={film.time} className="d-xs-none">{film.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}