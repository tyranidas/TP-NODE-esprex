const routerApi = require('express').Router();
const {userApi} = require('../controllers/controllers.api');

routerApi.get('/users', userApi);

module.exports = routerApi;


