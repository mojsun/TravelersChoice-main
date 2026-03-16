const sequelize = require("../config/connection");
const seedCountries = require("./countryData");
const seedUsers = require("./userData");
const seedReviews = require("./reviewData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  try {
    await seedCountries().then(() => {
      console.log("\x1b[32m%s\x1b[0m", "<----- COUNTRIES SEEDED! ----->");
    });
  } catch (err) {
    console.log(err);
  }

  try {
    await seedUsers();
  } catch (err) {
    err
      ? console.log(err)
      : console.log("\x1b[32m%s\x1b[0m", "<----- USERS SEEDED! ----->");
  }

  try {
    await seedReviews();
  } catch (err) {
    err
      ? console.log(err)
      : console.log("\x1b[32m%s\x1b[0m", "<----- REVIEWS SEEDED! ----->");
  }

  process.exit(0);
};

seedAll();
