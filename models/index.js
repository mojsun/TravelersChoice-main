const User = require("./User");
const Country = require("./Country");
const Review = require("./Review");

//one to many relationship
User.hasMany(Review, {
  foreignKey: "user_id",
});

Review.belongsTo(User, {
  foreignKey: "user_id",
});
//one to many relationship
Country.hasMany(Review, {
  foreignKey: "country_id",
});

Review.belongsTo(Country, {
  foreignKey: "country_id",
});

module.exports = { User, Review, Country };
