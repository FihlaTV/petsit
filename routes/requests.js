var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js');
var bcrypt = require('bcrypt');

// Get all request
router.get('/', function(req,res,next){
  knex.raw(`SELECT requests.*, users.username, pets.pet_name FROM requests JOIN users ON requests.poster_id = users.id JOIN pets ON pets.id = requests.pet_id;`)
  .then(function(requests){
    res.render('requests', {passinData: requests.rows})
  })
})
// View requests

router.get('/:id', function(req,res,next){
  knex.raw(`SELECT requests.*, users.username, pets.pet_name FROM requests JOIN users ON requests.poster_id = users.id JOIN pets ON pets.id = requests.pet_id WHERE requests.id = ${req.params.id}`)
  .then(function(data){
    knex.raw(`SELECT request_comment.*, users.username FROM request_comment JOIN users ON users.id = request_comment.user_id WHERE request_comment.request_id = ${req.params.id}`)
    .then(function(comments){
      res.render('showRequest', {request: data.rows[0], passinData: comments.rows})
    })
  })
})
// accecpt request
router.post('/accept', function(req,res,next){
  var acceptedUser =  req.body.accepted
  var requestId = req.body.request
  console.log(acceptedUser)
  console.log(requestId)
knex.raw(`UPDATE requests SET accepted_user_id = ${acceptedUser} WHERE id = ${requestId}`)
.then(function(data){
  res.redirect('/requests/' + requestId)
})

})



module.exports = router;
