var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Root' });
});

router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

router.get('/logoff', function(req, res) {
  res.render('logoff', { title: 'Logoff' });
});

module.exports = router;
