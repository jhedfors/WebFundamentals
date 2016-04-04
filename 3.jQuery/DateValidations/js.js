$('document').ready(function(){
  $(function() {
   $( ".fromdate, .todate" ).datepicker();
  });
  $('input.submit').click(function(){
    $('form span').remove('.error');
    var fromDate = $('input.fromdate').val();
    var toDate = $('input.todate').val();
    var name = $('input.name').val();
    var error = false;
    if(fromDate === ''){
      $('.fromdate').after('<span class="error">Need "From" date</span>');
      error = true;
    };
    if(toDate === ''){
      $('.todate').after('<span class="error">Need "To" date</span>');
      error = true;
    };
    if(name === ''){
      $('.name').after('<span class="error">Need name</span>');
      error = true;
    }
    if(error == false){
      alert('Thanks ' + name + '! Your Cruise leaves on ' + fromDate + ' and returns on ' + toDate + '!');
    }
    return false;
  });
})
