import express from 'express';
import { Sequelize } from 'sequelize';
import config from '../../../configs/config.js';
import jwt from 'jsonwebtoken';

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

export default router;

router.get('/ping', (req, res) => {
  const payload = { hello : 'world' };
  const access_token = jwt.sign(payload, config.jwt.secret, { expiresIn: '1h' });
  res.status(200).json({
    status: 'success',
    code: 200,
    message: 'Pong from User Service',
    data: {
      access_token
    }
  });
});

router.get('/', async (req, res) => {
  try {
    // truy vấn danh sách Users
    const [users] = await sequelize.query(`
      SELECT * FROM Users
      ORDER BY createdAt DESC
      LIMIT 10
    `);
    
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Lấy danh sách người dùng thành công',
      data: users
    });
  } catch (error) {
    res.status(500).json({
      status: 'error', 
      code: 500,
      message: 'Lỗi khi lấy danh sách người dùng',
      error: error.message
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [user] = await sequelize.query(`
      SELECT * FROM Users WHERE id = :id
    `, {
      replacements: { id }
    });

    if (user.length === 0) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Không tìm thấy người dùng'
      });
    }
    
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Lấy thông tin người dùng thành công',
      data: user[0]
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Lỗi khi lấy thông tin người dùng',
      error: error.message
    });
  }
});

router.post('/create', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const [result] = await sequelize.query(`
      INSERT INTO Users (name, email, password, role, createdAt, updatedAt)
      VALUES (:name, :email, :password, :role, NOW(), NOW())
    `, {
      replacements: { name, email, password, role }
    });
    
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Tạo người dùng mới thành công',
      data: {
        id: result.insertId,
        name,
        email,
        role
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Lỗi khi tạo người dùng mới',
      error: error.message
    });
  }
})
