using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using TheMovieRatingApp.Data.Entities;

namespace TheMovieRatingApp.Data.Repository
{
    public class MovieRepository : Repository<Movie>, IMovieRepository
    {
        private MovieContext _movieContext;

        public MovieRepository(MovieContext movieContext) : base(movieContext)
        {
            _movieContext = movieContext;
        }

        //Using eager loading
        public async Task<IEnumerable<Movie>> GetAllMoviesWithActorsAndGenres()
        {
            return await _movieContext.Movies
                .Include(a => a.Actors)
                .ThenInclude(ma => ma.Actor)
                .Include(g => g.Genres)
                .ThenInclude(mg => mg.Genre)
                .ToListAsync();
        }
    }
}
