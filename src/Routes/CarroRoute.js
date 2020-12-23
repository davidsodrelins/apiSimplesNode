const CarroController = require('../Controllers/CarroController');

//Aqui temos todas as rotas referentes aos carros, capa app.VERBO é um endpoint
module.exports = (app) => {
   app.post('/carro', CarroController.post);
   app.put('/carro/:nome', CarroController.put); //:nome referencia o parametro que vai ser passado
   app.delete('/carro/:nome', CarroController.delete);
   app.get('/carro', CarroController.get);
   app.get('/carro/:nome', CarroController.getByNome);
}