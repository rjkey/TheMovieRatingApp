import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import "./styles/MovieModal.css";
import StarRatings from "../../node_modules/react-star-ratings";

function MovieModal(props) {
  const {
    title,
    year,
    posterurl,
    storyline,
    actors,
    genres,
    averageRating
  } = props.movie;

  const [modalState, setModalState] = useState(true); //State is only initiated once
  const [movieRating, setMovieRating] = useState(4);

  useEffect(() => {
    //Use effect to change state each time a prop changes.
    setModalState(props.displayModal);
  }, [props.displayModal]);

  /*
  if (props.movie === null) {
    return "";
  }
  */

  const falseify = () => {
    setModalState(false);
    props.closeModal();
  };

  const changeRating = newRating => {
    let number = parseInt(newRating);
    console.log("THIS FAR");
    setMovieRating({ movieRating: number });
  };

  return (
    <Modal
      size="lg"
      show={modalState}
      onHide={() => falseify()}
      className="theModal"
    >
      <Modal.Header closeButton className="modalHeader">
        <div className="modal-title w-100 text-center">
          <h2>
            {title} ({year})
          </h2>
          <div className="modalGenreBox">
            {genres.map(genre => (
              <p key={genre}>{genre}</p>
            ))}
          </div>
        </div>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <div className="modalBox">
          <img className="modalImage" src={posterurl} alt={posterurl}></img>
          <div className="modalText">
            <p>{storyline}</p>
            <h4>With actors</h4>
            <div className="modalActorBox">
              {actors.map(actor => (
                <p key={actor} className="modalActors">
                  {actor}
                </p>
              ))}
            </div>
            <h4>Rate movie</h4>
            <StarRatings
              starDimension="30px"
              starSpacing="5px"
              numberOfStars={10}
              rating={movieRating} //doesnt work with changeRating
              starHoverColor="rgb(230, 67, 47)"
              starEmptyColor="rgb(203, 211, 227)"
              starRatedColor="rgb(109, 122, 130)"
              changeRating={changeRating}
            />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default MovieModal;
