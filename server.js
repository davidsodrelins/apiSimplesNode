/* O Express é um framework para aplicativoda web do Node.js mínimo e flexível 
que fornece um conjunto robusto de recursos para aplicativos web e móvel.
 */
const express = require("express");

/*
O cors é quem vai permitir sua API receber requisições de domínios diferentes.
*/
const cors = require("cors");

const app = express();

require("./src/Routes/index.js")(app);

app.use(cors()); //configuramos a API para aceitar requisições de qualquer origem com o cors
app.use(express.json()); //configuramos a API para retornar tudo em JSON.

app.listen(3333, () => {
  console.log("Servidor da API está rodando!")
}); //configuramos a API para escutar na porta 3333
