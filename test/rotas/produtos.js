const assert = require('assert'),
      http = require('http'),
      supertest = require('supertest'),
      soma = (n1, n2) => {
        return n1 + n2;
      };

describe('# Produtos', () => {
  it('home com o produtos trazem JSON', (done) => {
    supertest(servidor)
      .get('/')
      .expect('Accept', 'text/html')
      .expect('Content-Type', /html/)
      .expect(200, done)


    // const opcoes = {
    //   hostname: 'localhost',
    //   port: 3000,
    //   path: '/',
    //   headers: {
    //     'Accept': 'application/json'
    //   }
    // };
    //
    // http.get(opcoes, (response) => {
    //   console.info('headers', response.headers['content-type']);
    //   assert.equal(response.headers['content-type'], 'application/json; charset=utf-8');
    //   done();
    // });
  });

  // it('1 + 1 deve ser 2', () => {
  //   assert.equal( soma(1, 1), 2, 'Deve retornar 2' );
  // });
});

console.info('Passou nos testes simples')

// describe('# Produtos', function() {
//   it('hom com o produtos trazem JSON', () => {
//     console.log('Foi?')
//   });
// })
