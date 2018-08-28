namespace Horoscopy.Lookup.Zodiac
{
    #region Usings

    using System;

    #endregion

    public class WesternZodiacLookup
    {
        public static string GetSign(DateTime dob)
        {
            switch (dob.Month)
            {
                case 1:
                    return dob.Day <= 20 ? "Capricorn" : "Aquarius";
                case 2:
                    return dob.Day <= 19 ? "Aquarius" : "Pisces";
                case 3:
                    return dob.Day <= 20 ? "Pisces" : "Aries";
                case 4:
                    return dob.Day <= 20 ? "Aries" : "Taurus";
                case 5:
                    return dob.Day <= 21 ? "Taurus" : "Gemini";
                case 6:
                    return dob.Day <= 22 ? "Gemini" : "Cancer";
                case 7:
                    return dob.Day <= 22 ? "Cancer" : "Leo";
                case 8:
                    return dob.Day <= 23 ? "Leo" : "Virgo";
                case 9:
                    return dob.Day <= 23 ? "Virgo" : "Libra";
                case 10:
                    return dob.Day <= 23 ? "Libra" : "Scorpio";
                case 11:
                    return dob.Day <= 22 ? "Scorpio" : "Sagittarius";
                case 12:
                    return dob.Day <= 21 ? "Sagittarius" : "Capricorn";
                default:
                    return null;
            }
        }
    }
}