const database = require('./config/database')
const Users = require('./models/users')
const Accounts = require('./models/accounts')
const Transactions = require('./models/transactions')

const newUser = async (usuario, password, onCreate = undefined) => {

  const strongPass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
  const checkUsername = await Users.findOne({where: {username: usuario}})


  if(usuario.length <= 3) {
    if (onCreate) onCreate(`O usuario deve ter no minimo 4 caracteres`)
  } else if (checkUsername) {
    if (onCreate) onCreate(`O usuario já existe`)
  } else if (!strongPass.test(password)) {
    if (onCreate) onCreate(`A senha deve ter no minimo 8 caracteres, uma letra maiuscula e um carectere especial`)
  } else {
    const createNewAccount = await Accounts.create({
      balance: 100.00
    })
  
    const createNewUser = await Users.create({
      username: usuario,
      password: password,
      accountId: createNewAccount.id
    })

    if (onCreate) onCreate(`Conta criada com sucesso.`)
    console.log('Conta criada com sucesso')
  }
}

const withdraw = async (accountId, amount) => {
  const findAccount = await Accounts.findByPk(accountId)
  const balance = parseFloat(findAccount.balance)

  if(amount <= 0) {
    console.log('Invalid value')
    return
  }
  if(amount > findAccount.balance) {
    console.log('You dont have enough money')
    return
  } else {
    findAccount.balance = balance - parseFloat(amount)
    const newBalance = await findAccount.save()
  }
}

const deposit = async (accountId, amount) => {
  const findAccount = await Accounts.findByPk(accountId)
  const balance = parseFloat(findAccount.balance)

  if(amount <= 0) {
    console.log('Invalid value')
    return
  } else {
    findAccount.balance = balance + parseFloat(amount)
    const newBalance = await findAccount.save()
  }
}

const balance = async (accountId, onBalance = undefined) => {
  const findAccount = await Accounts.findByPk(accountId)

  if (!findAccount) {
    console.log('Account ID não existe.')
  } else {
    const balance = findAccount.balance
    if(onBalance) onBalance(balance)
  }
}

const username = async (onBalance) => {
  const findUser = await Users.findAll()

  if(!findUser) {
    console.log('Usuario nao encontrado')
  } else {
    if(onBalance) onBalance(findUser)
  }
}

const listTransactions = async (accountId, onBalance) => {
  const findUser = await Users.findByPk(accountId)
  const accountUser = findUser.accountId
  
  if(!accountUser) {
    console.log('Sem transações')
  } else {
    const myTransactions = await Transactions.findAll()
    if(onBalance) onBalance(myTransactions)
  }
}

const transfer = async (debitedAccountId, creditedAccountId, value, onTransfer = undefined) => {
  const debitAccount = await Accounts.findByPk(debitedAccountId)
  const creditAccount = await Accounts.findByPk(creditedAccountId)
  
  const debitBalance = parseFloat(debitAccount.balance)
  const creditBalance = parseFloat(creditAccount.balance)

  if(debitBalance < value) {
    if(onTransfer) onTransfer(`Saldo insuficiente`)
  } else {
    withdraw(debitedAccountId, value)
    deposit(creditedAccountId, value)
    if(onTransfer) onTransfer(`Transferencia realizada com sucesso.`)
  }

  const newTransaction = await Transactions.create({
    debitedAccountId: debitedAccountId,
    creditedAccountId: creditedAccountId,
    value: value,
  })
}

database.sync(() => console.log('Banco de dados conectado'))

module.exports = {
  newUser, withdraw, deposit, transfer, balance, listTransactions, username
}
