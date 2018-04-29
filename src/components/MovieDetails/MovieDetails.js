import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.css';

import DB from '../../assets/js/db';

class MovieDetails extends Component {
    // console.log(props);
    state = {
        movie: {
            title: '',
            year: '',
            runtime: '',
            genres: [
                ''
            ],
            director: '',
            actors: '',
            plot: '',
            posterUrl: ''
        },
        visible: true,
    }
    
    render() {
        let movie = this.state.movie;
        movie = DB.movies.filter(movie => {
            return movie.id === Number(this.props.match.params.id);
        });
        console.log(movie);
        if (movie.length > 0) {
            movie = movie[0]
        }
        
        const genres = movie.genres.map((genre, index) => {
            return (
                <span key={index}>{genre}</span>
            );
        });
        return (
            <div className="MovieDetails" style={this.state.visible ? {transform: 'translateX(0)'} : null}>
                <div 
                    className="hero-img"
                    style={{
                        backgroundImage: 'url(' + movie.posterUrl + ')'
                    }}
                ><div className="overlay"></div></div>
                <div className="bottom-gradient"></div>
                <div className="movie-details-container">
                    <div className="go-back-icon-container">
                        <button className="go-back-icon" dangerouslySetInnerHTML={{__html: `<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`}}
                        onClick={this.props.history.goBack}
                        ></button>
                    </div>
                    <div 
                        className="movie-poster"
                        style={{
                            backgroundImage: 'url(' + movie.posterUrl + ')'
                        }}
                    ></div>
                    <p className="movie-title">{movie.title}</p>
                    <p className="movie-genres">
                        {genres}
                    </p>
                    <p className="misc-details movie-runtime"><strong>Run Time: </strong> {movie.runtime} Min</p>
                    <p className="misc-details movie-director"><strong>Director: </strong> {movie.director}</p>
                    <p className="misc-details movie-cast"><strong>Cast: </strong> {movie.actors}</p>
                    <p className="misc-details movie-plot"><strong>Plot: </strong> {movie.plot}</p>
                    <br />
                    <div className="go-back-icon-container bottom">
                        <button className="go-back-icon" dangerouslySetInnerHTML={{__html: `<svg height="32px" id="Layer_1" style="enable-background:new 0 0 32 32;" version="1.1" viewBox="0 0 32 32" width="32px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M28,14H8.8l4.62-4.62C13.814,8.986,14,8.516,14,8c0-0.984-0.813-2-2-2c-0.531,0-0.994,0.193-1.38,0.58l-7.958,7.958  C2.334,14.866,2,15.271,2,16s0.279,1.08,0.646,1.447l7.974,7.973C11.006,25.807,11.469,26,12,26c1.188,0,2-1.016,2-2  c0-0.516-0.186-0.986-0.58-1.38L8.8,18H28c1.104,0,2-0.896,2-2S29.104,14,28,14z"/></svg>`}}
                        onClick={this.props.history.goBack}
                        ></button>
                    </div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        window.scrollTo(0, 0);
        // if (!this.state.visible) {
        //     window.setTimeout(() => {
        //         this.setState({visible: true});
        //         window.scrollTo(0, 0);
        //     }, 50);
        // }
    }
    componentWillUnmount() {
        // window.onhashchange = (event) => {
        //     event.preventDefault();
        //     this.setState({visible: false});
        //     return window.setTimeout(() => {
        //         return true;
        //     }, 310);
        // }
    }
}

export default MovieDetails;