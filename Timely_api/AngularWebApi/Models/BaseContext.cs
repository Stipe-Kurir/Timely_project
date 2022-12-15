using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;


namespace AngularWebApi.Models
{
    public class BaseContext : DbContext
    {
        public BaseContext(DbContextOptions<BaseContext>options):base(options)
        {

        }
        public DbSet<Tablica_podaci> Tablica_podaci { get; set; }
    }
}
