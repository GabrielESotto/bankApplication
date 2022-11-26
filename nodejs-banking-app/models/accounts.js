const Sequelize = require('sequelize')
const database = require('../config/database')

const Accounts = database.define('accounts', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  balance: {
    type: Sequelize.DECIMAL,
    allowNull: false
  }
})

module.exports = Accounts;
