using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Horoscopy.API.Controllers
{
    using Lookup.Horoscope;

    [Route("api/[controller]")]
    [ApiController]
    public class HoroscopeController : ControllerBase
    {
        [HttpPost("Horoscope")]
        public string GetHoroscope([FromBody] DateTime dob)
        {
            return HoroscopeLookup.GetHoroscope(dob);
        }
    }
}