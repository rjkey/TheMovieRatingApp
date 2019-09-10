using System.Collections.Generic;

namespace TheMovieRatingApp.Models
{
    public class MovieModel
    {
        public string Title { get; set; }
        public int Year { get; set; }
        public string StoryLine { get; set; }
        public string Duration { get; set; }
        public string PosterUrl { get; set; }
        public float ImdbRating { get; set; }
        public float AverageRating { get; set; }
        public List<ActorModel> Actors { get; set; }
        public List<GenreModel> Genres { get; set; }
    }
}
