const Sequelize = require('sequelize');
require('dotenv').config(); // Import sensitive data from .env

// Heroku: use JawsDB URL when set
if (process.env.JAWSDB_URL) {
  var sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  // Local: require .env with DB_NAME, DB_USER, DB_PASSWORD
  const { DB_NAME, DB_USER, DB_PASSWORD } = process.env;
  if (!DB_NAME || !DB_USER || !DB_PASSWORD) {
    console.error('\n❌ Missing database config. Create a .env file in the project root with:');
    console.error('   DB_NAME=travelerschoice_db');
    console.error('   DB_USER=root');
    console.error('   DB_PASSWORD=your_mysql_password');
    console.error('\n   Copy from .env.example and set your real MySQL password.\n');
    process.exit(1);
  }
  var sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'mysql',
    dialectOptions: {
      decimalNumbers: true,
    },
  });
}

module.exports = sequelize;
