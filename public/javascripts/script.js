$(document).ready(function() {
  console.log("i'm up")

$( ".datepicker" ).datepicker()


if ($.cookie('alertCookie')) {
  var alert = $.cookie('alertCookie');
  $('.content').append("<div class= 'elementToFadeInAndOut' id= 'test'>" + alert + "</div>");
  setTimeout(function() {
    $('.content').remove('.test'); }, 3000);
}




})
