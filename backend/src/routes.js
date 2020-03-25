const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

/**
 * Tipos de Parâmetros:
 * 
 *  - Query Parms: Parâmetros nomeados enviados na rota após "?". Serverm para: Filtros, Paginação etc.
 *  - Route Params: Parãmetros utilizados para identificar recursos.
 *  - Request Body: Corpo da requisição, utilizado para criar ou alterar recursos.
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.store);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.store);

routes.get('/incidents', IncidentController.store);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);



module.exports = routes;