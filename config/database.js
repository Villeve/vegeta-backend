const Sequelize = require('sequelize')

module.exports = new Sequelize('node', 'postgres', 'postgres', {
    host: process.env.DB_HOST || '0.0.0.0',
    dialect: 'postgres'
  });
