const Sequelize = require('sequelize')
const sequelize = new Sequelize('bankdb', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

module.exports = sequelize;
