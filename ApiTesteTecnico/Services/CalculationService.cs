using ApiTesteTecnico.Models;

namespace ApiTesteTecnico.Services
{
    public class CalculationService
    {
        private const decimal JUROS = 1.05M;
        public static decimal Calculate(CalculadoraRequestModel calculadora)
        {
            decimal parcelaComJuros = (calculadora.Valor * calculadora.Parcela) * JUROS;

            return parcelaComJuros;
        }
    }
}
