const express = require('express');

const routes = express.Router();

routes.post('/users', (request, response) => {
  const params = request.body;
  
	return response.json({ 
		evento: 'Semana OmniStack 11',
		aluno: 'Luiz Paulo de Oliveira'
	});
});

module.exports = routes;