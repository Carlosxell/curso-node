const LivrosDAO = require('../../db/LivrosDAO'),
      queryString = require('query-string');

function produto(servidor) {
  servidor.get('/', (request, resposta) => {
    LivrosDAO().pegaLivros(function(erro, result) {
      if(erro){
        next(erro);
      }else{
        resposta.format({
          html: () => {
            resposta.render('produtos/lista', { livros: result, msgErro: '' });
          },
          json: () => {
            resposta.send(result);
          }
        });
      }
    });
  });

  servidor.get('/cadastro', (req, res) => {
    res.render('produtos/form', { validationErrors: [] });
  });

  servidor.post('/produtos', (request, resposta) => {
    let dadosString = '';
    request.on('data', (chunk) => {
      dadosString += chunk.toString();
      console.log(chunk);
    });

request.on('end', () => {
  request.assert('titulo', 'Título vazio').notEmpty();
  request.assert('preco', 'Preço vazio').notEmpty();
  request.assert('preco', 'Preço precisa ser um número').isNumeric();

  const livro = queryString.parse(dadosString),
        livrosDAO = new LivrosDAO(),
        listaErros = request.validationErrors();

        request.asyncValidationErrors().then(() => {
          livrosDAO.insereLivros(livro, (erro) => {
            if(erro){
              next(erro)
            }else{
              resposta.redirect('/');
            }
          });
        }).catch((listaErros) => {
          resposta.render('produtos/form', {
            validationErrors: listaErros,
            livro: livro
          })
        });
    });
  });
}

module.exports = produto;
