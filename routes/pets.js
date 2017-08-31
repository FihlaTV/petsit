var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');


// add yo pet
router.get('/add', function(req, res, next) {
  if(req.cookies.user_id){
      res.render('petAdd', { cookie: req.cookies.user_id });
  } else {
    res.redirect('/')
  }
});

router.post('/add', function(req, res, next){
  knex.raw(`insert into pets values (default, ${req.body.user_id}, '${req.body.name}', '${req.body.species}', ${req.body.age}, '${req.body.bio}', '${req.body.temperament}', '${req.body.notes}', '${req.body.pic_url}') `)
  .then(function(data){
    res.cookie('alertCookie', 'Pet was added', {maxAge : 6999});
    res.redirect(`/users/${req.cookies.user_id}`)
  })
})




// show pet
router.get('/:id', function(req, res, next) {
  knex.raw(`select pets.id as id, pets.owner_id as user_id, pet_name, species,age, pets.bio as bio, temperament, pic_url, username, notes, location from pets join users on pets.owner_id = users.id WHERE pets.id = ${req.params.id}`)
  .then(function(pets){
    knex.raw(`SELECT pet_reviews.*, users.username FROM pet_reviews JOIN users ON users.id = pet_reviews.poster_id WHERE pet_id = ${req.params.id}`)
    .then(function(reviews) {
        knex.raw(`select avg(rating) from pet_reviews where pet_id = ${req.params.id}`)
        .then(function(ave){
          res.render('petShow', {pet: pets.rows[0], cookie: req.cookies.user_id, reviews: reviews.rows, starAve: Math.round(ave.rows[0].avg), username: req.cookies.username});

        })
      })
  })
});



// edit a pet
router.get('/:id/edit', function(req, res, next) {
    knex.raw(`select * from pets WHERE pets.id = ${req.params.id}`)
    .then(function(pets){
      res.render('petEdit', { pet:pets.rows[0], username: req.cookies.username })
    })
});



router.post('/:id/edit', function(req, res, next) {
    knex.raw(`update pets set pet_name='${req.body.name}', temperament='${req.body.temperament}', bio = '${req.body.bio}', age= ${req.body.age}, notes = '${req.body.notes}', pic_url = '${req.body.pic_url}' WHERE id = ${req.params.id}`)
    .then(function(pet){
      res.cookie('alertCookie', 'Pet was edited', {maxAge : 6999});
      res.redirect(`/pets/${req.params.id}`)
    })
});






// delete a pet
router.post('/:id/delete', function(req, res, next) {
  knex.raw(`delete from pets where id = ${req.params.id}`)
  .then(function(data){
    res.cookie('alertCookie', 'Pet was deleted', {maxAge : 6999});
    res.redirect(`/users/${req.cookies.user_id}`)
  })
});



// petDelete






module.exports = router;
