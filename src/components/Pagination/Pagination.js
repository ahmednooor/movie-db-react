import React from 'react';
import './Pagination.css';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
    let buttons = [];
    for (let i = 0; i < props.totalPages; i++) {
        buttons.push((
            <Link
                key={i}
                to={"/" + (i + 1).toString()}
            >
                <button 
                    className={i + 1 === props.currentPage ? "active" : null}
                    onClick={(event) => {props.setPageNumberHandler(event, i + 1)}}
                >{i + 1}</button>
            </Link>
        ));
    }

    return (
        <div className="Pagination">
            {buttons}
        </div>
    )
};

export default Pagination;