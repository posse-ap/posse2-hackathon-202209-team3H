'use strict';

$('#page-link a[href*="#"]').click(function () {
  var elmHash = $(this).attr('href'); 
  var pos = $(elmHash).offset().top-70;
  $('body,html').animate({scrollTop: pos}, 1500); 
  return false;
});
