var signup_form = $('.newssignup'),
    messages = {};

$('.newssignup__inputgroup__input').on('change', function() {
  if ( $(this).val() != "" ) {
    $(this).addClass('set');
  } else {
    $(this).removeClass('set');
  }
});

$('.validate--email').on('change', function() {
  if (validateEmail($(this).val()) || !$(this).val()) {
    delete messages.email;
  } else {
    messages.email = 'Please enter a correct email address';
  }
  validateForm();
});

$('.validate--fullname').on('change', function() {
  if (!$(this).val()) {
    messages.fullname = 'Please enter your full name.';
  } else {
    delete messages.fullname
  }
  validateForm();
});

$('.newssignup__submit').on('submit', function(e) {
  e.preventDefault();

  var valid = true;

  if (!$('.validate--fullname').val()) {
    valid = false;
    messages.fullname = 'Please enter your full name.';
  } else {
    delete messages.fullname;
  }

  if (!validateEmail($('.validate--email').val())) {
    valid = false;
    messages.email = 'Please enter a correct email address';
  } else {
    delete messages.email;
  }


  if (valid == true) {
    $(this).submit();
  } else {
    validateForm();
  }

});


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateForm() {

  if (!messages) { return; }

  var message_container = $('.newsignup__alerts');

  message_container.html("");

  for (var key in messages) {
    $('<p></p>', {
      'text': messages[key]
    }).appendTo(message_container);
  }

  message_container.slideDown('fast');

}
