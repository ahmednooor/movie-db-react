import React, { Component } from 'react';
import './MovieItems.css';


import MovieItem from '../../components/MovieItem//MovieItem';
import SearchBar from '../../components/SearchBar/SearchBar';
import Pagination from '../../components/Pagination/Pagination';

import DB from '../../assets/js/db';
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
DB.movies.map((movie) => {
    movie.title += ' (' + movie.year + ')';
    return movie;
})
DB.movies.sort(dynamicSort('title'));

const moviesPerPage = 12;

class MovieItems extends Component {

    state = {
        DB: DB,
        movies: DB.movies,
        moviesPerPage: moviesPerPage,
        currentPage: 1,
        totalPages: 
            (parseInt(DB.movies.length / moviesPerPage, 10) === DB.movies.length / moviesPerPage ?
                parseInt(DB.movies.length / moviesPerPage, 10) :
                parseInt(DB.movies.length / moviesPerPage + 1, 10)),
        searchString: "",
        
    }

    searchMoviesFilter = (event) => {
        this.setState({searchString: event.target.value}, () => {
            this.filterMoviesAccToSearch();
        });
    }

    filterMoviesAccToSearch = () => {
        if (this.state.searchString === '') {
            this.setState({movies: this.state.DB.movies});
        } else {
            const movies = this.state.DB.movies.filter((movie) => {
                return movie.title.toLowerCase()
                    .includes(
                        this.state.searchString.toString().toLowerCase()
                    )
            });
            this.setState({movies: movies});
        }
    }

    setPageNumber = (event, pageNum) => {
        this.setState({currentPage: pageNum});
    }

    render() {
        const movies = this.state.movies.map((movie) => {
            return (
                <MovieItem 
                    key={movie.id}
                    id={movie.id}
                    thumbnailUrl={movie.posterUrl}
                    genres={movie.genres}
                    title={movie.title}
                    year={movie.year}
                    showMovieDetailsHandler={this.props.showMovieDetailsHandler}
                />
            );
        });

        return (
            <main className="MovieItems">
                <SearchBar onChangeHandler={this.searchMoviesFilter} />
                <div className="movie-items-container">
                    {   
                        this.state.searchString === "" ?
                        movies.slice(
                            ((this.state.currentPage - 1) * this.state.moviesPerPage), 
                            ((this.state.currentPage - 1) * this.state.moviesPerPage) + this.state.moviesPerPage
                        ) : movies
                    }
                </div>
                {
                    this.state.searchString === "" ?
                    <Pagination 
                        totalPages={this.state.totalPages}
                        currentPage={this.state.currentPage}
                        setPageNumberHandler={this.setPageNumber}
                    /> : null
                }
                <br />
            </main>
        );
    }
}

export default MovieItems;