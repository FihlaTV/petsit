var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/requests');
});

// create account
router.post('/login', function(req, res, next) {
	console.log(req.body.login)
	knex.raw(`SELECT * FROM users where username = '${req.body.login}'`)
  	.then(user => {
  		console.log(user.rows[0])
  		bcrypt.compare(req.body.password, user.rows[0].password, (err, resp) => {
  			if (resp) {
  				res.cookie('user_id', user.rows[0].id);
          res.cookie('username', user.rows[0].username);
					res.redirect('/');
  			} else {
  				res.send('try again');
  			}
  		});
  	});
});

router.get('/logout', (req, res, next) => {
  res.clearCookie('username');
  res.clearCookie('user_id');
	res.redirect('/');
});

router.get('/about', function(req, res, next) {
  res.render('about')
});


module.exports = router;
