const mysql = require('mysql');

module.exports = {
  getConnection: function() {
    const conexao = mysql.createConnection({
      user: 'root',
      password: 'caelum',
      host: 'localhost',
      //port: 3306,
      database: 'cdc'
    })

    return conexao;
  }
};
