import React from "react";
import './MovieItem.css';

const MovieItem = (props) => {
    const genres = props.genres.map((genre, index) => {
        return (
            <span key={index}>{genre}</span>
        );
    });

    return (
        <div className="MovieItem">
            <div 
                className="movie-thumbnail"
                style={{
                    backgroundImage: 'url(' + props.thumbnailUrl + ')'
                }}
                onClick={(event) => props.showMovieDetailsHandler(event, props.id)}
                ></div>
            <p 
                className="movie-title"
                onClick={(event) => props.showMovieDetailsHandler(event, props.id)}
            >{props.title}</p>
            <p className="movie-genre">{genres}</p>
        </div>
    );
};

export default MovieItem;