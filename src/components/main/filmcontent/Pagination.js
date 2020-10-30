import React, { Component } from 'react';

export default class Pagination extends Component {
    render() {
        const {currentPage, pageNumbers, totalPages, prevClick, handleClick, nextClick } = this.props;
        return (
            <div className="pagination">
                <span className={currentPage === 1 ? "d-none" : "prev box"} onClick={prevClick}>&#60;</span>
                {pageNumbers.map((number, index) => (
                    <span
                        className={index + 1 === currentPage ? 'box selected' : 'box'}
                        key={number}
                        id={number}
                        onClick={handleClick}
                    >
                        {number}
                    </span>
                ))}
                <span className={currentPage === totalPages ? "d-none" : "next box"} onClick={nextClick}>&#62;</span>
            </div>
        )
    }
}