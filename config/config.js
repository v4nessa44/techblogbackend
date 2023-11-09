const Sequelize = require('sequelize');

require('dotenv').config();


// create connection to our db
const sequelize = process.env.JAWS_URL
  ? new Sequelize(process.env.JAWS_URL)
  : new Sequelize(process.env.DATABASE_NAME, process.env.USER_NAME, process.env.USER_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

module.exports = sequelize;