const express = require('express');
const {resolve} = require('path');
const app = express();

const appRoutes = require('./routing/app.routes');
const appApiRoutes = require('./routing/api-users.routes');

app.use(express.static(resolve('public'), {index: false}));
app.use(appApiRoutes);
app.use(appRoutes);

  


module.exports = app;

  