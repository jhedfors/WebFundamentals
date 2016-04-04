$(document).ready(function(){
  $('.images img').click(function(){
    var altsrc = $(this).attr('data-alt-src');
    var origsrc = $(this).attr('src');
    $(this).attr('src', altsrc);
    $(this).attr('data-alt-src', origsrc);
  });
})
