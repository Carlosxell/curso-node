const servidor = require('express')(),
      express = require('express'),
      expressValidator = require('express-validator'),
      dotEnv = require('dotenv').config();

servidor.set('view engine', 'ejs');

servidor.set(express.urlencoded());

servidor.set(express.json());

servidor.use(expressValidator());

servidor.use(express.static('./public'));

require('./rotas/produtos/produtos')(servidor);

servidor.use((req, res, next) => {
  res.format({
    default: () => {
      res.send({ erro: 'Erro 404' })
    },
    html: () => {
      res.render('erros/500', { erro: 'Erro 404' });
    },
    json: () => {
      res.send({ erro: 'Erro 404' })
    }
  });
});

servidor.use((erro, request, resposta, next) => {
  resposta.format({
    default: () => {
      resposta.send({ erro: erro })
    },
    html: () => {
      resposta.render('erros/500', { erro });
    },
    json: () => {
      resposta.send({ erro: erro })
    }
  });
});

module.exports = servidor;
