var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


/* GET home page. */
router.get('/:id', function(req, res, next) {
  res.render('petShow', { title: 'Express' });


});


router.get('/:id/edi', function(req, res, next) {
  res.render('petEdit', { title: 'Express' });


});


router.get('/add', function(req, res, next) {
  res.render('petAdd', { title: 'Express' });


});


router.get('/:id/delete', function(req, res, next) {
  res.redirect('/home');


});

// petShow
// petEdit
// petDelete
// petAdd





module.exports = router;
