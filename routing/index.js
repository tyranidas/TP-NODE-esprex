const router = require('express').Router();
const appRoutes = require('./app.routes');
const appApiRoutes = require('./api-users.routes');

router.use(appApiRoutes);
router.use(appRoutes);

module.exports = router;