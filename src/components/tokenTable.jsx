import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';

class MoviesTable extends Component {

  columns = [
    { 
      name: 'Title',
      sortable: true,
      content: (movie) => (
        <Link to={`/movies/${movie._id}`}>
          {movie.title}
        </Link>
      ),
    },
    { name: 'Genre', path: 'genre.name', sortable: true },
    { name: 'Stock', path: 'numberInStock', sortable: true },
    { name: 'Rate', path: 'dailyRentalRate', sortable: true },
    { 
      key: 'like',
      content: (movie) => (
        <Like 
          liked={movie.liked} 
          onLike={() => this.props.onLike(movie)}
        />),
    },
    { 
      key: 'delete',
      content: (movie) => (
        <button 
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(movie._id)}
        >
          Delete 
        </button>),
    },
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table 
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );  
  }
}

export default MoviesTable;
