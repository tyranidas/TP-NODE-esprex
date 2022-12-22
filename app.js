const esprex = require('./core/esprex.js');
const app = esprex();




app.get('/home', (req, res) => {
    res.end('Home Page');
});

app.get('/contact', (req, res) => {
    res.end('Contact Page');
});

app.get('/services', (req, res) => {
    res.end('Services Page');
});
app.post('/home', (req, res) => {
    res.end('Home Page POST');
});


module.exports = app;