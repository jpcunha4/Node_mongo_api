const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//String de conexão: mongodb+srv://user_admin:<password>@node-crud-api-vns7d.azure.mongodb.net/test?retryWrites=true
//MONGOOSE
const url = "mongodb+srv://user_admin:1234567890@node-crud-api-vns7d.azure.mongodb.net/test?retryWrites=true"
const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true};

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
  console.log(`Erro na conecção com o banco de dados\n${err}`);
});

mongoose.connection.on('disconnected', () => {
  console.log('Aplicação disconectado do banco de dados.');
})

mongoose.connection.on('connected', () => {
  console.log("Aplicação conectada ao banco de dados");
});

//BODY PARSER
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const index = require('./routes/index');
const users = require('./routes/users');

app.use('/', index);
app.use('/users', users);


app.listen(3000);

module.exports = app;