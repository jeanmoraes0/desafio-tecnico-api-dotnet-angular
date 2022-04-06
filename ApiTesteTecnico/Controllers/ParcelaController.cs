using ApiTesteTecnico.Models;
using ApiTesteTecnico.Services;
using Microsoft.AspNetCore.Mvc;

namespace ApiTesteTecnico.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ParcelaController : ControllerBase
    {
        [HttpPost]
        public IActionResult Calcular([FromBody] CalculadoraRequestModel model)
        {
            return Ok(CalculationService.Calculate(model));
        }
    }
}
