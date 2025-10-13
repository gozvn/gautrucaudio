import { Sequelize } from "sequelize";
import config from "../../../configs/config.js";

// Kết nối CSDL từ config

const dbConfig = config.database[config.app.env];
const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    port: dbConfig.port,
    dialect: dbConfig.dialect,
    timezone: dbConfig.timezone,
    logging: dbConfig.logging || false,
  }
);

export default function authBasic(req, res, next) {
  const pubAPI = config.app.pub_token || "";
  const xtoken = req.headers["x-token"] || "";

  if (!xtoken || xtoken !== pubAPI) {
    return res.status(401).json({
      status: "error",
      code: 401,
      message: "Unauthorized",
    });
  }

  next();
}
