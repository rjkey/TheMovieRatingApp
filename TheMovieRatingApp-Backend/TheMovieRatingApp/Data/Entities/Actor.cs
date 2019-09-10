﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TheMovieRatingApp.Data.Entities
{
    public class Actor
    {
        [Key]
        public int ActorId { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public ICollection<MovieActor> Movies { get; set; }
    }
}
