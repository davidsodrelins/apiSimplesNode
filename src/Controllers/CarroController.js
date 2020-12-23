/*criar os métodos padrão para cada tipo de verbo, do HTTP.
Create - POST
Read - GET
Update - PUT
Delete - DELETE
Daí vem a sigla CRUD!
*/

//Controller do POST
exports.post = (req, res, next) => {
  res.status(201).send("Rota POST! - Eu irei persistir um novo carro no bd!");
};

//Controller do PUT
exports.put = (req, res, next) => {
  let nome = req.params.nome;
  // O status 201 do HTTP siginifica Sucesso na criação.
  res.status(201).send(`Rota Put, atualizaçã do carro --> ${nome}`);
};

//Controller do DELETE
exports.delete = (req, res, next) => {
  let nome = req.params.nome;
    // O status 200 do HTTP siginifica Sucesso na conexão.
  res.status(200).send(`Rota DELETE, vai remover o carro --> ${nome}`);
};

//Controller do GET que traz todos os registros
exports.get = (req, res, next) => {
  // O status 200 do HTTP siginifica Sucesso na conexão.
  res.status(200).send("Rota GET! Vai mostrar todos os carros do pátio.");
};

//Controller do GET passando um paramentro
exports.getByNome = (req, res, next) => {
  let nome = req.params.nome;
  res
    .status(200)
    .send(`Rota GET com nome! Mostra o nome passado na url:  ${nome}`);
};
