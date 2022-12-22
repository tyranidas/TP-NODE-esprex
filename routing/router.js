const express = require('express');
const router = express();


router.get('/contact', (req, res) => {
    res.sendFile(resolve('public', 'contact.html'));
  });
  
router.get('/services', (req, res) => {
    res.sendFile(resolve('public', 'services.html'));
  });
  
router.get('*', (req, res) => {
    res.sendFile(resolve('public', 'index.html'));
});

  module.exports = router;