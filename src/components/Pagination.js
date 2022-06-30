import React from "react";

export default function Pagination(props){
  const pageNumbers = [];

  for (let i = 1; i <= 5; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {props.currentPage != 1 &&
        <button onClick={props.handlePrevPage} className="page-item"><ion-icon name="chevron-back-outline"></ion-icon></button>
      } 
        {pageNumbers.map(num => {
          if (num == props.currentPage) {
            return <button onClick={event => props.handleSpecificPageChange(num)} key={num} className='page-link current-page'>
            {num}
            </button>
        }
          return <button onClick={event => props.handleSpecificPageChange(num)} key={num} className='page-item'>
            {num}
          </button>
          }
         
        )}
        <button><ion-icon name="ellipsis-horizontal"></ion-icon></button>
        <button onClick={props.handleNextPage} className="page-item"><ion-icon onClick={props.handleNextPage} name="chevron-forward-outline"></ion-icon></button>
    </div>
    );

}