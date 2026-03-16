const { Country } = require("../models");

const countryData = [
  {
    name: "France 🇫🇷",
    description:
      "France is a country in Western Europe with several overseas regions and territories. The metropolitan area of France extends from the Mediterranean Sea to the English Channel and the North Sea, and from the Rhine to the Atlantic Ocean. It is one of the world’s most visited countries, with more than 83 million foreign tourists in 2017. France is a unitary semi-presidential republic with its capital in Paris, the country’s largest city and main cultural and commercial centre. Other major urban areas include Lyon, Marseille, Toulouse, Bordeaux, Lille and Nice.",
    photo: "./images/countries/france/france-img.jpg",
  },
  {
    name: "Spain 🇪🇸",
    description:
      "Spain, officially the Kingdom of Spain, is a country in Southwestern Europe with some pockets of territory across the Strait of Gibraltar and the Atlantic Ocean. Its continental European territory is situated on the Iberian Peninsula. Its territory also includes two archipelagos: the Canary Islands off the coast of North Africa, and the Balearic Islands in the Mediterranean Sea. The African enclaves of Ceuta, Melilla, and Peñón de Vélez de la Gomera make Spain the only European country to have a physical border with an African country (Morocco). Several small islands in the Alboran Sea are also part of Spanish territory. The country's mainland is bordered to the south and east by the Mediterranean Sea except for a small land boundary with Gibraltar; to the north and northeast by France, Andorra, and the Bay of Biscay; and to the west and northwest by Portugal and the Atlantic Ocean respectively. ",
    photo: "./images/countries/spain/spain-img.jpeg",
  },
  {
    name: "USA 🇺🇸",
    description:
      "The United States of America (USA), commonly known as the United States (U.S. or US) or America, is a country primarily located in North America, consisting of 50 states, a federal district, five major self-governing territories, and various possessions. At 3.8 million square miles, it is the world's third or fourth-largest country by total area and is slightly smaller than the entire continent of Europe. With a population of over 327 million people, it is the third most populous country in the world. The capital is Washington, D.C., and the most populous city is New York City.",
    photo: "./images/countries/united-states/us-img.jpeg",
  },
  {
    name: "Iran 🇮🇷",
    description:"Iran, officially the Islamic Republic of Iran, is a country in Western Asia. With 82 million inhabitants, Iran is the world's 18th most populous country. It is the second-largest country in the Middle East and the 17th largest in the world. Iran is bordered to the northwest by Armenia and Azerbaijan, to the north by the Caspian Sea, to the northeast by Turkmenistan, to the east by Afghanistan and Pakistan, to the south by the Persian Gulf and the Gulf of Oman, and to the west by Turkey and Iraq. The country's territory spans 1,648,195 km2 (636,372 sq mi), and it has 18,000 km (11,186 mi) of coastline. ",
    photo: "./images/countries/iran-img.jpeg",
  },
  {
    name: "Japan 🇯🇵",
    description: "Japan is an island country in East Asia. Located in the Pacific Ocean, it lies off the eastern coast of the Asian continent and stretches from the Sea of Okhotsk in the north to the East China Sea and Taiwan in the south. The characters that make up Japan's name mean 'sun origin', which is why Japan is often referred to as the Land of the Rising Sun. Japan is a stratovolcanic archipelago of 6,852 islands. The four largest are Honshu, Hokkaido, Kyushu, and Shikoku, which make up about ninety-seven percent of Japan's land area and often are referred to as home islands. The country is divided into 47 prefectures in eight regions. ",
    photo: "./images/countries/japan-img.jpeg",
  },
  {
    name: "Italy 🇮🇹",
    description:"Italy, officially the Italian Republic, is a country consisting of a peninsula delimited by the Alps and surrounded by several islands. Italy is located in Southern Europe, and is also considered a part of Western Europe. A unitary parliamentary republic with Rome as its capital, the country covers a total area of 301,340 km2 (116,350 sq mi) and shares land borders with France, Switzerland, Austria, Slovenia, and the enclaved microstates of Vatican City and San Marino. Italy has a territorial exclave in Switzerland (Campione) and a maritime exclave in the Tunisian Sea (Lampedusa). With around 60 million inhabitants, Italy is the third-most populous member state of the European Union. ",
    photo: "./images/countries/italy-img.jpeg",
  },
  {
    name: "Germany 🇩🇪",
    description:"Germany, officially the Federal Republic of Germany, is a country in Central and Western Europe. Covering an area of 357,021 square kilometres (137,847 sq mi), it lies between the Baltic and North seas to the north, and the Alps to the south. It borders Denmark to the north, Poland and the Czech Republic to the east, Austria and Switzerland to the south, France to the southwest, and Luxembourg, Belgium, and the Netherlands to the west. With over 83 million inhabitants of its 16 constituent states, it is the second-most populous country in Europe after Russia, as well as the most populous member state of the European Union. Its capital and largest city is Berlin, and its financial centre is Frankfurt; the largest urban area is the Ruhr. The country's name is derived from the River Rhine, which, in turn, originates in the Latin Renia (Rhenus). ",
    photo: "./images/countries/germany-img.jpeg",
  },
  {
    name: "United Kingdom 🇬🇧",
    description:"The United Kingdom of Great Britain and Northern Ireland, commonly known as the United Kingdom (UK) or Britain, is a sovereign country in western Europe. Lying off the north-western coast of the European mainland, the United Kingdom includes the island of Great Britain, the north-eastern part of the island of Ireland, and many smaller islands. Northern Ireland is the only part of the United Kingdom that shares a land border with another sovereign state — the Republic of Ireland. Apart from this land border, the United Kingdom is surrounded by the Atlantic Ocean, with the North Sea to the east, the English Channel to the south and the Celtic Sea to the south-west, giving it the 12th-longest coastline in the world. The Irish Sea lies between Great Britain and Ireland. The total area of the United Kingdom is 94,000 square miles (240,000 km2), of which 80,410 square miles (208,280 km2) is land, and 13,590 square miles (35,180 km2) is water. ",
    photo: "./images/countries/uk-img.jpeg",
  },
  {
    name: "Canada 🇨🇦",
    description:"Canada is a country in the northern part of North America. Its ten provinces and three territories extend from the Atlantic to the Pacific and northward into the Arctic Ocean, covering 9.98 million square kilometres (3.85 million square miles), making it the world's second-largest country by total area. Its southern and western border with the United States, stretching 8,891 kilometres (5,525 mi), is the world's longest bi-national land border. Canada's capital is Ottawa, and its three largest metropolitan areas are Toronto, Montreal, and Vancouver. ",
    photo: "./images/countries/canada-img.jpeg",
  },
  {
    name: "Australia 🇦🇺",
    description:"Australia, officially the Commonwealth of Australia, is a sovereign country comprising the mainland of the Australian continent, the island of Tasmania, and numerous smaller islands. It is the largest country in Oceania and the world's sixth-largest country by total area. The neighbouring countries are Papua New Guinea, Indonesia and East Timor to the north; the Solomon Islands, Vanuatu and New Caledonia to the north-east; and New Zealand to the south-east. Australia's capital is Canberra, and its largest city is Sydney. ",
    photo: "./images/countries/australia-img.jpeg",
  },
  {
    name: "Russia 🇷🇺",
    description: "Russia, also officially known as the Russian Federation, is a transcontinental country in Eastern Europe and Northern Asia. At 17,075,400 square kilometres (6,592,800 sq mi), Russia is the largest country in the world, covering more than one-eighth of the Earth's inhabited land area, spanning eleven time zones, and bordering 16 sovereign nations. It shares land borders with Norway, Finland, Estonia, Latvia, Lithuania and Poland (both with Kaliningrad Oblast), Belarus, Ukraine, Georgia, Azerbaijan, Kazakhstan, China, Mongolia, and North Korea. It shares maritime borders with Japan by the Sea of Okhotsk and the U.S. state of Alaska across the Bering Strait. ",
    photo: "./images/countries/russia-img.jpeg",
  }
];

const seedCountries = () => Country.bulkCreate(countryData);

module.exports = seedCountries;
