$(document).ready(function() {
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
