$('document').ready(function(){
  $('.images img').click(function(){
    $(this).slideUp('slow');

  });
  $('.images button').click(function(){
    $('.images img').show();
  })

})
