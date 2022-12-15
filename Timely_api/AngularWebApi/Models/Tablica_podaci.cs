using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AngularWebApi.Models
{
    public class Tablica_podaci
    {
        public int Id { get; set; }
        public string Project_name { get; set; }
        public string Start_time { get; set; }
        public string Stop_time { get; set; }

        public string Duration { get; set; }
    }
}
