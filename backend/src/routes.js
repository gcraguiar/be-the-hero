const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

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
routes.post('/ongs', celebrate({
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().required().email(),
    whatsapp: Joi.number().required().min(10).max(11),
    city: Joi.string().required(),
    uf: Joi.string().required().length(2)
  })
}), OngController.create);

routes.get('/profile', celebrate({
  [Segments.HEADERS] : Joi.object({
    authorization: Joi.string().required()
  }).unknown()
}), ProfileController.store);

routes.get('/incidents', celebrate({
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
}) ,IncidentController.store);

routes.post('/incidents', IncidentController.create);

routes.delete('/incidents/:id', celebrate({
  [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required()
  })
}),IncidentController.delete);



module.exports = routes;