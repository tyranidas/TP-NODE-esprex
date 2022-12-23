const router = require('express').Router();


const {home, contact, services, def} = require('../controllers/controllers.routes');

router.get('/home', home)

router.get('/contact',  contact)
router.get('/services', services)



router.get('*', def)




module.exports = router;