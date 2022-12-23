
const {resolve} = require('path');

const home = (req, res) => {
    res.send(require('../views/index'));
    };

const contact = (req, res) => {
    res.send(require('../views/contact'));
    };

const services = (req, res) => {
    res.send(require('../views/services'));
    };

const users = (req, res) => {
    res.send(require('../views/users'));
    };


module.exports = {
    home,
    contact,
    services,
    users
}