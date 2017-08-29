var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

// Get all request
router.get('/', function(req, res, next) {
  knex.raw(`SELECT requests.*, users.username, pets.pet_name FROM requests JOIN users ON requests.poster_id = users.id JOIN pets ON pets.id = requests.pet_id;`)
    .then(function(requests) {
      res.render('requests', {
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
          petInfo: pets.rows
        })
      })
  } else {
    res.redirect('/')
  }
})



// View requests
router.get('/:id', function(req, res, next) {
  knex.raw(`SELECT requests.*, users.username, pets.pet_name FROM requests JOIN users ON requests.poster_id = users.id JOIN pets ON pets.id = requests.pet_id WHERE requests.id = ${req.params.id}`)
    .then(function(data) {
      knex.raw(`SELECT request_comment.*, users.username FROM request_comment JOIN users ON users.id = request_comment.user_id WHERE request_comment.request_id = ${req.params.id}`)
        .then(function(comments) {
          knex.raw(`SELECT * FROM users`)
            .then(function(users) {
              res.render('showRequest', {
                request: data.rows[0],
                passinData: comments.rows,
                cookie: req.cookies.user_id,
                user: users.rows
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
      res.redirect('/requests/' + requestId)
    })
})

// Submit New request

router.post('/', function(req,res,next){
  knex.raw(`INSERT INTO requests VALUES (default, ${req.body.poster}, ${req.body.pet}, '${req.body.start}', '${req.body.end}', '${req.body.notes}')`)
  .then(function(data){
  res.redirect('/requests')  
  })
})

module.exports = router;
