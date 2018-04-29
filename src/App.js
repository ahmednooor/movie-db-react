import React, { Component } from 'react';
import './App.css';

import MovieItems from './containers/MovieItems/MovieItems';
import NavBar from './components/NavBar/NavBar';
import MovieDetails from './components/MovieDetails/MovieDetails';
import {
	HashRouter,
	Route,
	Switch
  } from 'react-router-dom';

import DB from './assets/js/db';

class App extends Component {
	state = {
		showMovieDetails: false,
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
		showSideMenu: false
	}

	showMovieDetails = (event, id) => {
		const movie = DB.movies.filter(movie => {
			return movie.id === id;
		});
		if (movie.length > 0) {
			this.setState(
				{
					showMovieDetails: true,
					movie: movie[0]
				}
			);
		}
		document.getElementsByTagName('body')[0].classList.add('noscroll');
	}

	closeMovieDetails = (event) => {
		this.setState(
			{
				showMovieDetails: false,
			}
		);
		window.setTimeout(() => {
			this.setState(
				{
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
					}
				}
			);
		}, 300);
		document.getElementsByTagName('body')[0].classList.remove('noscroll');
	}

	showSideMenu = (event) => {
		this.setState({showSideMenu: true});
		document.getElementsByTagName('body')[0].classList.add('noscroll');
	}

	closeSideMenu = (event) => {
		this.setState({showSideMenu: false});
		document.getElementsByTagName('body')[0].classList.remove('noscroll');
	}

	render() {
		return (
			<HashRouter>
			<div className="App">
				<NavBar 
					visible={this.state.showSideMenu}
					showSideMenuHandler={this.showSideMenu}
					closeSideMenuHandler={this.closeSideMenu}
				/>
					<Route path="/" exact component={MovieItems} />
					<Route path="/:pagenum" exact component={MovieItems} />
					<Route path="/movie/:id" exact component={MovieDetails} />
				{/* <MovieDetails
					visible={this.state.showMovieDetails}
					movie={this.state.movie}
					closeMovieDetailsHandler={this.closeMovieDetails}
				/> */}
				{/* <MovieItems 
					showMovieDetailsHandler={this.showMovieDetails}
				/> */}
			</div>
			</HashRouter>
		);
	}

}

export default App;
