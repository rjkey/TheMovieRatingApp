using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TheMovieRatingApp.Data.Entities;
using TheMovieRatingApp.Data.Repository;
using TheMovieRatingApp.Models;

namespace TheMovieRatingApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MoviesController : ControllerBase
    {
        private readonly IMovieRepository _repository;
        private readonly IMapper _mapper;

        public MoviesController(IMovieRepository repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllMovies()
        {
            try
            {
                var movies = await _repository.GetAllMoviesWithActorsAndGenres();

                foreach(var m in movies)
                {
                    _mapper.Map<ActorModel[]>(m.Actors);
                    _mapper.Map<GenreModel[]>(m.Genres);
                }

                var movieModels = _mapper.Map<MovieModel[]>(movies);

                return Ok(movieModels);
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }            
        }

        [HttpPut("{id:int}")]
        public ActionResult<MovieModel> Get(int id, [FromBody]MovieModel movie)
        {
            try
            {
                var oldMovie = _repository.Get(id);

                if (oldMovie == null) return NotFound();

                _mapper.Map<MovieActor>(movie.Actors);
                _mapper.Map<MovieGenre>(movie.Genres);
                _mapper.Map<Movie>(movie);

                if (_repository.SaveChanges())
                {
                    return Ok();
                }                
            }
            catch(Exception e)
            {
                return StatusCode(500, e.Message);
            }

            return StatusCode(500);
        }
    }
}
