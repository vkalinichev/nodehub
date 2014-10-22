var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Wrumly' });
});

router.get('/users', function(req, res) {
  res.render('users/list', { title: 'Users list' });
});

router.get('/users/search/:text', function(req, res) {
  res.render('users/search', { title: 'Users search: ' +  + req.params.text });
});

router.get('/users/:id', function(req, res) {
  res.render('users/profile', { title: 'User' + req.params.id });
});


module.exports = router;
