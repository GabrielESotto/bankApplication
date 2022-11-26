require("dotenv").config();
const express = require('express')
const cors = require('cors')

const Users = require('./models/users')
const Accounts = require('./models/accounts')
const Transactions = require('./models/transactions')

const jwt = require('jsonwebtoken')
const auth = require('./middleware/auth')
const bcrypt = require("bcrypt");

const { balance, transfer, listTransactions, username } = require('./app')

const app = express()

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
  console.log(`NG Cash Banking listening on port ${PORT}`)
})

app.use(cors())

app.get('/balance/:acId', (req, res, next) => {

  try{
    const acId = req.params.acId

    balance(acId, bal => {
      res.json({ bal })
    })
  } catch(error) {
    next(error)
  }
  

})

app.get('/transactions/:acId', (req, res, next) => {

  try {
    const acId = req.params.acId

    listTransactions(acId, transactions => {
      res.json({transactions})
    })
  } catch(error) {
    next(error)
  }
  
})

app.get('/username', (req, res, next) => {
  
  try{
    username(usuario => {
      res.json({usuario})
    })
  } catch(error) {
    next(error)
  }
  
})

app.put('/transfer', express.json(), async (req, res, next) => {

  try{
    const { debitedAccountId, creditedAccountId, value } = req.body
    const debitAccount = await Accounts.findByPk(debitedAccountId)
    const creditAccount = await Accounts.findByPk(creditedAccountId)
  
    if(!debitAccount || !creditAccount) {
      res.status(400).send('Conta não existe')
    } else if(parseFloat(debitAccount.balance) < value) {
      res.status(400).send('Saldo insuficiente')
    } else if(value <= 0) {
      res.status(400).send('Valor não pode ser menor do que 0')
    } else if(debitedAccountId == creditedAccountId) {
      res.status(400).send('Você não pode transferir para si mesmo')
    } else if(!debitedAccountId || !creditedAccountId || !value) {
      res.status(400).send('Informe todos os valores')
    } else {
      await transfer(debitedAccountId, creditedAccountId, parseFloat(value))
      res.status(201).json('Transferencia realizada com sucesso')
    }
  } catch(error) {
    next(error)
  }
  
})

app.post('/create', express.json(), async (req, res, next) => {

  try {
    const { usuario, password } = req.body
    const checkUsername = await Users.findOne({ where: { username: usuario } })
    const strongPass = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
   
    const encryptedPassword = await bcrypt.hash(password, 10)
  
    if (usuario.length < 3) {
      res.status(400).send('Usuario deve ter pelo menos 3 caracteres')
    } else if (checkUsername) {
      res.status(400).send('Usuario já existe')
    } else if (!strongPass.test(password)) {
      res.status(400).send('A senha deve ter no minimo 8 caracteres, uma letra maiuscula e um carectere especial')
    } else {
      const createNewAccount = await Accounts.create({
        balance: 100.00
      })
  
      const user = await Users.create({
        username: usuario,
        password: encryptedPassword,
        accountId: createNewAccount.id,
      })
  
      const token = jwt.sign(
        { user_id: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      )
  
      user.token = token
  
      res.status(201).json(user)
    }
  } catch (error) {
    next(error)
  }
})

app.post('/login', express.json(), async (req, res, next) => {
  try{
    const { usuario, password } = req.body

    if(!(usuario && password)) {
      res.status(400).send('Todos os campos devem ser preenchidos')
      return
    }

    const user = await Users.findOne({where: {username: usuario}})

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id },
        process.env.TOKEN_KEY,
        {
          expiresIn: "24h",
        }
      );

      user.token = token

      res.status(200).json(user)
      return
    }
    res.status(400).send('Dados invalidos')
  } catch(error) {
    next(error)
  }
})

app.get('/welcome', auth, (req, res) => {
  res.status(200).send('Bem vindo');
})

app.use("*", (req, res) => {
  res.status(404).json({
    success: "false",
    message: "Page not found",
    error: {
      statusCode: 404,
      message: "You reached a route that is not defined on this server",
    },
  });
});
