var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');

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
    res.redirect(`/users/${req.cookies.user_id}`)
  })
})


/* GET home page. */
router.get('/:id', function(req, res, next) {
  knex.raw(`select pets.id as id, pet_name, species,age, pets.bio as bio, temperament, pic_url, username, notes, location from pets join users on pets.owner_id = users.id WHERE pets.id = ${req.params.id}`)
  .then(function(pets){
    res.render('petShow', {pet: pets.rows[0]});
  })
});


router.get('/:id/edit', function(req, res, next) {
    knex.raw(`select * from pets WHERE pets.id = ${req.params.id}`)
    .then(function(pets){
      res.render('petEdit', { pet:pets.rows[0] })
    })
});

router.post('/:id/edit', function(req, res, next) {
    knex.raw(`update pets set pet_name='${req.body.name}', temperament='${req.body.temperament}', bio = '${req.body.bio}', age= ${req.body.age}, notes = '${req.body.notes}', pic_url = '${req.body.pic_url}' WHERE id = ${req.params.id}`)
    .then(function(pet){
      res.redirect(`/pets/${req.params.id}`)
    })
});







router.get('/:id/delete', function(req, res, next) {
  res.redirect('/home');


});



// petDelete
// petAdd





module.exports = router;
