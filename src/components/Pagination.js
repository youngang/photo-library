import React from "react";

export default function Pagination(props){
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }
  
    return (
    <div className="pagination">
        <button onClick={props.handlePrevPage}><ion-icon name="chevron-back-outline"></ion-icon></button>
        {pageNumbers.map(num => (
          <button onClick={event => props.handleSpecificPageChange(num)} key={num} className='page-link'>
            {num}
          </button>
        ))}
        <button onClick={props.handleNextPage}><ion-icon onClick={props.handleNextPage} name="chevron-forward-outline"></ion-icon></button>
    </div>
    );

}