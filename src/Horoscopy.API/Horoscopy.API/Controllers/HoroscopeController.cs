using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Horoscopy.API.Controllers
{
    using Lookup.Horoscope;
    using Microsoft.AspNetCore.Cors;

    [Route("api/[controller]")]
    [ApiController]
    //[DisableCors]
    public class HoroscopeController : ControllerBase
    {
        [HttpPost("Western")]
        public string GetHoroscope([FromBody] DateTime dob)
        {
            return $"\"{HoroscopeLookup.GetHoroscope(dob)}\"";
        }
    }
}