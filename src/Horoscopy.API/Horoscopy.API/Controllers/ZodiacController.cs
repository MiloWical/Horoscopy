using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Horoscopy.API.Controllers
{
    using Lookup.Zodiac;
    using Microsoft.AspNetCore.Cors;

    [Route("api/[controller]")]
    [ApiController]
    //[DisableCors]
    public class ZodiacController : ControllerBase
    {
        [HttpPost("Chinese")]
        public string GetChineseZodiacSign([FromBody] DateTime dob)
        {
            return DoLookup(dob, ChineseZodiacLookup.GetSign);
        }

        [HttpPost("Western")]
        public string GetWesternZodiacSign([FromBody] DateTime dob)
        {
            return DoLookup(dob, WesternZodiacLookup.GetSign);
        }

        private string DoLookup(DateTime birthDate, Func<DateTime, string> lookupFunc)
        {
            return $"\"{lookupFunc.Invoke(birthDate)}\"";
        }
    }
}