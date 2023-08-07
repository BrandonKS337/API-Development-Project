"use strict";
const { Sequelize } = require("sequelize");

//Sequelize is a package that abstracts out the need to write SQL queries,
//relying instead on their models to do it for you

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
  }
); //this section was defining the database info while referring it to the .env for security reasons

//func says send auth request and if successful display db connect to dbname if not failed error
const connectMysql = async () => {
  try {
    await sequelize.authenticate();
    console.log(`Successful connection to MySQL Database
    ${process.env.DB_NAME}`);
  } catch (error) {
    console.error("Unable to connect to MySQL database:", error);
    process.exit(1);
  }
};

connectMysql(); //calls the func

//exports func AND sequelize for use in other parts
module.exports = {
  Sequelize: sequelize,
  connectMysql,
};
