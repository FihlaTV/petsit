var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

router.post('/', function(req, res, next) {
	knex.raw(`INSERT into user_reviews VALUES (default, ${req.body.user_id}, ${req.body.post_id}, '${req.body.comment}')`)
		.then(function(comment) {
			res.redirect(`requests/${req.body.post_id}`);
		})
});

module.exports = router;