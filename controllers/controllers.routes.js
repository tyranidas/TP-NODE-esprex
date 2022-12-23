
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

const def = (req, res) => {
    res.sendFile(resolve('public', 'index.html'));
    };


module.exports = {
    home,
    contact,
    services,
    def
}