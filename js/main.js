$(function() {
});

  $('button.signin').click(function(){
    $('div.modal').fadeIn();
    });

  $('button.close').click(function(){
    $('div.modal').fadeOut();
  });

  $('.submit').on('click', function(){
    $("[name = 'user']").addClass('error');
    $("[name = 'pass']").addClass('error');
  });


    //





//When the user presses the .submit button
// add an .error class to both input elements




// When the user presses the .close button, fade out the modal window
