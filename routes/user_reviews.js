var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.post('/', function(req, res, next) {
	knex.raw(`INSERT into user_reviews VALUES (default, ${req.body.user_id}, '${req.body.review}', ${req.body.rating}, ${req.body.poster_id})`)
		.then(function(review) {
			res.redirect(`/users/${req.body.user_id}`);
		})
});

module.exports = router;