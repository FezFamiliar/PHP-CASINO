$(document).ready(function(){


  $('#roll').click(function(){

      var random_nr = 1 + Math.floor(Math.random() * 6);
      var n = 6;

      switch (random_nr) {
        case 1:for (var i = 0; i < n; i++) {
              if(i == 0 ) $('.dice_'+i).fadeIn();
              else  $('.dice_'+i).fadeOut();
        }
        break;
        case 2:for (var i = 0; i < n; i++) {
              if(i == 1) $('.dice_'+i).fadeIn();
              else $('.dice_'+i).fadeOut();

        }
        break;
        case 3:for (var i = 0; i < n; i++) {
              if(i == 2) $('.dice_'+i).fadeIn();
              else $('.dice_'+i).fadeOut();
        }
        break;
        case 4:for (var i = 0; i < n; i++) {
              if(i == 3) $('.dice_'+i).fadeIn();
              else $('.dice_'+i).fadeOut();
        }
        break;
        case 5:for (var i = 5; i >= 0; i--) {
              if(i == 4) $('.dice_'+i).fadeIn();
              else $('.dice_'+i).fadeOut();
        }
        break;
        case 6:for (var i = 5; i >= 0; i--) {
              if(i == 5)$('.dice_'+i).fadeIn();
              else $('.dice_'+i).fadeOut();
        }
        break;
      }
        $('#msg-roll').html('<b>You rolled: ' + random_nr + '</b>');
  });
});
