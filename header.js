$(document).ready(function(){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 204) {
      $("#nav").addClass("fix");
    } else {
      $("#nav").removeClass("fix");
    }
  });
});