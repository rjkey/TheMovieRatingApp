using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheMovieRatingApp.Data.Entities
{
    public class Genre
    {
        [Key]
        public int GenreId { get; set; }
        public string Name { get; set; }
        public ICollection<MovieGenre> Movies { get; set; }
    }
}
