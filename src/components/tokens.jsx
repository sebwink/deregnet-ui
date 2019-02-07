import React, { Component } from 'react';

import _ from 'lodash';

import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

import ListGroup from './common/listGroup';
import MoviesTable from './moviesTable';
import Pagination from './common/pagination';

class Movies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      genres: [],
      pageSize: 4,
      currentPage: 1,
      sortColumn: {
        path: 'title',
        order: 'asc',
      },
    };
  }

  componentDidMount() {
    const movies = getMovies();
    const genres = [{ _id: '', name: 'All Genres'}, ...getGenres()];
    this.setState({ movies, genres });
  }

  handleDelete = (movieId) => {
    let movies = [...this.state.movies];
    movies = movies.filter(m => m._id !== movieId);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    let movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    let modMovie = { ...movies[index] };
    modMovie.liked = !modMovie.liked;
    movies[index] = modMovie;
    this.setState({ movies });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  handleSort = (sortColumn) => {
    this.setState({sortColumn});
  };

  getPagedData = ({movies: allMovies, selectedGenre, sortColumn, currentPage, pageSize}) => {
    const filteredData = selectedGenre && selectedGenre._id
      ? allMovies.filter(m => m.genre._id === selectedGenre._id)
      : allMovies;

    const sortedData = _.orderBy(filteredData, [sortColumn.path], [sortColumn.order]);

    const pagedData = Pagination.paginate(sortedData, currentPage, pageSize);
    return {
      data: pagedData,
      totalCount: filteredData.length,
    };
  };

  render() {
    const { pageSize, currentPage, selectedGenre, sortColumn, movies: allMovies } = this.state;
    if (allMovies.length === 0) {
      return <p>There are no movies in the database!</p>;
    }
    const { totalCount, data: movies } = this.getPagedData(this.state);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup 
            items={this.state.genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <p>Showing {totalCount} movies in the database</p>
          <MoviesTable 
            movies={movies}
            sortColumn={sortColumn}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={totalCount}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageChange}
          />
        </div>
      </div>
    );
  }
}

export default Movies;
