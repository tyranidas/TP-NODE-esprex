const router = require('express').Router();


const {home, contact, services, users} = require('../controllers/controllers.routes');

router.get('/home', home)
router.get('/contact',  contact)
router.get('/services', services)
router.get('/users', users)
router.get('/', home)


module.exports = router;