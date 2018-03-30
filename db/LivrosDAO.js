const pool = require('./pool');

const conexao = pool.getConnection();

function livrosDAO(){

function pegaLivros(callback) {
  conexao.query('SELECT * FROM livros', callback)
}

function insereLivros(livro, callback) {
  conexao.query('INSERT INTO livros SET ?', livro, callback)
}

  return {
    pegaLivros: pegaLivros,
    insereLivros: insereLivros
  }
}


module.exports = livrosDAO
