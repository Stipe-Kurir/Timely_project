using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularWebApi.Models;

namespace AngularWebApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class Tablica_podaciController : ControllerBase
    {
        private readonly BaseContext _context;

        public Tablica_podaciController(BaseContext context)
        {
            _context = context;
        }

        // GET: api/Tablica_podaci
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tablica_podaci>>> GetTablica_podaci()
        {
            return await _context.Tablica_podaci.ToListAsync();
        }

        // GET: api/Tablica_podaci/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Tablica_podaci>> GetTablica_podaci(int id)
        {
            var tablica_podaci = await _context.Tablica_podaci.FindAsync(id);

            if (tablica_podaci == null)
            {
                return NotFound();
            }

            return tablica_podaci;
        }

        // PUT: api/Tablica_podaci/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTablica_podaci(int id, Tablica_podaci tablica_podaci)
        {
            if (id != tablica_podaci.Id)
            {
                return BadRequest();
            }

            _context.Entry(tablica_podaci).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Tablica_podaciExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Tablica_podaci
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Tablica_podaci>> PostTablica_podaci(Tablica_podaci tablica_podaci)
        {
            _context.Tablica_podaci.Add(tablica_podaci);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetTablica_podaci", new { id = tablica_podaci.Id }, tablica_podaci);
        }

        // DELETE: api/Tablica_podaci/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Tablica_podaci>> DeleteTablica_podaci(int id)
        {
            var tablica_podaci = await _context.Tablica_podaci.FindAsync(id);
            if (tablica_podaci == null)
            {
                return NotFound();
            }

            _context.Tablica_podaci.Remove(tablica_podaci);
            await _context.SaveChangesAsync();

            return tablica_podaci;
        }

        private bool Tablica_podaciExists(int id)
        {
            return _context.Tablica_podaci.Any(e => e.Id == id);
        }
    }
}
