const routerApi = require('express').Router();

routerApi.get('/users', (req, res) => {
    const data = require('.././database/data.json');
    res.json( {users : data.users});
});

module.exports = routerApi;


