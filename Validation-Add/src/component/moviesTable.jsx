import React from "react";
import { Link } from "react-router-dom";

import Like from "./common/like";
import Table from "./common/table";

class MoviesTable extends React.Component {
  columns = [
    {
      label: "Title",
      key: "title",
      content: movie => <Link to={"/movies/" + movie._id}>{movie.title}</Link>
    },
    { path: "genre.name", label: "Genre" },
    { path: "numberInStock", label: "Stock" },
    { path: "dailyRentalRate", label: "Rate" },
    {
      key: "like",
      content: movie => (
        <Like like={movie.like} onClick={() => this.props.onLike(movie)} />
      )
    },
    {
      key: "delete",
      content: movie => (
        <button
          onClick={() => this.props.onDelete(movie)}
          type="button"
          className="btn btn-danger"
        >
          delete
        </button>
      )
    }
  ];

  render() {
    const { movies, sortColumn, onSort } = this.props;

    return (
      <Table
        columns={this.columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
