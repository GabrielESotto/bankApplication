const Sequelize = require('sequelize')
const database = require('../config/database')
const Accounts = require('./accounts')

const Users = database.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  password: {
    type: Sequelize.CHAR(60),
    allowNull: false,
  },
  token: {
    type: Sequelize.CHAR,
  }
})

Users.belongsTo(Accounts, {
  constraint: true,
  foreignKey: 'accountId'
})



module.exports = Users;
