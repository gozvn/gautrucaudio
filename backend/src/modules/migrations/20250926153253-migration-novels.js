'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Novels', {
      id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      title_slug: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      author: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      content: {
        type: Sequelize.TEXT('long'),
        allowNull: true,
      },
      category: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
      status: {
        type: Sequelize.ENUM('draft', 'published', 'completed'),
        defaultValue: 'draft',
      },
      view_count: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0,
      },
      like_count: {
        type: Sequelize.INTEGER(11),
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
      }
    }, {
      charset: 'utf8mb4',
      collate: 'utf8mb4_unicode_ci',
      indexes: [
        { fields: ['title'], name: 'idx_title' },
        { fields: ['author'], name: 'idx_author' },
        { fields: ['status'], name: 'idx_status' },
        { fields: ['created_at'], name: 'idx_created_at' },
      ]
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Novels');
  }
};
