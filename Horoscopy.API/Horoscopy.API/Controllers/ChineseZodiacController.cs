using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Horoscopy.API.Controllers
{
    using Lookup.Zodiac;

    [Route("api/[controller]")]
    [ApiController]
    public class ChineseZodiacController : ControllerBase
    {
        [HttpPost("Sign")]
        public string GetZodiacSign([FromBody] DateTime dob)
        {
            return ChineseZodiacLookup.GetSign(dob);
        }
    }
}