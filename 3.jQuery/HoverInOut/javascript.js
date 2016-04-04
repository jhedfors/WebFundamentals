$('document').ready(function(){
  $('.images img').hover(function(){
    var origimg = $(this).attr('src');
    var altimg = $(this).attr('data-alt-img');
    $(this).attr('src', altimg);
    $(this).attr('data-alt-img', origimg);
  },function(){
    var origimg = $(this).attr('src');
    var altimg = $(this).attr('data-alt-img');
    $(this).attr('src', altimg);
    $(this).attr('data-alt-img', origimg);

  }
);


  $('.images img').click(function(){
    $(this).slideUp('slow');

  });
  $('.images button').click(function(){
    $('.images img').show();
  })

})
