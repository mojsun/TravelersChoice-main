const { Review } = require("../models");

const reviewData = [
  {
    user_id: 1,
    country_id: 1,
    content: "The food, the wine, the culture - it all came together to create an unforgettable experience.",
    rating: 4,
  },
  {
    user_id: 1,
    country_id: 2,
    content: "From the vibrant energy of Barcelona to the romantic charm of Seville, this country has something for everyone.",
    rating: 4,
  },
  {
    user_id: 1,
    country_id: 3,
    content: "I recently spent a week in Maui, Hawaii and it was an absolute paradise!",
    rating: 3,
  },
  {
    user_id: 1,
    country_id: 4,
    content: "The country is full of history, culture, and natural beauty.",
    rating: 5,
  },
  {
    user_id: 1,
    country_id: 5,
    content: "The country is a perfect blend of modern technology and ancient traditions.",
    rating: 4,
  },
  {
    user_id: 1,
    country_id: 6,
    content: "In Rome, I visited iconic landmarks like the Colosseum and the Vatican, and also indulged in gelato and pizza.",
    rating: 3,
  },
  {
    user_id: 1,
    country_id: 7,
    content: "The food in Germany was hearty and delicious, with everything from sausages to pretzels to schnitzel",
    rating: 3,
  },
  {
    user_id: 1,
    country_id: 8,
    content: "The food in the UK was also surprisingly delicious, with everything from fish and chips to curry to tea and scones.",
    rating: 3,
  },
  {
    user_id: 1,
    country_id: 9,
    content: "I was blown away by the country's stunning natural beauty and friendly people.",
    rating: 5,
  },
  {
    user_id: 1,
    country_id: 10,
    content: "The country is full of diverse landscapes, vibrant cities, and unique wildlife. The food in Australia was also delicious, with its fresh seafood and fusion cuisine.",
    rating: 4,
  },
  {
    user_id: 1,
    country_id: 11,
    content: "The food in Russia was hearty and delicious, with traditional dishes like borscht and blini.",
    rating: 3,
  },
  {
    user_id: 2,
    country_id: 1,
    content: "I just got back from a two-week trip to France and it was absolutely amazing!",
    rating: 5,
  },
  {
    user_id: 2,
    country_id: 2,
    content: "I enjoyed tapas and sangria at the lively La Boqueria market and strolled through the Gothic Quarter.",
    rating: 3,
  },
  {
    user_id: 2,
    country_id: 4,
    content: "In Tehran, I visited the stunning Golestan Palace and the National Museum of Iran. I also explored the bustling bazaars and tried delicious Persian cuisine.",
    rating: 5,
  },
  {
    user_id: 2,
    country_id: 9,
    content: "In Vancouver, I enjoyed strolling through Stanley Park and taking in the views of the city and the mountains.",
    rating: 4,
  },
  {
    user_id: 3,
    country_id: 1,
    content: "Paris was not clean.",
    rating: 1,
  },
  {
    user_id: 3,
    country_id: 5,
    content: "In Tokyo, I explored the vibrant neighborhoods of Shibuya and Shinjuku, and visited the famous Tsukiji fish market.",
    rating: 4,
  },
  {
    user_id: 3,
    country_id: 8,
    content: "The country is full of stunning scenery, fascinating history, and friendly people.",
    rating: 4,
  },
  {
    user_id: 4,
    country_id: 1,
    content: "The art, the food, the architecture - it was all so beautiful and captivating.",
    rating: 4,
  },
  {
    user_id: 4,
    country_id: 3,
    content: "The natural beauty of national parks is truly awe-inspiring, and I felt so grateful to be able to experience them in person.",
    rating: 4,
  },
  {
    user_id: 4,
    country_id: 5,
    content: "In Kyoto, I visited historic temples and shrines like Kiyomizu-dera and Fushimi Inari-taisha, and also enjoyed strolling through the picturesque bamboo forest.",
    rating: 4,
  },
  {
    user_id: 4,
    country_id: 7,
    content: "The country is full of beautiful landscapes, rich history, and delicious food.",
    rating: 4,
  },
  {
    user_id: 4,
    country_id: 9,
    content: " The food in Canada was also delicious, with its poutine and maple syrup treats. The people were warm and welcoming, and I felt like I was part of the family wherever I went.",
    rating: 4,
  },
  {
    user_id: 4,
    country_id: 11,
    content: "In Moscow, I visited the iconic Red Square and St. Basil's Cathedral, and also took a tour of the Kremlin and its fascinating history.",
    rating: 3,
  },
  {
    user_id: 5,
    country_id: 1,
    content: "In Paris, I visited the Eiffel Tower, the Louvre, and Notre-Dame Cathedral. The architecture and history of these iconic landmarks was awe-inspiring.",
    rating: 3,
  },
  {
    user_id: 5,
    country_id: 6,
    content: "Florence was a highlight of my trip, with its beautiful Renaissance art and stunning cathedral.",
    rating: 3,
  },
  {
    user_id: 5,
    country_id: 7,
    content: "In Munich, I visited the famous Marienplatz and enjoyed a beer at a traditional Bavarian beer garden.",
    rating: 3,
  },
  {
    user_id: 5,
    country_id: 8,
    content: "In London, I visited iconic landmarks like Buckingham Palace and the Tower of London, and also explored the trendy neighborhoods of Shoreditch and Camden.",
    rating: 3,
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
