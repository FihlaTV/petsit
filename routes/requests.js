var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

// Get all request
router.get('/', function(req, res, next) {
knex.raw(`SELECT distinct on (pets.id) requests.*, users.username, pets.pet_name, pets.id as pet_id, pet_reviews.rating, pets.pic_url FROM requests JOIN users ON requests.poster_id = users.id JOIN pets ON pets.id = requests.pet_id LEFT OUTER JOIN pet_reviews ON pet_reviews.pet_id = pets.id;`)
  .then(function(requests) {
    res.render('requests', {
      username: req.cookies.username,
      passinData: requests.rows,
      cookies: req.cookies.user_id
    })
  })
})

// Add new Request Page
router.get('/add', function(req, res, next) {
  if (req.cookies.user_id) {
    knex.raw(`SELECT * from pets WHERE pets.owner_id = ${req.cookies.user_id}`)
      .then(function(pets) {
        res.render('addRequest', {
          cookie: req.cookies.user_id,
          petInfo: pets.rows, username: req.cookies.username,
          cookies: req.cookies.user_id
        })
      })
  } else {
    res.redirect('/')
  }
})



// View requests
router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT requests.*, users.username, pets.pet_name, pets.pic_url FROM requests JOIN users ON requests.poster_id = users.id JOIN pets ON pets.id = requests.pet_id WHERE requests.id = ${req.params.id}`)
    .then(function(data) {
      knex.raw(`SELECT request_comment.*, users.username FROM request_comment JOIN users ON users.id = request_comment.user_id WHERE request_comment.request_id = ${req.params.id}`)
        .then(function(comments) {
          knex.raw(`SELECT * FROM users`)
            .then(function(users) {
              knex.raw(`select avg(rating) from pet_reviews where pet_id = ${data.rows[0].pet_id}`)
                .then(function(pet_ave) {
                  knex.raw(`select user_reviews.*, users.username from user_reviews JOIN users ON users.id = user_reviews.user_id`)
                    .then(function(user_reviews) {
                      res.render('showRequest', {
                        request: data.rows[0],
                        passinData: comments.rows,
                        cookie: req.cookies.user_id,
                        user: users.rows, username: req.cookies.username,
                        cookies: req.cookies.user_id,
                        starAve: Math.round(pet_ave.rows[0].avg),
                        user_reviews: user_reviews.rows
                      })
                    })
                })
            })
        })
    })
})
// accecpt request
router.post('/accept', function(req, res, next) {
  var acceptedUser = req.body.accepted
  var requestId = req.body.request
  knex.raw(`UPDATE requests SET accepted_user_id = ${acceptedUser} WHERE id = ${requestId}`)
    .then(function(data) {
      res.cookie('alertCookie', 'You Accepted A Request', {maxAge : 5999});
      res.redirect('/requests/' + requestId)
    })
})



router.get('/edit/:id', function(req, res, next) {
  knex.raw(`select * from requests where id = ${req.params.id}`)
    .then(function(request) {
      knex.raw(`SELECT * from pets WHERE pets.owner_id = ${req.cookies.user_id}`)
        .then(function(pets) {
          console.log(request.row)
          res.render('editRequests', {
            request: request.rows[0],
            petInfo: pets.rows, username: req.cookies.username,
            cookies: req.cookies.user_id
          })

        })
    })
})



router.post('/edit/:id', function(req, res, next) {
  knex.raw(`UPDATE requests SET (default )`)
})

router.post('/', function(req, res, next) {
  knex.raw(`INSERT INTO requests VALUES (default, ${req.body.poster}, ${req.body.pet}, '${req.body.start}', '${req.body.end}', '${req.body.notes}')`)
    .then(function(data) {
      res.cookie('alertCookie', 'You Added A New Request', {maxAge : 5999});
      res.redirect('/requests')
    })
})

router.post('/delete/:id', function(req, res, next) {
  knex.raw(`DELETE FROM requests WHERE id = ${req.params.id}`)
    .then(function(data) {
      res.cookie('alertCookie', 'Request Deleted', {maxAge : 5999});
      res.redirect('/requests')
    })
})

module.exports = router;
