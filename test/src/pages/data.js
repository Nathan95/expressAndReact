let data = [
{
id: 1,
country_code: "GB",
country_name: "United Kingdom",
is_active: true,
is_main: 1,
website_id: "1",
store_code: "gb",
position: "1",
currency_code: "GBP",
currency_symbol: "£",
base_currency_code: "GBP",
base_currency_symbol: "£",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 2,
country_code: "US",
country_name: "United States",
is_active: true,
is_main: 1,
website_id: "2",
store_code: "us",
position: "2",
currency_code: "USD",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: true,
is_optional_zip: false,
available_regions: [
  {
    region_id: 1,
    region_code: "AL",
    region: "Alabama"
  },
  {
    region_id: 2,
    region_code: "AK",
    region: "Alaska"
  },
  {
    region_id: 3,
    region_code: "AS",
    region: "American Samoa"
  },
  {
    region_id: 4,
    region_code: "AZ",
    region: "Arizona"
  },
  {
    region_id: 5,
    region_code: "AR",
    region: "Arkansas"
  },
  {
    region_id: 6,
    region_code: "AE",
    region: "Armed Forces Africa"
  },
  {
    region_id: 7,
    region_code: "AA",
    region: "Armed Forces Americas"
  },
  {
    region_id: 8,
    region_code: "AE",
    region: "Armed Forces Canada"
  },
  {
    region_id: 9,
    region_code: "AE",
    region: "Armed Forces Europe"
  },
  {
    region_id: 10,
    region_code: "AE",
    region: "Armed Forces Middle East"
  },
  {
    region_id: 11,
    region_code: "AP",
    region: "Armed Forces Pacific"
  },
  {
    region_id: 12,
    region_code: "CA",
    region: "California"
  },
  {
    region_id: 13,
    region_code: "CO",
    region: "Colorado"
  },
  {
    region_id: 14,
    region_code: "CT",
    region: "Connecticut"
  },
  {
    region_id: 15,
    region_code: "DE",
    region: "Delaware"
  },
  {
    region_id: 16,
    region_code: "DC",
    region: "District of Columbia"
  },
  {
    region_id: 17,
    region_code: "FM",
    region: "Federated States Of Micronesia"
  },
  {
    region_id: 18,
    region_code: "FL",
    region: "Florida"
  },
  {
    region_id: 19,
    region_code: "GA",
    region: "Georgia"
  },
  {
    region_id: 20,
    region_code: "GU",
    region: "Guam"
  },
  {
    region_id: 21,
    region_code: "HI",
    region: "Hawaii"
  },
  {
    region_id: 22,
    region_code: "ID",
    region: "Idaho"
  },
  {
    region_id: 23,
    region_code: "IL",
    region: "Illinois"
  },
  {
    region_id: 24,
    region_code: "IN",
    region: "Indiana"
  },
  {
    region_id: 25,
    region_code: "IA",
    region: "Iowa"
  },
  {
    region_id: 26,
    region_code: "KS",
    region: "Kansas"
  },
  {
    region_id: 27,
    region_code: "KY",
    region: "Kentucky"
  },
  {
    region_id: 28,
    region_code: "LA",
    region: "Louisiana"
  },
  {
    region_id: 29,
    region_code: "ME",
    region: "Maine"
  },
  {
    region_id: 30,
    region_code: "MH",
    region: "Marshall Islands"
  },
  {
    region_id: 31,
    region_code: "MD",
    region: "Maryland"
  },
  {
    region_id: 32,
    region_code: "MA",
    region: "Massachusetts"
  },
  {
    region_id: 33,
    region_code: "MI",
    region: "Michigan"
  },
  {
    region_id: 34,
    region_code: "MN",
    region: "Minnesota"
  },
  {
    region_id: 35,
    region_code: "MS",
    region: "Mississippi"
  },
  {
    region_id: 36,
    region_code: "MO",
    region: "Missouri"
  },
  {
    region_id: 37,
    region_code: "MT",
    region: "Montana"
  },
  {
    region_id: 38,
    region_code: "NE",
    region: "Nebraska"
  },
  {
    region_id: 39,
    region_code: "NV",
    region: "Nevada"
  },
  {
    region_id: 40,
    region_code: "NH",
    region: "New Hampshire"
  },
  {
    region_id: 41,
    region_code: "NJ",
    region: "New Jersey"
  },
  {
    region_id: 42,
    region_code: "NM",
    region: "New Mexico"
  },
  {
    region_id: 43,
    region_code: "NY",
    region: "New York"
  },
  {
    region_id: 44,
    region_code: "NC",
    region: "North Carolina"
  },
  {
    region_id: 45,
    region_code: "ND",
    region: "North Dakota"
  },
  {
    region_id: 46,
    region_code: "MP",
    region: "Northern Mariana Islands"
  },
  {
    region_id: 47,
    region_code: "OH",
    region: "Ohio"
  },
  {
    region_id: 48,
    region_code: "OK",
    region: "Oklahoma"
  },
  {
    region_id: 49,
    region_code: "OR",
    region: "Oregon"
  },
  {
    region_id: 50,
    region_code: "PW",
    region: "Palau"
  },
  {
    region_id: 51,
    region_code: "PA",
    region: "Pennsylvania"
  },
  {
    region_id: 52,
    region_code: "PR",
    region: "Puerto Rico"
  },
  {
    region_id: 53,
    region_code: "RI",
    region: "Rhode Island"
  },
  {
    region_id: 54,
    region_code: "SC",
    region: "South Carolina"
  },
  {
    region_id: 55,
    region_code: "SD",
    region: "South Dakota"
  },
  {
    region_id: 56,
    region_code: "TN",
    region: "Tennessee"
  },
  {
    region_id: 57,
    region_code: "TX",
    region: "Texas"
  },
  {
    region_id: 58,
    region_code: "UT",
    region: "Utah"
  },
  {
    region_id: 59,
    region_code: "VT",
    region: "Vermont"
  },
  {
    region_id: 60,
    region_code: "VI",
    region: "Virgin Islands"
  },
  {
    region_id: 61,
    region_code: "VA",
    region: "Virginia"
  },
  {
    region_id: 62,
    region_code: "WA",
    region: "Washington"
  },
  {
    region_id: 63,
    region_code: "WV",
    region: "West Virginia"
  },
  {
    region_id: 64,
    region_code: "WI",
    region: "Wisconsin"
  },
  {
    region_id: 65,
    region_code: "WY",
    region: "Wyoming"
  }
],
free_shipping_threshold: 35
},
{
id: 3,
country_code: "HK",
country_name: "Hong Kong SAR China",
is_active: true,
is_main: 1,
website_id: "6",
store_code: "hk",
position: "4",
currency_code: "HKD",
currency_symbol: "HK$",
base_currency_code: "HKD",
base_currency_symbol: "HK$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: true,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 4,
country_code: "FR",
country_name: "France",
is_active: true,
is_main: 1,
website_id: "3",
store_code: "en-fr",
position: "6",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 182,
    region_code: "1",
    region: "Ain"
  },
  {
    region_id: 183,
    region_code: "2",
    region: "Aisne"
  },
  {
    region_id: 184,
    region_code: "3",
    region: "Allier"
  },
  {
    region_id: 185,
    region_code: "4",
    region: "Alpes-de-Haute-Provence"
  },
  {
    region_id: 187,
    region_code: "6",
    region: "Alpes-Maritimes"
  },
  {
    region_id: 188,
    region_code: "7",
    region: "Ardèche"
  },
  {
    region_id: 189,
    region_code: "8",
    region: "Ardennes"
  },
  {
    region_id: 190,
    region_code: "9",
    region: "Ariège"
  },
  {
    region_id: 191,
    region_code: "10",
    region: "Aube"
  },
  {
    region_id: 192,
    region_code: "11",
    region: "Aude"
  },
  {
    region_id: 193,
    region_code: "12",
    region: "Aveyron"
  },
  {
    region_id: 249,
    region_code: "67",
    region: "Bas-Rhin"
  },
  {
    region_id: 194,
    region_code: "13",
    region: "Bouches-du-Rhône"
  },
  {
    region_id: 195,
    region_code: "14",
    region: "Calvados"
  },
  {
    region_id: 196,
    region_code: "15",
    region: "Cantal"
  },
  {
    region_id: 197,
    region_code: "16",
    region: "Charente"
  },
  {
    region_id: 198,
    region_code: "17",
    region: "Charente-Maritime"
  },
  {
    region_id: 199,
    region_code: "18",
    region: "Cher"
  },
  {
    region_id: 200,
    region_code: "19",
    region: "Corrèze"
  },
  {
    region_id: 201,
    region_code: "2A",
    region: "Corse-du-Sud"
  },
  {
    region_id: 203,
    region_code: "21",
    region: "Côte-d'Or"
  },
  {
    region_id: 204,
    region_code: "22",
    region: "Côtes-d'Armor"
  },
  {
    region_id: 205,
    region_code: "23",
    region: "Creuse"
  },
  {
    region_id: 261,
    region_code: "79",
    region: "Deux-Sèvres"
  },
  {
    region_id: 206,
    region_code: "24",
    region: "Dordogne"
  },
  {
    region_id: 207,
    region_code: "25",
    region: "Doubs"
  },
  {
    region_id: 208,
    region_code: "26",
    region: "Drôme"
  },
  {
    region_id: 273,
    region_code: "91",
    region: "Essonne"
  },
  {
    region_id: 209,
    region_code: "27",
    region: "Eure"
  },
  {
    region_id: 210,
    region_code: "28",
    region: "Eure-et-Loir"
  },
  {
    region_id: 211,
    region_code: "29",
    region: "Finistère"
  },
  {
    region_id: 212,
    region_code: "30",
    region: "Gard"
  },
  {
    region_id: 214,
    region_code: "32",
    region: "Gers"
  },
  {
    region_id: 215,
    region_code: "33",
    region: "Gironde"
  },
  {
    region_id: 250,
    region_code: "68",
    region: "Haut-Rhin"
  },
  {
    region_id: 202,
    region_code: "2B",
    region: "Haute-Corse"
  },
  {
    region_id: 213,
    region_code: "31",
    region: "Haute-Garonne"
  },
  {
    region_id: 225,
    region_code: "43",
    region: "Haute-Loire"
  },
  {
    region_id: 234,
    region_code: "52",
    region: "Haute-Marne"
  },
  {
    region_id: 252,
    region_code: "70",
    region: "Haute-Saône"
  },
  {
    region_id: 256,
    region_code: "74",
    region: "Haute-Savoie"
  },
  {
    region_id: 269,
    region_code: "87",
    region: "Haute-Vienne"
  },
  {
    region_id: 186,
    region_code: "5",
    region: "Hautes-Alpes"
  },
  {
    region_id: 247,
    region_code: "65",
    region: "Hautes-Pyrénées"
  },
  {
    region_id: 274,
    region_code: "92",
    region: "Hauts-de-Seine"
  },
  {
    region_id: 216,
    region_code: "34",
    region: "Hérault"
  },
  {
    region_id: 217,
    region_code: "35",
    region: "Ille-et-Vilaine"
  },
  {
    region_id: 218,
    region_code: "36",
    region: "Indre"
  },
  {
    region_id: 219,
    region_code: "37",
    region: "Indre-et-Loire"
  },
  {
    region_id: 220,
    region_code: "38",
    region: "Isère"
  },
  {
    region_id: 221,
    region_code: "39",
    region: "Jura"
  },
  {
    region_id: 222,
    region_code: "40",
    region: "Landes"
  },
  {
    region_id: 223,
    region_code: "41",
    region: "Loir-et-Cher"
  },
  {
    region_id: 224,
    region_code: "42",
    region: "Loire"
  },
  {
    region_id: 226,
    region_code: "44",
    region: "Loire-Atlantique"
  },
  {
    region_id: 227,
    region_code: "45",
    region: "Loiret"
  },
  {
    region_id: 228,
    region_code: "46",
    region: "Lot"
  },
  {
    region_id: 229,
    region_code: "47",
    region: "Lot-et-Garonne"
  },
  {
    region_id: 230,
    region_code: "48",
    region: "Lozère"
  },
  {
    region_id: 231,
    region_code: "49",
    region: "Maine-et-Loire"
  },
  {
    region_id: 232,
    region_code: "50",
    region: "Manche"
  },
  {
    region_id: 233,
    region_code: "51",
    region: "Marne"
  },
  {
    region_id: 235,
    region_code: "53",
    region: "Mayenne"
  },
  {
    region_id: 236,
    region_code: "54",
    region: "Meurthe-et-Moselle"
  },
  {
    region_id: 237,
    region_code: "55",
    region: "Meuse"
  },
  {
    region_id: 238,
    region_code: "56",
    region: "Morbihan"
  },
  {
    region_id: 239,
    region_code: "57",
    region: "Moselle"
  },
  {
    region_id: 240,
    region_code: "58",
    region: "Nièvre"
  },
  {
    region_id: 241,
    region_code: "59",
    region: "Nord"
  },
  {
    region_id: 242,
    region_code: "60",
    region: "Oise"
  },
  {
    region_id: 243,
    region_code: "61",
    region: "Orne"
  },
  {
    region_id: 257,
    region_code: "75",
    region: "Paris"
  },
  {
    region_id: 244,
    region_code: "62",
    region: "Pas-de-Calais"
  },
  {
    region_id: 245,
    region_code: "63",
    region: "Puy-de-Dôme"
  },
  {
    region_id: 246,
    region_code: "64",
    region: "Pyrénées-Atlantiques"
  },
  {
    region_id: 248,
    region_code: "66",
    region: "Pyrénées-Orientales"
  },
  {
    region_id: 251,
    region_code: "69",
    region: "Rhône"
  },
  {
    region_id: 253,
    region_code: "71",
    region: "Saône-et-Loire"
  },
  {
    region_id: 254,
    region_code: "72",
    region: "Sarthe"
  },
  {
    region_id: 255,
    region_code: "73",
    region: "Savoie"
  },
  {
    region_id: 259,
    region_code: "77",
    region: "Seine-et-Marne"
  },
  {
    region_id: 258,
    region_code: "76",
    region: "Seine-Maritime"
  },
  {
    region_id: 275,
    region_code: "93",
    region: "Seine-Saint-Denis"
  },
  {
    region_id: 262,
    region_code: "80",
    region: "Somme"
  },
  {
    region_id: 263,
    region_code: "81",
    region: "Tarn"
  },
  {
    region_id: 264,
    region_code: "82",
    region: "Tarn-et-Garonne"
  },
  {
    region_id: 272,
    region_code: "90",
    region: "Territoire-de-Belfort"
  },
  {
    region_id: 277,
    region_code: "95",
    region: "Val-d'Oise"
  },
  {
    region_id: 276,
    region_code: "94",
    region: "Val-de-Marne"
  },
  {
    region_id: 265,
    region_code: "83",
    region: "Var"
  },
  {
    region_id: 266,
    region_code: "84",
    region: "Vaucluse"
  },
  {
    region_id: 267,
    region_code: "85",
    region: "Vendée"
  },
  {
    region_id: 268,
    region_code: "86",
    region: "Vienne"
  },
  {
    region_id: 270,
    region_code: "88",
    region: "Vosges"
  },
  {
    region_id: 271,
    region_code: "89",
    region: "Yonne"
  },
  {
    region_id: 260,
    region_code: "78",
    region: "Yvelines"
  }
],
free_shipping_threshold: 35
},
{
id: 5,
country_code: "DE",
country_name: "Germany",
is_active: true,
is_main: 1,
website_id: "3",
store_code: "en-de",
position: "8",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 80,
    region_code: "BAW",
    region: "Baden-Württemberg"
  },
  {
    region_id: 81,
    region_code: "BAY",
    region: "Bayern"
  },
  {
    region_id: 82,
    region_code: "BER",
    region: "Berlin"
  },
  {
    region_id: 83,
    region_code: "BRG",
    region: "Brandenburg"
  },
  {
    region_id: 84,
    region_code: "BRE",
    region: "Bremen"
  },
  {
    region_id: 85,
    region_code: "HAM",
    region: "Hamburg"
  },
  {
    region_id: 86,
    region_code: "HES",
    region: "Hessen"
  },
  {
    region_id: 87,
    region_code: "MEC",
    region: "Mecklenburg-Vorpommern"
  },
  {
    region_id: 79,
    region_code: "NDS",
    region: "Niedersachsen"
  },
  {
    region_id: 88,
    region_code: "NRW",
    region: "Nordrhein-Westfalen"
  },
  {
    region_id: 89,
    region_code: "RHE",
    region: "Rheinland-Pfalz"
  },
  {
    region_id: 90,
    region_code: "SAR",
    region: "Saarland"
  },
  {
    region_id: 91,
    region_code: "SAS",
    region: "Sachsen"
  },
  {
    region_id: 92,
    region_code: "SAC",
    region: "Sachsen-Anhalt"
  },
  {
    region_id: 93,
    region_code: "SCN",
    region: "Schleswig-Holstein"
  },
  {
    region_id: 94,
    region_code: "THE",
    region: "Thüringen"
  }
],
free_shipping_threshold: 35
},
{
id: 6,
country_code: "DK",
country_name: "Denmark",
is_active: true,
is_main: 1,
website_id: "9",
store_code: "dk",
position: "9",
currency_code: "DKK",
currency_symbol: "DKK",
base_currency_code: "DKK",
base_currency_symbol: "DKK",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 7,
country_code: "KR",
country_name: "South Korea",
is_active: true,
is_main: 1,
website_id: "12",
store_code: "kr",
position: "13",
currency_code: "KRW",
currency_symbol: "₩",
base_currency_code: "KRW",
base_currency_symbol: "₩",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 8,
country_code: "AU",
country_name: "Australia",
is_active: true,
is_main: 1,
website_id: "4",
store_code: "au",
position: "3",
currency_code: "AUD",
currency_symbol: "AU$",
base_currency_code: "AUD",
base_currency_symbol: "AU$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 9,
country_code: "RU",
country_name: "Russia",
is_active: true,
is_main: 1,
website_id: "13",
store_code: "row",
position: "10",
currency_code: "RUB",
currency_symbol: "RUB",
base_currency_code: "RUB",
base_currency_symbol: "RUB",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 10,
country_code: "TW",
country_name: "Taiwan",
is_active: true,
is_main: 1,
website_id: "14",
store_code: "row",
position: "12",
currency_code: "TWD",
currency_symbol: "NT$",
base_currency_code: "TWD",
base_currency_symbol: "NT$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 11,
country_code: "SG",
country_name: "Singapore",
is_active: true,
is_main: 1,
website_id: "10",
store_code: "sg",
position: "7",
currency_code: "SGD",
currency_symbol: "S$",
base_currency_code: "SGD",
base_currency_symbol: "S$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 12,
country_code: "CA",
country_name: "Canada",
is_active: true,
is_main: 1,
website_id: "7",
store_code: "ca",
position: "14",
currency_code: "CAD",
currency_symbol: "CA$",
base_currency_code: "CAD",
base_currency_symbol: "CA$",
rate: 1,
is_mandatory_region: true,
is_optional_zip: false,
available_regions: [
  {
    region_id: 66,
    region_code: "AB",
    region: "Alberta"
  },
  {
    region_id: 67,
    region_code: "BC",
    region: "British Columbia"
  },
  {
    region_id: 68,
    region_code: "MB",
    region: "Manitoba"
  },
  {
    region_id: 70,
    region_code: "NB",
    region: "New Brunswick"
  },
  {
    region_id: 69,
    region_code: "NL",
    region: "Newfoundland and Labrador"
  },
  {
    region_id: 72,
    region_code: "NT",
    region: "Northwest Territories"
  },
  {
    region_id: 71,
    region_code: "NS",
    region: "Nova Scotia"
  },
  {
    region_id: 73,
    region_code: "NU",
    region: "Nunavut"
  },
  {
    region_id: 74,
    region_code: "ON",
    region: "Ontario"
  },
  {
    region_id: 75,
    region_code: "PE",
    region: "Prince Edward Island"
  },
  {
    region_id: 76,
    region_code: "QC",
    region: "Quebec"
  },
  {
    region_id: 77,
    region_code: "SK",
    region: "Saskatchewan"
  },
  {
    region_id: 78,
    region_code: "YT",
    region: "Yukon Territory"
  }
],
free_shipping_threshold: 35
},
{
id: 13,
country_code: "NL",
country_name: "Netherlands",
is_active: true,
is_main: 1,
website_id: "3",
store_code: "eu",
position: "15",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 14,
country_code: "JP",
country_name: "Japan",
is_active: true,
is_main: 1,
website_id: "5",
store_code: "jp",
position: "5",
currency_code: "JPY",
currency_symbol: "¥",
base_currency_code: "JPY",
base_currency_symbol: "¥",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 15,
country_code: "IT",
country_name: "Italy",
is_active: true,
is_main: 1,
website_id: "3",
store_code: "eu",
position: "16",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 16,
country_code: "SE",
country_name: "Sweden",
is_active: true,
is_main: 1,
website_id: "3",
store_code: "eu",
position: "17",
currency_code: "SEK",
currency_symbol: "SEK",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 10.453564,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 17,
country_code: "BE",
country_name: "Belgium",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 18,
country_code: "AR",
country_name: "Argentina",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "ARS",
currency_symbol: "AR$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 22.353,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 19,
country_code: "AT",
country_name: "Austria",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 102,
    region_code: "BL",
    region: "Burgenland"
  },
  {
    region_id: 99,
    region_code: "KN",
    region: "Kärnten"
  },
  {
    region_id: 96,
    region_code: "NO",
    region: "Niederösterreich"
  },
  {
    region_id: 97,
    region_code: "OO",
    region: "Oberösterreich"
  },
  {
    region_id: 98,
    region_code: "SB",
    region: "Salzburg"
  },
  {
    region_id: 100,
    region_code: "ST",
    region: "Steiermark"
  },
  {
    region_id: 101,
    region_code: "TI",
    region: "Tirol"
  },
  {
    region_id: 103,
    region_code: "VB",
    region: "Voralberg"
  },
  {
    region_id: 95,
    region_code: "WI",
    region: "Wien"
  }
],
free_shipping_threshold: 35
},
{
id: 20,
country_code: "IE",
country_name: "Ireland",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: true,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 21,
country_code: "RO",
country_name: "Romania",
is_active: false,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "RON",
currency_symbol: "RON",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 4.649567,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 22,
country_code: "ES",
country_name: "Spain",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 130,
    region_code: "A Coruсa",
    region: "A Coruña"
  },
  {
    region_id: 131,
    region_code: "Alava",
    region: "Alava"
  },
  {
    region_id: 132,
    region_code: "Albacete",
    region: "Albacete"
  },
  {
    region_id: 133,
    region_code: "Alicante",
    region: "Alicante"
  },
  {
    region_id: 134,
    region_code: "Almeria",
    region: "Almeria"
  },
  {
    region_id: 135,
    region_code: "Asturias",
    region: "Asturias"
  },
  {
    region_id: 136,
    region_code: "Avila",
    region: "Avila"
  },
  {
    region_id: 137,
    region_code: "Badajoz",
    region: "Badajoz"
  },
  {
    region_id: 138,
    region_code: "Baleares",
    region: "Baleares"
  },
  {
    region_id: 139,
    region_code: "Barcelona",
    region: "Barcelona"
  },
  {
    region_id: 140,
    region_code: "Burgos",
    region: "Burgos"
  },
  {
    region_id: 141,
    region_code: "Caceres",
    region: "Caceres"
  },
  {
    region_id: 142,
    region_code: "Cadiz",
    region: "Cadiz"
  },
  {
    region_id: 143,
    region_code: "Cantabria",
    region: "Cantabria"
  },
  {
    region_id: 144,
    region_code: "Castellon",
    region: "Castellon"
  },
  {
    region_id: 145,
    region_code: "Ceuta",
    region: "Ceuta"
  },
  {
    region_id: 146,
    region_code: "Ciudad Real",
    region: "Ciudad Real"
  },
  {
    region_id: 147,
    region_code: "Cordoba",
    region: "Cordoba"
  },
  {
    region_id: 148,
    region_code: "Cuenca",
    region: "Cuenca"
  },
  {
    region_id: 149,
    region_code: "Girona",
    region: "Girona"
  },
  {
    region_id: 150,
    region_code: "Granada",
    region: "Granada"
  },
  {
    region_id: 151,
    region_code: "Guadalajara",
    region: "Guadalajara"
  },
  {
    region_id: 152,
    region_code: "Guipuzcoa",
    region: "Guipuzcoa"
  },
  {
    region_id: 153,
    region_code: "Huelva",
    region: "Huelva"
  },
  {
    region_id: 154,
    region_code: "Huesca",
    region: "Huesca"
  },
  {
    region_id: 155,
    region_code: "Jaen",
    region: "Jaen"
  },
  {
    region_id: 156,
    region_code: "La Rioja",
    region: "La Rioja"
  },
  {
    region_id: 157,
    region_code: "Las Palmas",
    region: "Las Palmas"
  },
  {
    region_id: 158,
    region_code: "Leon",
    region: "Leon"
  },
  {
    region_id: 159,
    region_code: "Lleida",
    region: "Lleida"
  },
  {
    region_id: 160,
    region_code: "Lugo",
    region: "Lugo"
  },
  {
    region_id: 161,
    region_code: "Madrid",
    region: "Madrid"
  },
  {
    region_id: 162,
    region_code: "Malaga",
    region: "Malaga"
  },
  {
    region_id: 163,
    region_code: "Melilla",
    region: "Melilla"
  },
  {
    region_id: 164,
    region_code: "Murcia",
    region: "Murcia"
  },
  {
    region_id: 165,
    region_code: "Navarra",
    region: "Navarra"
  },
  {
    region_id: 166,
    region_code: "Ourense",
    region: "Ourense"
  },
  {
    region_id: 167,
    region_code: "Palencia",
    region: "Palencia"
  },
  {
    region_id: 168,
    region_code: "Pontevedra",
    region: "Pontevedra"
  },
  {
    region_id: 169,
    region_code: "Salamanca",
    region: "Salamanca"
  },
  {
    region_id: 170,
    region_code: "Santa Cruz de Tenerife",
    region: "Santa Cruz de Tenerife"
  },
  {
    region_id: 171,
    region_code: "Segovia",
    region: "Segovia"
  },
  {
    region_id: 172,
    region_code: "Sevilla",
    region: "Sevilla"
  },
  {
    region_id: 173,
    region_code: "Soria",
    region: "Soria"
  },
  {
    region_id: 174,
    region_code: "Tarragona",
    region: "Tarragona"
  },
  {
    region_id: 175,
    region_code: "Teruel",
    region: "Teruel"
  },
  {
    region_id: 176,
    region_code: "Toledo",
    region: "Toledo"
  },
  {
    region_id: 177,
    region_code: "Valencia",
    region: "Valencia"
  },
  {
    region_id: 178,
    region_code: "Valladolid",
    region: "Valladolid"
  },
  {
    region_id: 179,
    region_code: "Vizcaya",
    region: "Vizcaya"
  },
  {
    region_id: 180,
    region_code: "Zamora",
    region: "Zamora"
  },
  {
    region_id: 181,
    region_code: "Zaragoza",
    region: "Zaragoza"
  }
],
free_shipping_threshold: 35
},
{
id: 23,
country_code: "LV",
country_name: "Latvia",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 471,
    region_code: "Ādažu novads",
    region: "Ādažu novads"
  },
  {
    region_id: 366,
    region_code: "Aglonas novads",
    region: "Aglonas novads"
  },
  {
    region_id: 367,
    region_code: "LV-AI",
    region: "Aizkraukles novads"
  },
  {
    region_id: 368,
    region_code: "Aizputes novads",
    region: "Aizputes novads"
  },
  {
    region_id: 369,
    region_code: "Aknīstes novads",
    region: "Aknīstes novads"
  },
  {
    region_id: 370,
    region_code: "Alojas novads",
    region: "Alojas novads"
  },
  {
    region_id: 371,
    region_code: "Alsungas novads",
    region: "Alsungas novads"
  },
  {
    region_id: 372,
    region_code: "LV-AL",
    region: "Alūksnes novads"
  },
  {
    region_id: 373,
    region_code: "Amatas novads",
    region: "Amatas novads"
  },
  {
    region_id: 374,
    region_code: "Apes novads",
    region: "Apes novads"
  },
  {
    region_id: 375,
    region_code: "Auces novads",
    region: "Auces novads"
  },
  {
    region_id: 376,
    region_code: "Babītes novads",
    region: "Babītes novads"
  },
  {
    region_id: 377,
    region_code: "Baldones novads",
    region: "Baldones novads"
  },
  {
    region_id: 378,
    region_code: "Baltinavas novads",
    region: "Baltinavas novads"
  },
  {
    region_id: 379,
    region_code: "LV-BL",
    region: "Balvu novads"
  },
  {
    region_id: 380,
    region_code: "LV-BU",
    region: "Bauskas novads"
  },
  {
    region_id: 381,
    region_code: "Beverīnas novads",
    region: "Beverīnas novads"
  },
  {
    region_id: 382,
    region_code: "Brocēnu novads",
    region: "Brocēnu novads"
  },
  {
    region_id: 383,
    region_code: "Burtnieku novads",
    region: "Burtnieku novads"
  },
  {
    region_id: 384,
    region_code: "Carnikavas novads",
    region: "Carnikavas novads"
  },
  {
    region_id: 387,
    region_code: "LV-CE",
    region: "Cēsu novads"
  },
  {
    region_id: 385,
    region_code: "Cesvaines novads",
    region: "Cesvaines novads"
  },
  {
    region_id: 386,
    region_code: "Ciblas novads",
    region: "Ciblas novads"
  },
  {
    region_id: 388,
    region_code: "Dagdas novads",
    region: "Dagdas novads"
  },
  {
    region_id: 355,
    region_code: "LV-DGV",
    region: "Daugavpils"
  },
  {
    region_id: 389,
    region_code: "LV-DA",
    region: "Daugavpils novads"
  },
  {
    region_id: 390,
    region_code: "LV-DO",
    region: "Dobeles novads"
  },
  {
    region_id: 391,
    region_code: "Dundagas novads",
    region: "Dundagas novads"
  },
  {
    region_id: 392,
    region_code: "Durbes novads",
    region: "Durbes novads"
  },
  {
    region_id: 393,
    region_code: "Engures novads",
    region: "Engures novads"
  },
  {
    region_id: 472,
    region_code: "Ērgļu novads",
    region: "Ērgļu novads"
  },
  {
    region_id: 394,
    region_code: "Garkalnes novads",
    region: "Garkalnes novads"
  },
  {
    region_id: 395,
    region_code: "Grobiņas novads",
    region: "Grobiņas novads"
  },
  {
    region_id: 396,
    region_code: "LV-GU",
    region: "Gulbenes novads"
  },
  {
    region_id: 397,
    region_code: "Iecavas novads",
    region: "Iecavas novads"
  },
  {
    region_id: 398,
    region_code: "Ikšķiles novads",
    region: "Ikšķiles novads"
  },
  {
    region_id: 399,
    region_code: "Ilūkstes novads",
    region: "Ilūkstes novads"
  },
  {
    region_id: 400,
    region_code: "Inčukalna novads",
    region: "Inčukalna novads"
  },
  {
    region_id: 401,
    region_code: "Jaunjelgavas novads",
    region: "Jaunjelgavas novads"
  },
  {
    region_id: 402,
    region_code: "Jaunpiebalgas novads",
    region: "Jaunpiebalgas novads"
  },
  {
    region_id: 403,
    region_code: "Jaunpils novads",
    region: "Jaunpils novads"
  },
  {
    region_id: 357,
    region_code: "Jēkabpils",
    region: "Jēkabpils"
  },
  {
    region_id: 405,
    region_code: "LV-JK",
    region: "Jēkabpils novads"
  },
  {
    region_id: 356,
    region_code: "LV-JEL",
    region: "Jelgava"
  },
  {
    region_id: 404,
    region_code: "LV-JL",
    region: "Jelgavas novads"
  },
  {
    region_id: 358,
    region_code: "LV-JUR",
    region: "Jūrmala"
  },
  {
    region_id: 406,
    region_code: "Kandavas novads",
    region: "Kandavas novads"
  },
  {
    region_id: 412,
    region_code: "Kārsavas novads",
    region: "Kārsavas novads"
  },
  {
    region_id: 473,
    region_code: "Ķeguma novads",
    region: "Ķeguma novads"
  },
  {
    region_id: 474,
    region_code: "Ķekavas novads",
    region: "Ķekavas novads"
  },
  {
    region_id: 407,
    region_code: "Kokneses novads",
    region: "Kokneses novads"
  },
  {
    region_id: 410,
    region_code: "LV-KR",
    region: "Krāslavas novads"
  },
  {
    region_id: 408,
    region_code: "Krimuldas novads",
    region: "Krimuldas novads"
  },
  {
    region_id: 409,
    region_code: "Krustpils novads",
    region: "Krustpils novads"
  },
  {
    region_id: 411,
    region_code: "LV-KU",
    region: "Kuldīgas novads"
  },
  {
    region_id: 413,
    region_code: "Lielvārdes novads",
    region: "Lielvārdes novads"
  },
  {
    region_id: 359,
    region_code: "LV-LPX",
    region: "Liepāja"
  },
  {
    region_id: 360,
    region_code: "LV-LE",
    region: "Liepājas novads"
  },
  {
    region_id: 417,
    region_code: "Līgatnes novads",
    region: "Līgatnes novads"
  },
  {
    region_id: 414,
    region_code: "LV-LM",
    region: "Limbažu novads"
  },
  {
    region_id: 418,
    region_code: "Līvānu novads",
    region: "Līvānu novads"
  },
  {
    region_id: 415,
    region_code: "Lubānas novads",
    region: "Lubānas novads"
  },
  {
    region_id: 416,
    region_code: "LV-LU",
    region: "Ludzas novads"
  },
  {
    region_id: 419,
    region_code: "LV-MA",
    region: "Madonas novads"
  },
  {
    region_id: 421,
    region_code: "Mālpils novads",
    region: "Mālpils novads"
  },
  {
    region_id: 422,
    region_code: "Mārupes novads",
    region: "Mārupes novads"
  },
  {
    region_id: 420,
    region_code: "Mazsalacas novads",
    region: "Mazsalacas novads"
  },
  {
    region_id: 423,
    region_code: "Naukšēnu novads",
    region: "Naukšēnu novads"
  },
  {
    region_id: 424,
    region_code: "Neretas novads",
    region: "Neretas novads"
  },
  {
    region_id: 425,
    region_code: "Nīcas novads",
    region: "Nīcas novads"
  },
  {
    region_id: 426,
    region_code: "LV-OG",
    region: "Ogres novads"
  },
  {
    region_id: 427,
    region_code: "Olaines novads",
    region: "Olaines novads"
  },
  {
    region_id: 428,
    region_code: "Ozolnieku novads",
    region: "Ozolnieku novads"
  },
  {
    region_id: 432,
    region_code: "Pārgaujas novads",
    region: "Pārgaujas novads"
  },
  {
    region_id: 433,
    region_code: "Pāvilostas novads",
    region: "Pāvilostas novads"
  },
  {
    region_id: 434,
    region_code: "Pļaviņu novads",
    region: "Pļaviņu novads"
  },
  {
    region_id: 429,
    region_code: "LV-PR",
    region: "Preiļu novads"
  },
  {
    region_id: 430,
    region_code: "Priekules novads",
    region: "Priekules novads"
  },
  {
    region_id: 431,
    region_code: "Priekuļu novads",
    region: "Priekuļu novads"
  },
  {
    region_id: 435,
    region_code: "Raunas novads",
    region: "Raunas novads"
  },
  {
    region_id: 361,
    region_code: "LV-REZ",
    region: "Rēzekne"
  },
  {
    region_id: 442,
    region_code: "LV-RE",
    region: "Rēzeknes novads"
  },
  {
    region_id: 436,
    region_code: "Riebiņu novads",
    region: "Riebiņu novads"
  },
  {
    region_id: 362,
    region_code: "LV-RIX",
    region: "Rīga"
  },
  {
    region_id: 363,
    region_code: "LV-RI",
    region: "Rīgas novads"
  },
  {
    region_id: 437,
    region_code: "Rojas novads",
    region: "Rojas novads"
  },
  {
    region_id: 438,
    region_code: "Ropažu novads",
    region: "Ropažu novads"
  },
  {
    region_id: 439,
    region_code: "Rucavas novads",
    region: "Rucavas novads"
  },
  {
    region_id: 440,
    region_code: "Rugāju novads",
    region: "Rugāju novads"
  },
  {
    region_id: 443,
    region_code: "Rūjienas novads",
    region: "Rūjienas novads"
  },
  {
    region_id: 441,
    region_code: "Rundāles novads",
    region: "Rundāles novads"
  },
  {
    region_id: 444,
    region_code: "Salacgrīvas novads",
    region: "Salacgrīvas novads"
  },
  {
    region_id: 445,
    region_code: "Salas novads",
    region: "Salas novads"
  },
  {
    region_id: 446,
    region_code: "Salaspils novads",
    region: "Salaspils novads"
  },
  {
    region_id: 447,
    region_code: "LV-SA",
    region: "Saldus novads"
  },
  {
    region_id: 448,
    region_code: "Saulkrastu novads",
    region: "Saulkrastu novads"
  },
  {
    region_id: 455,
    region_code: "Sējas novads",
    region: "Sējas novads"
  },
  {
    region_id: 449,
    region_code: "Siguldas novads",
    region: "Siguldas novads"
  },
  {
    region_id: 451,
    region_code: "Skrīveru novads",
    region: "Skrīveru novads"
  },
  {
    region_id: 450,
    region_code: "Skrundas novads",
    region: "Skrundas novads"
  },
  {
    region_id: 452,
    region_code: "Smiltenes novads",
    region: "Smiltenes novads"
  },
  {
    region_id: 453,
    region_code: "Stopiņu novads",
    region: "Stopiņu novads"
  },
  {
    region_id: 454,
    region_code: "Strenču novads",
    region: "Strenču novads"
  },
  {
    region_id: 456,
    region_code: "LV-TA",
    region: "Talsu novads"
  },
  {
    region_id: 458,
    region_code: "Tērvetes novads",
    region: "Tērvetes novads"
  },
  {
    region_id: 457,
    region_code: "LV-TU",
    region: "Tukuma novads"
  },
  {
    region_id: 459,
    region_code: "Vaiņodes novads",
    region: "Vaiņodes novads"
  },
  {
    region_id: 460,
    region_code: "LV-VK",
    region: "Valkas novads"
  },
  {
    region_id: 364,
    region_code: "Valmiera",
    region: "Valmiera"
  },
  {
    region_id: 461,
    region_code: "LV-VM",
    region: "Valmieras novads"
  },
  {
    region_id: 462,
    region_code: "Varakļānu novads",
    region: "Varakļānu novads"
  },
  {
    region_id: 469,
    region_code: "Vārkavas novads",
    region: "Vārkavas novads"
  },
  {
    region_id: 463,
    region_code: "Vecpiebalgas novads",
    region: "Vecpiebalgas novads"
  },
  {
    region_id: 464,
    region_code: "Vecumnieku novads",
    region: "Vecumnieku novads"
  },
  {
    region_id: 365,
    region_code: "LV-VEN",
    region: "Ventspils"
  },
  {
    region_id: 465,
    region_code: "LV-VE",
    region: "Ventspils novads"
  },
  {
    region_id: 466,
    region_code: "Viesītes novads",
    region: "Viesītes novads"
  },
  {
    region_id: 467,
    region_code: "Viļakas novads",
    region: "Viļakas novads"
  },
  {
    region_id: 468,
    region_code: "Viļānu novads",
    region: "Viļānu novads"
  },
  {
    region_id: 470,
    region_code: "Zilupes novads",
    region: "Zilupes novads"
  }
],
free_shipping_threshold: 35
},
{
id: 24,
country_code: "HR",
country_name: "Croatia",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "HRK",
currency_symbol: "HRK",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 7.393655,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 25,
country_code: "CY",
country_name: "Cyprus",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 26,
country_code: "HU",
country_name: "Hungary",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "HUF",
currency_symbol: "HUF",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 314.996243,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 27,
country_code: "PT",
country_name: "Portugal",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 28,
country_code: "EE",
country_name: "Estonia",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 340,
    region_code: "EE-37",
    region: "Harjumaa"
  },
  {
    region_id: 341,
    region_code: "EE-39",
    region: "Hiiumaa"
  },
  {
    region_id: 342,
    region_code: "EE-44",
    region: "Ida-Virumaa"
  },
  {
    region_id: 344,
    region_code: "EE-51",
    region: "Järvamaa"
  },
  {
    region_id: 343,
    region_code: "EE-49",
    region: "Jõgevamaa"
  },
  {
    region_id: 346,
    region_code: "EE-59",
    region: "Lääne-Virumaa"
  },
  {
    region_id: 345,
    region_code: "EE-57",
    region: "Läänemaa"
  },
  {
    region_id: 348,
    region_code: "EE-67",
    region: "Pärnumaa"
  },
  {
    region_id: 347,
    region_code: "EE-65",
    region: "Põlvamaa"
  },
  {
    region_id: 349,
    region_code: "EE-70",
    region: "Raplamaa"
  },
  {
    region_id: 350,
    region_code: "EE-74",
    region: "Saaremaa"
  },
  {
    region_id: 351,
    region_code: "EE-78",
    region: "Tartumaa"
  },
  {
    region_id: 352,
    region_code: "EE-82",
    region: "Valgamaa"
  },
  {
    region_id: 353,
    region_code: "EE-84",
    region: "Viljandimaa"
  },
  {
    region_id: 354,
    region_code: "EE-86",
    region: "Võrumaa"
  }
],
free_shipping_threshold: 35
},
{
id: 29,
country_code: "LU",
country_name: "Luxembourg",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 30,
country_code: "SK",
country_name: "Slovakia",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 31,
country_code: "BG",
country_name: "Bulgaria",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "BGN",
currency_symbol: "BGN",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1.95301,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 32,
country_code: "GR",
country_name: "Greece",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 33,
country_code: "PL",
country_name: "Poland",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "PLN",
currency_symbol: "PLN",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 4.280873,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 34,
country_code: "LT",
country_name: "Lithuania",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 35,
country_code: "SI",
country_name: "Slovenia",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 36,
country_code: "FI",
country_name: "Finland",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 339,
    region_code: "Ahvenanmaa",
    region: "Ahvenanmaa"
  },
  {
    region_id: 333,
    region_code: "Etelä-Karjala",
    region: "Etelä-Karjala"
  },
  {
    region_id: 326,
    region_code: "Etelä-Pohjanmaa",
    region: "Etelä-Pohjanmaa"
  },
  {
    region_id: 325,
    region_code: "Etelä-Savo",
    region: "Etelä-Savo"
  },
  {
    region_id: 337,
    region_code: "Itä-Uusimaa",
    region: "Itä-Uusimaa"
  },
  {
    region_id: 322,
    region_code: "Kainuu",
    region: "Kainuu"
  },
  {
    region_id: 335,
    region_code: "Kanta-Häme",
    region: "Kanta-Häme"
  },
  {
    region_id: 330,
    region_code: "Keski-Pohjanmaa",
    region: "Keski-Pohjanmaa"
  },
  {
    region_id: 331,
    region_code: "Keski-Suomi",
    region: "Keski-Suomi"
  },
  {
    region_id: 338,
    region_code: "Kymenlaakso",
    region: "Kymenlaakso"
  },
  {
    region_id: 320,
    region_code: "Lappi",
    region: "Lappi"
  },
  {
    region_id: 334,
    region_code: "Päijät-Häme",
    region: "Päijät-Häme"
  },
  {
    region_id: 328,
    region_code: "Pirkanmaa",
    region: "Pirkanmaa"
  },
  {
    region_id: 327,
    region_code: "Pohjanmaa",
    region: "Pohjanmaa"
  },
  {
    region_id: 323,
    region_code: "Pohjois-Karjala",
    region: "Pohjois-Karjala"
  },
  {
    region_id: 321,
    region_code: "Pohjois-Pohjanmaa",
    region: "Pohjois-Pohjanmaa"
  },
  {
    region_id: 324,
    region_code: "Pohjois-Savo",
    region: "Pohjois-Savo"
  },
  {
    region_id: 329,
    region_code: "Satakunta",
    region: "Satakunta"
  },
  {
    region_id: 336,
    region_code: "Uusimaa",
    region: "Uusimaa"
  },
  {
    region_id: 332,
    region_code: "Varsinais-Suomi",
    region: "Varsinais-Suomi"
  }
],
free_shipping_threshold: 35
},
{
id: 37,
country_code: "MT",
country_name: "Malta",
is_active: false,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 38,
country_code: "CZ",
country_name: "Czech Republic",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "CZK",
currency_symbol: "CZK",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 25.568696,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 39,
country_code: "BR",
country_name: "Brazil",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "BRL",
currency_symbol: "R$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 3.563292,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 40,
country_code: "CL",
country_name: "Chile",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "CLP",
currency_symbol: "CH$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 634.4,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 41,
country_code: "CN",
country_name: "China",
is_active: true,
is_main: 1,
website_id: "11",
store_code: "cn",
position: "11",
currency_code: "CNY",
currency_symbol: "CN¥",
base_currency_code: "CNY",
base_currency_symbol: "CN¥",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 42,
country_code: "CO",
country_name: "Colombia",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "COP",
currency_symbol: "COL$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 2873,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 43,
country_code: "CR",
country_name: "Costa Rica",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "CRC",
currency_symbol: "₡",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 566.780059,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 44,
country_code: "EC",
country_name: "Ecuador",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "USD",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 45,
country_code: "GE",
country_name: "Georgia",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "GEK",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 46,
country_code: "GG",
country_name: "Guernsey",
is_active: true,
is_main: 0,
website_id: "1",
store_code: "gb",
position: "9999",
currency_code: "GBP",
currency_symbol: "£",
base_currency_code: "GBP",
base_currency_symbol: "£",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 47,
country_code: "IS",
country_name: "Iceland",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "ISK",
currency_symbol: "ISK",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 103.003797,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 48,
country_code: "IM",
country_name: "Isle of Man",
is_active: false,
is_main: 0,
website_id: "1",
store_code: "gb",
position: "9999",
currency_code: "GBP",
currency_symbol: "£",
base_currency_code: "GBP",
base_currency_symbol: "£",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 49,
country_code: "JM",
country_name: "Jamaica",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "JMD",
currency_symbol: "J$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 124.81135,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 50,
country_code: "JE",
country_name: "Jersey",
is_active: true,
is_main: 0,
website_id: "1",
store_code: "gb",
position: "9999",
currency_code: "GBP",
currency_symbol: "£",
base_currency_code: "GBP",
base_currency_symbol: "£",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 51,
country_code: "LI",
country_name: "Liechtenstein",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "CHF",
currency_symbol: "CHF",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1.1881,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 52,
country_code: "MO",
country_name: "Macau SAR China",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "MOP",
currency_symbol: "MOP$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 8.088655,
is_mandatory_region: false,
is_optional_zip: true,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 53,
country_code: "MY",
country_name: "Malaysia",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "MYR",
currency_symbol: "MYR",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 3.991,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 54,
country_code: "MX",
country_name: "Mexico",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "MXN",
currency_symbol: "MX$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 19.5796,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 55,
country_code: "MC",
country_name: "Monaco",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 56,
country_code: "NP",
country_name: "Nepal",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "NPR",
currency_symbol: "NPR",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 107.371533,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 57,
country_code: "NZ",
country_name: "New Zealand",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "NZD",
currency_symbol: "NZ$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1.436106,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 58,
country_code: "NO",
country_name: "Norway",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "NOK",
currency_symbol: "NOK",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 8.13905,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 59,
country_code: "PY",
country_name: "Paraguay",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "PYG",
currency_symbol: "₲",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 5582.35,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 60,
country_code: "PE",
country_name: "Peru",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "PEN",
currency_symbol: "PEN",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 3.289411,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 61,
country_code: "PR",
country_name: "Puerto Rico",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "USD",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 62,
country_code: "SM",
country_name: "San Marino",
is_active: false,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 63,
country_code: "SA",
country_name: "Saudi Arabia",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "SAR",
currency_symbol: "SAR",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 3.7504,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 65,
country_code: "TH",
country_name: "Thailand",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "THB",
currency_symbol: "฿",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 31.9265,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 66,
country_code: "TR",
country_name: "Turkey",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "TRY",
currency_symbol: "₺",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 4.345781,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 67,
country_code: "UA",
country_name: "Ukraine",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "UAH",
currency_symbol: "₴",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 26.239648,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 68,
country_code: "AE",
country_name: "United Arab Emirates",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "AED",
currency_symbol: "AED",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 3.673097,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 69,
country_code: "UY",
country_name: "Uruguay",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "UYU",
currency_symbol: "$U",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 29.048894,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 70,
country_code: "VA",
country_name: "Vatican City",
is_active: false,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "9999",
currency_code: "EUR",
currency_symbol: "€",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 71,
country_code: "VE",
country_name: "Venezuela",
is_active: false,
is_main: 0,
website_id: "8",
store_code: "row",
position: "9999",
currency_code: "VEF",
currency_symbol: "VEF",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 69912.5,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 72,
country_code: "IN",
country_name: "India",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
position: "99",
currency_code: "INR",
currency_symbol: "₹",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 67.1723,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 73,
country_code: "CH",
country_name: "Switzerland",
is_active: true,
is_main: 0,
website_id: "3",
store_code: "eu",
position: "200",
currency_code: "CHF",
currency_symbol: "CHF",
base_currency_code: "EUR",
base_currency_symbol: "€",
rate: 1.1881,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: [
  {
    region_id: 104,
    region_code: "AG",
    region: "Aargau"
  },
  {
    region_id: 106,
    region_code: "AR",
    region: "Appenzell Ausserrhoden"
  },
  {
    region_id: 105,
    region_code: "AI",
    region: "Appenzell Innerrhoden"
  },
  {
    region_id: 108,
    region_code: "BL",
    region: "Basel-Landschaft"
  },
  {
    region_id: 109,
    region_code: "BS",
    region: "Basel-Stadt"
  },
  {
    region_id: 107,
    region_code: "BE",
    region: "Bern"
  },
  {
    region_id: 110,
    region_code: "FR",
    region: "Freiburg"
  },
  {
    region_id: 111,
    region_code: "GE",
    region: "Genf"
  },
  {
    region_id: 112,
    region_code: "GL",
    region: "Glarus"
  },
  {
    region_id: 113,
    region_code: "GR",
    region: "Graubünden"
  },
  {
    region_id: 114,
    region_code: "JU",
    region: "Jura"
  },
  {
    region_id: 115,
    region_code: "LU",
    region: "Luzern"
  },
  {
    region_id: 116,
    region_code: "NE",
    region: "Neuenburg"
  },
  {
    region_id: 117,
    region_code: "NW",
    region: "Nidwalden"
  },
  {
    region_id: 118,
    region_code: "OW",
    region: "Obwalden"
  },
  {
    region_id: 120,
    region_code: "SH",
    region: "Schaffhausen"
  },
  {
    region_id: 122,
    region_code: "SZ",
    region: "Schwyz"
  },
  {
    region_id: 121,
    region_code: "SO",
    region: "Solothurn"
  },
  {
    region_id: 119,
    region_code: "SG",
    region: "St. Gallen"
  },
  {
    region_id: 124,
    region_code: "TI",
    region: "Tessin"
  },
  {
    region_id: 123,
    region_code: "TG",
    region: "Thurgau"
  },
  {
    region_id: 125,
    region_code: "UR",
    region: "Uri"
  },
  {
    region_id: 126,
    region_code: "VD",
    region: "Waadt"
  },
  {
    region_id: 127,
    region_code: "VS",
    region: "Wallis"
  },
  {
    region_id: 128,
    region_code: "ZG",
    region: "Zug"
  },
  {
    region_id: 129,
    region_code: "ZH",
    region: "Zürich"
  }
],
free_shipping_threshold: 35
},
{
id: 74,
country_code: "ID",
country_name: "Indonesia",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
localised_store_id: 0,
position: "9999",
currency_code: "IDR",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 75,
country_code: "IL",
country_name: "Israel",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
localised_store_id: 0,
position: "9999",
currency_code: "ILS",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 76,
country_code: "KW",
country_name: "Kuwait",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
localised_store_id: 0,
position: "9999",
currency_code: "KWD",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 77,
country_code: "QA",
country_name: "Qatar",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
localised_store_id: 0,
position: "9999",
currency_code: "QAR",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 78,
country_code: "ZA",
country_name: "South Africa",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
localised_store_id: 0,
position: "9999",
currency_code: "ZAR",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
},
{
id: 79,
country_code: "AZ",
country_name: "Azerbaijan",
is_active: true,
is_main: 0,
website_id: "8",
store_code: "row",
localised_store_id: 0,
position: "9999",
currency_code: "AZN",
currency_symbol: "$",
base_currency_code: "USD",
base_currency_symbol: "$",
rate: 1,
is_mandatory_region: false,
is_optional_zip: false,
available_regions: null,
free_shipping_threshold: 35
}
];

export default data;
