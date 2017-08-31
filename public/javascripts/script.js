$(document).ready(function() {
  console.log("i'm up")

  $(".datepicker").datepicker()


  if ($.cookie('alertCookie')) {
    console.log('js cookie firing')
    var alert = $.cookie('alertCookie');
    $('.content').append("<div class= 'elementToFadeInAndOut' id= 'test'>" + alert + "</div>");
    setTimeout(function() {
      $('#test').remove();
    }, 3000);

  }
})
