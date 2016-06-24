$(document).ready(function(){

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 500);
          return false;
        }
      }
    });
  });

  var bg = jQuery("#uvod, #cenik");
  jQuery(window).resize("resizeBackground");
  function resizeBackground() {
      bg.height(jQuery(window).height() + 60);
  }
  resizeBackground();


});
