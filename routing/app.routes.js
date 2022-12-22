const router = require('express').Router();
const {resolve} = require('path');

router.get('/home', (req, res) => {
  res.sendFile(resolve('public', 'index.html'));
});

router.get('/contact', (req, res) => {
    res.sendFile(resolve('public', 'contact.html'));
  });
  
router.get('/services', (req, res) => {
    res.sendFile(resolve('public', 'services.html'));
  });
router.get('/users', (req, res) => res.end('users'));


router.get('*', (req, res) => {
    res.sendFile(resolve('public', 'index.html'));
});




module.exports = router;