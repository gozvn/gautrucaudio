import express from 'express';
import { Sequelize } from 'sequelize';
import config from '../../../configs/config.js';

const router = express.Router();
// Tạo kết nối CSDL từ config
const dbConfig = config.database[config.app.env];
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
  host: dbConfig.host,
  port: dbConfig.port,
  dialect: dbConfig.dialect,
  timezone: dbConfig.timezone,
  logging: dbConfig.logging || false
});



