
const {resolve} = require('path');

const home = (req, res) => {
        res.sendFile(resolve('public', 'index.html'));
    };

const contact = (req, res) => {
        res.sendFile(resolve('public', 'contact.html'));
    };

const services = (req, res) => {
      res.sendFile(resolve('public', 'services.html'));
    };

const users = (req, res) => {
    const data = require('.././database/data.json');
    module.exports = data;
    res.sendFile(resolve('public', 'users.html'));
    };


module.exports = {
    home,
    contact,
    services,
    users
}