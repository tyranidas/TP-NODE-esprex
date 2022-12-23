const router = require('express').Router();
const appRoutes = require('./app.routes');
const appApiRoutes = require('./api-users.routes');

router.use(appApiRoutes)
.use(appRoutes);

router.get('*', (req, res) => {
    res.redirect('/')
    });

module.exports = router;