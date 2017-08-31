var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// create new user
router.get('/add', function(req, res, next) {
  res.render('newUser')
})

// edit page
router.get('/:id/edit', function(req,res, next){
  knex.raw(`SELECT * FROM users WHERE id = ${req.params.id}`)
    .then(function(user) {
      res.render('editUser', {user: user.rows[0]})
    });
})

// show user page
router.get('/:id', function(req, res, next){
  knex.raw(`SELECT * FROM users WHERE id = ${req.params.id}`)
  .then(function(user) {
    knex.raw(`SELECT pets.*, pet_reviews.rating FROM pets JOIN pet_reviews ON pets.id = pet_reviews.pet_id WHERE pets.owner_id = ${req.params.id}`)
      .then(function(pets) {
        console.log(pets.rows)
        knex.raw(`SELECT user_reviews.*, users.username FROM user_reviews JOIN users ON users.id = user_reviews.poster_id WHERE user_id = ${req.params.id}`)
        .then(function(reviews) {
          knex.raw(`select avg(rating) from user_reviews where user_id = ${req.params.id}`)
          .then(function(ave){
            res.cookie('stars', Math.round(ave.rows[0].avg) )
            res.render('showUser', {user: user.rows[0], pets: pets.rows, reviews: reviews.rows, cookie: req.cookies.user_id, starAve: Math.round(ave.rows[0].avg), username: req.cookies.username})
          })
        })
      })
  })
})












// create user
router.post('/add', function(req, res, next) {
  if (req.body.password === req.body.verify) {
    bcrypt.hash(req.body.password, 8, function(err, hash) {
      knex.raw(`INSERT INTO users VALUES (default, '${req.body.username}', '${hash}', '${req.body.location}', '${req.body.bio}', '${req.body.email}', '${req.body.phone}', '${req.body.info}')`)
        .then(function(data) {
          res.redirect('/')
        })
    })
  } else {
    res.redirect('/')
  }
})

router.post('/:id', function(req, res, next) {
  knex.raw(`UPDATE users SET (username, location, bio, email, phone_number, house_info) = ('${req.body.username}', '${req.body.location}', '${req.body.bio}', '${req.body.email}', '${req.body.phone_number}', '${req.body.info}') WHERE id = ${req.params.id}`)
    .then(function(user) {
      res.redirect(`/users/${req.params.id}`)
    })
})






module.exports = router;
