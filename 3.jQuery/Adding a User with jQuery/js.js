$('document').ready(function(){
  $('form').submit(function(){
    //submit the contents of the form fields
    var firstName = $('input.firstName').val();
    var lastName = $('input.lastName').val();
    var email = $('input.email').val();
    var contact = $('input.phone').val();

    // alert(firstName + lastName + email + contact);

    $('tbody').append('<tr class="tborder"><td>' + firstName + '</td><td>' + lastName + '</td><td>' + email + '</td><td>' + contact + '</td></tr>');
    return false;
  });

})
