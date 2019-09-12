import React, { Component } from "react";
import Movies from "./components/Movies";
import "./App.css";

class App extends Component {
  state = {
    movies: [
      {
        id: 1,
        title: "Harry Potter and the Philosopher's stone",
        year: 2001,
        storyline:
          "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        duration: "PT123M",
        posterurl:
          "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_.jpg",
        imdbRating: 7.3,
        averageRating: 0,
        actors: ["Daniel Radcliffe", "Rubert Grint", "Emma Watson"],
        genres: ["Adventure", "Fantasy"]
      },
      {
        id: 2,
        title: "Mad Max: Fury Road",
        year: 2015,
        storyline:
          "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
        duration: "PT120M",
        posterurl:
          "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        imdbRating: 8.1,
        averageRating: 0,
        actors: ["Tom Hardy", "Charlize Theron"],
        genres: ["Adventure", "Action"]
      },
      {
        id: 3,
        title: "Jurassic Park",
        year: 1993,
        storyline:
          "During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.",
        duration: "PT127M",
        posterurl:
          "https://m.media-amazon.com/images/M/MV5BMjM2MDgxMDg0Nl5BMl5BanBnXkFtZTgwNTM2OTM5NDE@._V1_.jpg",
        imdbRating: 8.1,
        averageRating: 0,
        actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
        genres: ["Adventure", "Action", "Sci-Fi"]
      },
      {
        id: 4,
        title: "Toy Story",
        year: 1995,
        storyline:
          "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
        duration: "PT81M",
        posterurl:
          "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SY1000_SX670_AL_.jpg",
        imdbRating: 8.3,
        averageRating: 0,
        actors: ["Tom Hanks", "Tim Allen"],
        genres: ["Comedy", "Action", "Animation"]
      }
    ]
  };
  render() {
    return <Movies movies={this.state.movies} />;
  }
}

export default App;
