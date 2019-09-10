using Microsoft.EntityFrameworkCore;
using TheMovieRatingApp.Data.Entities;

namespace TheMovieRatingApp.Data
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options) : base(options)
        {

        }
        public DbSet<Movie> Movies { get; set; }

        //Creating composite keys
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<MovieActor>()
                .HasKey(m => new { m.ActorId, m.MovieId});
            modelBuilder.Entity<MovieGenre>()
                .HasKey(m => new { m.GenreId, m.MovieId });
        }

    }
}
