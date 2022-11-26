const Sequelize = require('sequelize')
const database = require('../config/database')

const Transactions = database.define('transactions', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  debitedAccountId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'accounts',
      key: 'id'
    }
  },
  creditedAccountId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'accounts',
      key: 'id'
    }
  },
  value: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
})

module.exports = Transactions;
