$(document).ready(function() {

  //testing 5 star reviews// target element
  var el = document.querySelector('#el');

  // current rating, or initial rating
  var currentRating = 0;

  // max rating, i.e. number of stars you want
  var maxRating= 5;

  // callback to run after setting the rating
  var callback = function(rating) { alert(rating); };

  // rating instance
  var myRating = rating(el, currentRating, maxRating, callback);




  $(".add-comment").submit(function(e) {
    console.log("submitted")
    var user = $("#comment-user")
    var comment = $("#comment").val();
    console.log(comment);
    console.log(user)
    $(".content").append("<div>" + user + ":" + comment + "</div>");
    $("#comment").children('input').val('');
  })





})
