import React from 'react';
import './Pagination.css';

const Pagination = (props) => {
    let buttons = [];
    for (let i = 0; i < props.totalPages; i++) {
        buttons.push((
            <button 
                key={i} 
                className={i + 1 === props.currentPage ? "active" : null}
                onClick={(event) => {props.setPageNumberHandler(event, i + 1)}}
            >{i + 1}</button>
        ));
    }

    return (
        <div className="Pagination">
            {buttons}
        </div>
    )
};

export default Pagination;