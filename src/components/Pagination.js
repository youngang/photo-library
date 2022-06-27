import React, { Component } from "react";

const Pagination = ({ paginate }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= 5; i++) {
      pageNumbers.push(i);
    }
  
    return (
    <div className="pagination">
        <a><ion-icon name="chevron-back-outline"></ion-icon></a>
        {pageNumbers.map(num => (
            <a href='!#'>{num}</a>
        ))}
        <a><ion-icon name="chevron-forward-outline"></ion-icon></a>
    </div>
    );
  };
  
  export default Pagination;