import React from 'react';
import './MovieDetails.css';

const MovieDetails = (props) => {
    const genres = props.movie.genres.map((genre, index) => {
        return (
            <span key={index}>{genre}</span>
        );
    });

    return (
        <div className="MovieDetails" style={props.visible ? {transform: 'translateX(0)'} : null}>
            <div 
                className="hero-img"
                style={{
                    backgroundImage: 'url(' + props.movie.posterUrl + ')'
                }}
            ><div className="overlay"></div></div>
            <div className="bottom-gradient"></div>
            <div className="movie-details-container">
                <div className="go-back-icon-container">
                    <button className="go-back-icon" dangerouslySetInnerHTML={{__html: `<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`}}
                    onClick={props.closeMovieDetailsHandler}
                    ></button>
                </div>
                <div 
                    className="movie-poster"
                    style={{
                        backgroundImage: 'url(' + props.movie.posterUrl + ')'
                    }}
                ></div>
                <p className="movie-title">{props.movie.title}</p>
                <p className="movie-genres">
                    {genres}
                </p>
                <p className="misc-details movie-runtime"><strong>Run Time: </strong> {props.movie.runtime} Min</p>
                <p className="misc-details movie-director"><strong>Director: </strong> {props.movie.director}</p>
                <p className="misc-details movie-cast"><strong>Cast: </strong> {props.movie.actors}</p>
                <p className="misc-details movie-plot"><strong>Plot: </strong> {props.movie.plot}</p>
                <br />
                <br />
                <div className="go-back-icon-container bottom">
                    <button className="go-back-icon" dangerouslySetInnerHTML={{__html: `<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`}}
                    onClick={props.closeMovieDetailsHandler}
                    ></button>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;