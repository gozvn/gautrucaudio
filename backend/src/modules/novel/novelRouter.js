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

// Test kết nối CSDL
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Kết nối CSDL thành công cho module Novel');
  } catch (error) {
    console.error('Không thể kết nối CSDL:', error);
  }
};

export default router;

// Test kết nối khi load module
testConnection();

router.get('/test', async (req, res) => {
  try {
    // Test truy vấn CSDL
    const [results] = await sequelize.query('SELECT 1 as test');
    
    res.status(200).json({
      status: 'success',
      code: 200, 
      message: 'Kết nối CSDL thành công!',
      database: {
        host: dbConfig.host,
        database: dbConfig.database,
        connection_test: results[0]
      },
      data: []
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Lỗi kết nối CSDL',
      error: error.message
    });
  }
})
router.get('/', async (req, res) => {
  try {
    // truy vấn danh sách novels (giả sử có bảng novels)
    const [novels] = await sequelize.query(`
      SELECT * FROM novels 
      ORDER BY created_at DESC 
      LIMIT 10
    `);
    
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Lấy danh sách truyện thành công',
      data: novels
    });
  } catch (error) {
    res.status(500).json({
      status: 'error', 
      code: 500,
      message: 'Lỗi khi lấy danh sách truyện',
      error: error.message
    });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const [novel] = await sequelize.query(`
      SELECT * FROM novels WHERE id = :id
    `, {
      replacements: { id }
    });
    
    if (novel.length === 0) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Không tìm thấy truyện'
      });
    }
    
    res.status(200).json({
      status: 'success',
      code: 200,
      message: 'Lấy thông tin truyện thành công',
      data: novel[0]
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Lỗi khi lấy thông tin truyện',
      error: error.message
    });
  }
});

router.post('/create', async (req, res) => {
  try {
    const { title, title_slug, description, author, content } = req.body;
    
    const [result] = await sequelize.query(`
      INSERT INTO novels (title, title_slug, description, author, content, created_at, updated_at)
      VALUES (:title, :title_slug, :description, :author, :content, NOW(), NOW())
    `, {
      replacements: { title, title_slug, description, author, content }
    });
    
    res.status(201).json({
      status: 'success',
      code: 201,
      message: 'Tạo truyện mới thành công',
      data: { 
        id: result.insertId,
        title,
        description,
        author
      }
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Lỗi khi tạo truyện mới',
      error: error.message
    });
  }
})

// router.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, description, author, content } = req.body;
    
//     const [result] = await sequelize.query(`
//       UPDATE novels 
//       SET title = :title, description = :description, author = :author, 
//           content = :content, updated_at = NOW()
//       WHERE id = :id
//     `, {
//       replacements: { id, title, description, author, content }
//     });
    
//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         status: 'error',
//         code: 404,
//         message: 'Không tìm thấy truyện để cập nhật'
//       });
//     }
    
//     res.status(200).json({
//       status: 'success',
//       code: 200,
//       message: 'Cập nhật truyện thành công',
//       data: { id, title, description, author }
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 'error',
//       code: 500,
//       message: 'Lỗi khi cập nhật truyện',
//       error: error.message
//     });
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
    
//     const [result] = await sequelize.query(`
//       DELETE FROM novels WHERE id = :id
//     `, {
//       replacements: { id }
//     });
    
//     if (result.affectedRows === 0) {
//       return res.status(404).json({
//         status: 'error',
//         code: 404,
//         message: 'Không tìm thấy truyện để xóa'
//       });
//     }
    
//     res.status(200).json({
//       status: 'success',
//       code: 200,
//       message: 'Xóa truyện thành công'
//     });
//   } catch (error) {
//     res.status(500).json({
//       status: 'error',
//       code: 500,
//       message: 'Lỗi khi xóa truyện',
//       error: error.message
//     });
//   }
// });

