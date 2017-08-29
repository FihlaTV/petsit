var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


/* GET home page. */
router.get('/:id', function(req, res, next) {
  knex.raw(`select pet_name, species,age, pets.bio as bio, temperament, pic_url, username, notes, location from pets join users on pets.owner_id = users.id WHERE pets.id = ${req.params.id}`)
  .then(function(pets){
    res.render('petShow', { pets: pets.rows[0] });
  })
});


router.get('/:id/edit', function(req, res, next) {
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
