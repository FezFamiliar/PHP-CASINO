$(document).ready(function(){


  $('#flip').click(function(){
    $('#msg-coin').html(' ');
    var random_nr = Math.floor(Math.random() * 2);


     $('.coin').addClass('spin');

      setTimeout(function(){


            if(random_nr == 1){

               $('.coin-heads').css('transform','rotateX(180deg)');
               $('.coin-tail').css('transform','rotateX(0deg)');
              $('#msg-coin').html('It\s Tails!');
              $('.coin').removeClass('spin');
            }
            else{

               $('.coin-heads').css('transform','rotateX(0deg)');
               $('.coin-tail').css('transform','rotateX(180deg)');
              $('#msg-coin').html('It\s Heads!');
              $('.coin').removeClass('spin');

            }

      },2500);
  });
});
