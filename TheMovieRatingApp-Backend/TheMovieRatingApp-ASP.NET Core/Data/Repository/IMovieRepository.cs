using System.Collections.Generic;
using System.Threading.Tasks;
using TheMovieRatingApp.Data.Entities;

namespace TheMovieRatingApp.Data.Repository
{
    public interface IMovieRepository : IRepository<Movie>
    {
        Task<IEnumerable<Movie>> GetAllMoviesWithActorsAndGenres();
    }
}