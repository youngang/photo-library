import React, { Component } from "react";

const Pagination = ({ paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 8; i++) {
    pageNumbers.push(i);
  }
  
    return (
    <div className="pagination">
        <a><ion-icon name="chevron-back-outline"></ion-icon></a>
        {pageNumbers.map(num => (
          <a onClick={() => paginate(num)} href='!#' className='page-link'>
            {num}
          </a>
        ))}
        <a><ion-icon name="chevron-forward-outline"></ion-icon></a>
    </div>
    );
  };

  const handlePrevPage = (() => {
    console.log('hi');
  });

  const handleNextPage = (() => {
    console.log('hi');
  });
  
  export default Pagination;