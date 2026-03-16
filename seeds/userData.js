const { User } = require("../models");

const userData = [
  {
    username: "BeachBum101",
    password: "password",
  },
  {
    username: "AdventureSeeker87",
    password: "password",
  },
  {
    username: "SkiBunny55",
    password: "password",
  },
  {
    username: "CultureVulture22",
    password: "password",
  },
  {
    username: "AviationGeek787",
    password: "password",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
