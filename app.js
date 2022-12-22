const express = require('express');
const {resolve} = require('path');
const app = express();

const router = require('./routing/router.js');

app.use(express.static(resolve('public')));

  
app.get('/users', (req, res) => {
    const data = require('./database/data.json');
    res.json({ users : data.users});
  });

  module.exports = app;

  