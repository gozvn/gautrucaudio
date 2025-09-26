require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQL_USER || "goz_admin",
    password: process.env.MYSQL_PASSWORD || "admin",
    database: process.env.MYSQL_DATABASE || "gautrucaudio",
    host: process.env.MYSQL_HOST || "nuc",
    port: process.env.MYSQL_PORT || "3306",
    dialect: "mysql", // <- bắt buộc
    timezone: "+07:00",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
