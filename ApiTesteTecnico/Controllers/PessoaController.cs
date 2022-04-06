using Microsoft.AspNetCore.Mvc;

namespace ApiTesteTecnico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PessoaController : ControllerBase
    {
        List<KeyValuePair<int, string>> lista = new List<KeyValuePair<int, string>>()
        {
            new KeyValuePair<int, string>(1, "João"),
            new KeyValuePair<int, string>(2, "Maria"),
            new KeyValuePair<int, string>(3, "Ana")
        };

        // GET api/<PessoaController>/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {

            var pessoa = lista.FirstOrDefault(p => p.Key == id);
            if (pessoa.Equals(default(KeyValuePair<int, string>))) return NotFound();
            return Ok(pessoa);
        }
    }
}
