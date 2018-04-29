import React from "react";
import { Link } from 'react-router-dom';
import './MovieItem.css';

const MovieItem = (props) => {
    const genres = props.genres.map((genre, index) => {
        return (
            <span key={index}>{genre}</span>
        );
    });

    return (
        <div className="MovieItem">
            <Link to={"/movie/" + props.id}>
                <div 
                    className="movie-thumbnail"
                    style={{
                        backgroundImage: 'url(' + props.thumbnailUrl + ')'
                    }}
                    // onClick={(event) => props.showMovieDetailsHandler(event, props.id)}
                ></div>
            </Link>
            <Link to={"/movie/" + props.id}>
                <p 
                    className="movie-title"
                    // onClick={(event) => props.showMovieDetailsHandler(event, props.id)}
                >{props.title}</p>
            </Link>
            <p className="movie-genre">{genres}</p>
        </div>
    );
};

export default MovieItem;