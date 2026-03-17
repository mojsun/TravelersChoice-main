const sequelize = require("../config/connection");
const seedCountries = require("./countryData");
const seedUsers = require("./userData");
const seedReviews = require("./reviewData");

const seedAll = async () => {
  console.log("Connecting to database...");
  try {
    await sequelize.authenticate();
    console.log("Connected. Syncing tables (force: true)...");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    process.exit(1);
  }

  await sequelize.sync({ force: true });

  try {
    await seedCountries();
    console.log("\x1b[32m%s\x1b[0m", "✓ COUNTRIES SEEDED");
  } catch (err) {
    console.error("Countries seed failed:", err);
  }

  try {
    await seedUsers();
    console.log("\x1b[32m%s\x1b[0m", "✓ USERS SEEDED");
  } catch (err) {
    console.error("Users seed failed:", err);
  }

  try {
    await seedReviews();
    console.log("\x1b[32m%s\x1b[0m", "✓ REVIEWS SEEDED");
  } catch (err) {
    console.error("Reviews seed failed:", err);
  }

  console.log("\n\x1b[32m%s\x1b[0m", "Seed finished. You can refresh the app.");
  process.exit(0);
};

seedAll();
