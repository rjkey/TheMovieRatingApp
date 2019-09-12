import React, { Component } from "react";
import MovieItem from "./MovieItem";
import MovieModal from "./MovieModal";
import PropTypes from "prop-types";
import "./styles/Movies.css";

class Movies extends Component {
  componentDidMount() {}
  state = {
    displayModal: false,
    modal: null
  };

  openModal = id => {
    this.setState({ displayModal: true });
    this.props.movies.map(movie => {
      if (id === movie.id) {
        this.setState({ modal: movie });
      }
      return movie;
    });
  };

  closeModal = () => {
    console.log("CLOSE");
    this.setState({ displayModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <div className="movieContainer">
          {this.props.movies.map(movie => (
            <MovieItem
              key={movie.id}
              movie={movie}
              openModal={this.openModal}
            />
          ))}
        </div>

        <div
        /*className={this.state.displayModal ? "visibleModal" : "hiddenModal"}*/
        >
          {this.state.displayModal ? (
            <MovieModal
              movie={this.state.modal}
              displayModal={this.state.displayModal}
              closeModal={this.closeModal}
            />
          ) : (
            <div></div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

Movies.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Movies;
