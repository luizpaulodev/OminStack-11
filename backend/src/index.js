const cors = require('cors');
const express = require('express');

const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

/**
* Rota / Recurso
*/

/**
* Métodos Http
* 
* GET: Buscar/Listar uma informação do back-end
* POST: Criar uma informação no back-end
* PUT: Alterar uma informação no back-end
* DELETE: Deltar uma informação no back-end
*/

/**
* Tipos de parâmetros:
* 	Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação)
*   Route Params: Parâmetros utilizados para identificar recursos
*   Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/