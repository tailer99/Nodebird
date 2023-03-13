require("dotenv").config();

module.exports = {
  developement: {
    username: "ppdm",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "birddbd",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "ppdm",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "birddbt",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "ppdm",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "birddbp",
    host: "127.0.0.1",
    dialect: "mysql",
    logging: false,
  },
};
