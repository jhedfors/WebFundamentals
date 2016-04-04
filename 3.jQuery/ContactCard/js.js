$('document').ready(function(){
  $('button').click(function(){
    var first = $('input.first').val();
    var last = $('input.last').val();
    var description = $('textarea').val();
    // alert (first + last + description);
    // $('div.results').append("
    //   <div class='card'><h2>first + ' ' + last</h2><p>Click for description!</p></div>");
      $('div.results').append("<div class = 'card'><div class='front'><h2>" + first + " " + last + "</h2><p>Click for description!</p></div><div class='back'><p>" + description +"</p></div></div>");
      return false;
  });
  $(document).on('click','div.front',function(){
    $(this).siblings('div.back').show();
    $(this).hide();

  });
  $(document).on('click','div.back',function(){
    $(this).siblings('div.front').show();
    $(this).hide();

  });
})
