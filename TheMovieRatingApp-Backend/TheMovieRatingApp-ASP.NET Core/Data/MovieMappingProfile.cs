using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TheMovieRatingApp.Data.Entities;
using TheMovieRatingApp.Models;

namespace TheMovieRatingApp.Data
{
    public class MovieMappingProfile : Profile
    {
        public MovieMappingProfile()
        {
            var myMap = CreateMap<MovieActor, ActorModel>()
                .ForMember(dest => dest.Firstname, src => src.MapFrom(source => source.Actor.Firstname))
                .ForMember(dest => dest.Lastname, src => src.MapFrom(source => source.Actor.Lastname))
                .ReverseMap();

            CreateMap<MovieGenre, GenreModel>()
                .ForMember(dest => dest.Name, src => src.MapFrom(source => source.Genre.Name))
                .ReverseMap();

            CreateMap<Movie, MovieModel>()
                .ReverseMap();

        }
    }
}
