# 🎲 NG Cash Banking Application

#### Esse projeto foi desenvolvido com o intuito de atingir os requisitos da fase teste da NG Cash. 

#### Aqui você pode encontrar o passo a passo para rodar esse projeto na sua maquina.


## 🎲 Pré-requisitos

###### Você precisa ter instalado na sua maquina:

* [Node.js](https://nodejs.org/en/)
* [Postgres](https://postgresql.org/download/)
* [VScode](https://code.visualstudio.com/download)

## 🎲 Instalando o Postgres
```bash
# Quando for instalar o Postgres siga os passos recomendados.
# Mantenha a porta 5432
# Utilize a senha "postgres"

1. Agora vamos configurar nosso Database, abra "pgAdmin4" que vem junto com a instalação do Postgres
2. Assim que pedir a senha master, use "postgres" também.
3. Clique em Servers > PostgreSQL 15
4. Provavelmente ira solicitar a senha master nesse momento, use "postgres"
5. Clique em Databases
6. Em seguida, botão direito em Databases > Create > Database
7. Ira abrir uma janela pra escolher o nome, escolha "bankdb" e clique em Save
8. Apos a criação, botão direito em Databases e Refresh.
9. Agora você sera capaz de visualizar o banco de dados "bankdb".
10. Encerrando a configuração do banco de dados

```
## 🎲 Rodando back-end

```bash
# Agora com todas as ferramentas instaladas e devidamente configuradas, faça um git clone desse repositorio.

# Abra seu VScode e abra a pasta do projeto clonado.

# Abra o terminal do VScode com CTRL+SHIFT+'

# Acesse a pasta "nodejs-banking-app"
$ cd nodejs-banking-app

# Instale as dependências
$ npm install

# Execute a aplicação
$ node index.js

# O servidor inciará na porta:3100
```

## 🎲 Rodando front-end

```bash
# Agora vamos abrir novamente outro terminal em quanto o servidor roda

# No VScode, abra o terminal do VScode com CTRL+SHIFT+'

# Acesse a pasta "react-banking-app"
$ cd react-banking-app

# Instale as dependências
$ npm install

# Execute a aplicação
$ node npm start

# O servidor inciará na porta:3000 - acesse: http://localhost:3000/
```

## 🎲 Utilização

##### Agora você pode criar um usuário e logar na sua conta bancária.
##### Logado você poderá realizar transferências, checar seu saldo e verificar as transações realizadas/recebidas.

## 🎲 Tecnologias

- [Node.js](https://nodejs.org/en/)
- [React](https://pt-br.reactjs.org/)
- [Postgres](https://postgresql.org/)
- [Sequelize](https://sequelize.org/)

## 🎲 Autor

##### Meu nome é Gabriel Sotto, estudante de Analise e Desenvolvimento de Sistemas e apaixonado por desenvolvimento web.

- ###### [LinkedIn](https://www.linkedin.com/in/gabriel-sotto-1a2627132/)
- ###### Email: "gabriel_sotto_@hotmail.com"

## 🎲 Status do Projeto

###### Atualmente o projeto se encontra finalizado e entregue a NG Cash.
##
###### Obrigado pela atenção
