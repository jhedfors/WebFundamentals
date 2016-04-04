$('document').ready(function(){
  $('.selectArena button').hover(function(){
    var bg = $(this).attr('data-background');
    $('.main').css('background-image', 'url(' + bg + ')');
  }, function(){
  });
  $('.selectArena button').click(function(){
    var bg = $(this).attr('data-background');
    $('.main').css('background-image', 'url(' + bg + ')');
    $('.selectArena').hide();
    $('.selectPlayer').show();
  });
  $('.selectPlayer1').change(function(){
    var ninja = $('.selectPlayer1 option:selected').val();
    // alert(ninja);
    $('.player1 img').attr('src', 'url(' + ninja + ')');
  });
})
