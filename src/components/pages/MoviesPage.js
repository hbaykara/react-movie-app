import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MoviesList from '../MoviesList';

import { 
	fetchMovies,
	deleteMovie
 } from '../../actions/movies';

class MoviesPage extends Component {
	static propTypes = {
		movies: PropTypes.object.isRequired,
		deleteMovie: PropTypes.func.isRequired
	};

	componentDidMount() {
		this.props.fetchMovies();
	}

	render() {
		return (
			<div className="">
				<h2>Filmler</h2>
				<MoviesList 
					deleteMovie={this.props.deleteMovie}
					movies={this.props.movies}/>
			</div>
		);
	}
}

const mapStateToProps = ({ movies }) => {
	return {
		movies
	}
};

const mapdispatchToProps = {
	fetchMovies,
	deleteMovie
}

export default connect(mapStateToProps, mapdispatchToProps)(MoviesPage);