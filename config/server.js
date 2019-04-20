//Configurações do servidor
const express = require('express')//utilizar () após o require para retornar a função
//Retornando Função de forma didática, passando para variável APP
const consign = require('consign')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express();

app.set('view engine', 'ejs') //Alterando a engine de views do Express
app.set('views', './app/views')

app.use(express.static('./app/public'))
app.use(bodyParser.urlencoded({extended: true})) //Incluir Middleware
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);//Reconhecer rotas e configurações com Consign e incluir no APP

module.exports = app;