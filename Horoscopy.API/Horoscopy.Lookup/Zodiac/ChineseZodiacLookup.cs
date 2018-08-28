namespace Horoscopy.Lookup.Zodiac
{
    using System;

    public class ChineseZodiacLookup
    {
        public static string GetSign(DateTime dob)
        {
            var sign = (dob.Year - 1800) % 12;

            switch (sign)
            {
                case 0: return "Monkey";
                case 1: return "Rooster";
                case 2: return "Dog";
                case 3: return "Pig";
                case 4: return "Rat";
                case 5: return "Ox";
                case 6: return "Tiger";
                case 7: return "Rabbit";
                case 8: return "Dragon";
                case 9: return "Snake";
                case 10: return "Horse";
                case 11: return "Goat";
            };

            return null;
        }
    }
}
