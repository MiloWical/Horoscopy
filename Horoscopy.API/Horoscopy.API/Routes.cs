using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Horoscopy.API
{
    using Microsoft.AspNetCore.Builder;
    using Microsoft.AspNetCore.Routing;

    public class Routes
    {
        public static void Configure(IRouteBuilder routes)
        {
            routes.MapRoute(name:"default", template:"swagger");
        }
    }
}
