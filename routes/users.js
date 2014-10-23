var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('users/list', { title: 'Users list' });
});

router.get('/search/:text', function(req, res) {
  res.render('users/search', { title: 'Users search: ' + req.params.text });
});

router.get('/:id', function(req, res) {
  res.render('users/profile', { title: 'User' + req.params.id });
});

module.exports = router;
