export default function getCountryCodeFromEmoji(emoji) {
  const countryCodes = {
    "🇦🇫": "af", // Afghanistan
    "🇦🇱": "al", // Albania
    "🇩🇿": "dz", // Algeria
    "🇦🇸": "as", // American Samoa
    "🇦🇩": "ad", // Andorra
    "🇦🇴": "ao", // Angola
    "🇦🇮": "ai", // Anguilla
    "🇦🇶": "aq", // Antarctica
    "🇦🇬": "ag", // Antigua and Barbuda
    "🇦🇷": "ar", // Argentina
    "🇦🇲": "am", // Armenia
    "🇦🇺": "au", // Australia
    "🇦🇹": "at", // Austria
    "🇦🇿": "az", // Azerbaijan
    "🇧🇸": "bs", // Bahamas
    "🇧🇭": "bh", // Bahrain
    "🇧🇩": "bd", // Bangladesh
    "🇧🇧": "bb", // Barbados
    "🇧🇾": "by", // Belarus
    "🇧🇪": "be", // Belgium
    "🇧🇿": "bz", // Belize
    "🇧🇯": "bj", // Benin
    "🇧🇲": "bm", // Bermuda
    "🇧🇹": "bt", // Bhutan
    "🇧🇴": "bo", // Bolivia
    "🇧🇦": "ba", // Bosnia and Herzegovina
    "🇧🇼": "bw", // Botswana
    "🇧🇷": "br", // Brazil
    "🇧🇳": "bn", // Brunei
    "🇧🇬": "bg", // Bulgaria
    "🇧🇫": "bf", // Burkina Faso
    "🇧🇮": "bi", // Burundi
    "🇨🇻": "cv", // Cabo Verde
    "🇰🇭": "kh", // Cambodia
    "🇨🇲": "cm", // Cameroon
    "🇨🇦": "ca", // Canada
    "🇮🇨": "ic", // Canary Islands
    "🇰🇾": "ky", // Cayman Islands
    "🇨🇫": "cf", // Central African Republic
    "🇹🇩": "td", // Chad
    "🇨🇱": "cl", // Chile
    "🇨🇳": "cn", // China
    "🇨🇴": "co", // Colombia
    "🇰🇲": "km", // Comoros
    "🇨🇬": "cg", // Congo - Brazzaville
    "🇨🇩": "cd", // Congo - Kinshasa
    "🇨🇷": "cr", // Costa Rica
    "🇭🇷": "hr", // Croatia
    "🇨🇺": "cu", // Cuba
    "🇨🇾": "cy", // Cyprus
    "🇨🇿": "cz", // Czech Republic
    "🇩🇰": "dk", // Denmark
    "🇩🇯": "dj", // Djibouti
    "🇩🇲": "dm", // Dominica
    "🇩🇴": "do", // Dominican Republic
    "🇪🇨": "ec", // Ecuador
    "🇪🇬": "eg", // Egypt
    "🇸🇻": "sv", // El Salvador
    "🇬🇶": "gq", // Equatorial Guinea
    "🇪🇷": "er", // Eritrea
    "🇪🇪": "ee", // Estonia
    "🇪🇹": "et", // Ethiopia
    "🇫🇯": "fj", // Fiji
    "🇫🇮": "fi", // Finland
    "🇫🇷": "fr", // France
    "🇬🇦": "ga", // Gabon
    "🇬🇲": "gm", // Gambia
    "🇬🇪": "ge", // Georgia
    "🇩🇪": "de", // Germany
    "🇬🇭": "gh", // Ghana
    "🇬🇷": "gr", // Greece
    "🇬🇱": "gl", // Greenland
    "🇬🇩": "gd", // Grenada
    "🇬🇺": "gu", // Guam
    "🇬🇹": "gt", // Guatemala
    "🇬🇳": "gn", // Guinea
    "🇬🇼": "gw", // Guinea-Bissau
    "🇬🇾": "gy", // Guyana
    "🇭🇹": "ht", // Haiti
    "🇭🇳": "hn", // Honduras
    "🇭🇺": "hu", // Hungary
    "🇮🇸": "is", // Iceland
    "🇮🇳": "in", // India
    "🇮🇩": "id", // Indonesia
    "🇮🇷": "ir", // Iran
    "🇮🇶": "iq", // Iraq
    "🇮🇪": "ie", // Ireland
    "🇮🇱": "il", // Israel
    "🇮🇹": "it", // Italy
    "🇯🇲": "jm", // Jamaica
    "🇯🇵": "jp", // Japan
    "🇯🇴": "jo", // Jordan
    "🇰🇿": "kz", // Kazakhstan
    "🇰🇪": "ke", // Kenya
    "🇰🇮": "ki", // Kiribati
    "🇰🇼": "kw", // Kuwait
    "🇰🇬": "kg", // Kyrgyzstan
    "🇱🇦": "la", // Laos
    "🇱🇻": "lv", // Latvia
    "🇱🇧": "lb", // Lebanon
    "🇱🇸": "ls", // Lesotho
    "🇱🇷": "lr", // Liberia
    "🇱🇾": "ly", // Libya
    "🇱🇮": "li", // Liechtenstein
    "🇱🇹": "lt", // Lithuania
    "🇱🇺": "lu", // Luxembourg
    "🇲🇴": "mo", // Macao
    "🇲🇰": "mk", // North Macedonia
    "🇲🇬": "mg", // Madagascar
    "🇲🇼": "mw", // Malawi
    "🇲🇾": "my", // Malaysia
    "🇲🇻": "mv", // Maldives
    "🇲🇱": "ml", // Mali
    "🇲🇹": "mt", // Malta
    "🇲🇭": "mh", // Marshall Islands
    "🇲🇷": "mr", // Mauritania
    "🇲🇺": "mu", // Mauritius
    "🇲🇽": "mx", // Mexico
    "🇫🇲": "fm", // Micronesia
    "🇲🇩": "md", // Moldova
    "🇲🇨": "mc", // Monaco
    "🇲🇳": "mn", // Mongolia
    "🇲🇪": "me", // Montenegro
    "🇲🇦": "ma", // Morocco
    "🇲🇿": "mz", // Mozambique
    "🇲🇲": "mm", // Myanmar
    "🇳🇦": "na", // Namibia
    "🇳🇵": "np", // Nepal
    "🇳🇱": "nl", // Netherlands
    "🇳🇿": "nz", // New Zealand
    "🇳🇮": "ni", // Nicaragua
    "🇳🇪": "ne", // Niger
    "🇳🇬": "ng", // Nigeria
    "🇰🇵": "kp", // North Korea
    "🇳🇴": "no", // Norway
    "🇴🇲": "om", // Oman
    "🇵🇰": "pk", // Pakistan
    "🇵🇼": "pw", // Palau
    "🇵🇸": "ps", // Palestine
    "🇵🇦": "pa", // Panama
    "🇵🇬": "pg", // Papua New Guinea
    "🇵🇾": "py", // Paraguay
    "🇵🇪": "pe", // Peru
    "🇵🇭": "ph", // Philippines
    "🇵🇱": "pl", // Poland
    "🇵🇹": "pt", // Portugal
    "🇶🇦": "qa", // Qatar
    "🇷🇴": "ro", // Romania
    "🇷🇺": "ru", // Russia
    "🇷🇼": "rw", // Rwanda
    "🇼🇸": "ws", // Samoa
    "🇸🇲": "sm", // San Marino
    "🇸🇦": "sa", // Saudi Arabia
    "🇸🇳": "sn", // Senegal
    "🇷🇸": "rs", // Serbia
    "🇸🇨": "sc", // Seychelles
    "🇸🇱": "sl", // Sierra Leone
    "🇸🇬": "sg", // Singapore
    "🇸🇰": "sk", // Slovakia
    "🇸🇮": "si", // Slovenia
    "🇸🇧": "sb", // Solomon Islands
    "🇸🇴": "so", // Somalia
    "🇿🇦": "za", // South Africa
    "🇰🇷": "kr", // South Korea
    "🇸🇸": "ss", // South Sudan
    "🇪🇸": "es", // Spain
    "🇱🇰": "lk", // Sri Lanka
    "🇸🇩": "sd", // Sudan
    "🇸🇷": "sr", // Suriname
    "🇸🇪": "se", // Sweden
    "🇨🇭": "ch", // Switzerland
    "🇸🇾": "sy", // Syria
    "🇹🇼": "tw", // Taiwan
    "🇹🇯": "tj", // Tajikistan
    "🇹🇿": "tz", // Tanzania
    "🇹🇭": "th", // Thailand
    "🇹🇱": "tl", // Timor-Leste
    "🇹🇬": "tg", // Togo
    "🇹🇴": "to", // Tonga
    "🇹🇹": "tt", // Trinidad & Tobago
    "🇹🇳": "tn", // Tunisia
    "🇹🇷": "tr", // Turkey
    "🇹🇲": "tm", // Turkmenistan
    "🇹🇻": "tv", // Tuvalu
    "🇺🇬": "ug", // Uganda
    "🇺🇦": "ua", // Ukraine
    "🇦🇪": "ae", // United Arab Emirates
    "🇬🇧": "gb", // United Kingdom
    "🇺🇸": "us", // United States
    "🇺🇾": "uy", // Uruguay
    "🇺🇿": "uz", // Uzbekistan
    "🇻🇺": "vu", // Vanuatu
    "🇻🇦": "va", // Vatican City
    "🇻🇪": "ve", // Venezuela
    "🇻🇳": "vn", // Vietnam
    "🇾🇪": "ye", // Yemen
    "🇿🇲": "zm", // Zambia
    "🇿🇼": "zw", // Zimbabwe
  };

  // Extracts the country code from the emoji
  return countryCodes[emoji] || "unknown";
}

// // Example usage with cities
// const cities = [
//   { cityName: "Lisbon", country: "Portugal", emoji: "🇵🇹" },
//   { cityName: "Madrid", country: "Spain", emoji: "🇪🇸" },
//   { cityName: "Berlin", country: "Germany", emoji: "🇩🇪" },
// ];

// cities.forEach((city) => {
//   const countryCode = getCountryCodeFromEmoji(city.emoji);
//   console.log(`${city.cityName}: ${countryCode}`); // Logs: "Lisbon: pt", "Madrid: es", "Berlin: de"
// });
