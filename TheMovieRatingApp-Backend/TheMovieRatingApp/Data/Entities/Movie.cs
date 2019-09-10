using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheMovieRatingApp.Data.Entities
{
    public class Movie
    {
        [Key]
        public int MovieId { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public string StoryLine { get; set; }
        public string Duration { get; set; }
        public string PosterUrl { get; set; }
        public float ImdbRating { get; set; }
        public float AverageRating { get; set; }
        public ICollection<MovieActor> Actors { get; set; }
        public ICollection<MovieGenre> Genres { get; set; }
    }
}
