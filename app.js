const express = require('express');
const {resolve} = require('path');
const app = express();

const index = require('./routing/index');

app.use(express.static(resolve('public'), {index: false}));
app.use(index);


  


module.exports = app;

  