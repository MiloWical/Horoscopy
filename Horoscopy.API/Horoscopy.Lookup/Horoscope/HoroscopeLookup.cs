using System;
using System.Collections.Generic;
using System.Text;

namespace Horoscopy.Lookup.Horoscope
{
    using System.IO;
    using System.Net.Http;
    using System.Xml.Linq;
    using HtmlAgilityPack;
    using Zodiac;

    public class HoroscopeLookup
    {
        private static readonly string HoroscopeUrlTemplate;

        static HoroscopeLookup()
        {
            var envUrl = Environment.GetEnvironmentVariable("HOROSCOPE_URL_TEMPLATE");

            HoroscopeUrlTemplate = envUrl ?? "https://www.astrology.com/horoscope/daily/{0}.html";
        }

        public static string GetHoroscope(DateTime dob)
        {
            var zodiacSign = WesternZodiacLookup.GetSign(dob);

            var web = new HtmlWeb();
            var doc = web.Load(string.Format(HoroscopeUrlTemplate, zodiacSign));

            var horoscope = doc.DocumentNode.SelectSingleNode("/html/body/section/div/p").InnerText;

            return horoscope;
        }
    }
}
