import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
    return (
        <div className="SearchBar">
            <input 
                type="text" 
                placeholder="Search" 
                onChange={props.onChangeHandler}    
            />
        </div>
    );
};

export default SearchBar;