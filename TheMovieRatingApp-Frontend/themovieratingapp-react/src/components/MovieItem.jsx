import React, { Component } from "react";
import "./styles/MovieItem.css";

class MovieItem extends Component {
  render() {
    const {
      id,
      title,
      posterurl,
      year,
      imdbRating,
      averageRating
    } = this.props.movie;
    return (
      <div className="movieItem">
        <h3>
          {title}
          <span> ({year})</span>
        </h3>
        <p className="itemRating">
          IMDb rating: {imdbRating} | Average user rating: {averageRating}
        </p>
        <img
          className="imageItem"
          src={posterurl}
          alt={posterurl}
          onClick={this.props.openModal.bind(this, id)}
        ></img>
      </div>
    );
  }
}

export default MovieItem;
