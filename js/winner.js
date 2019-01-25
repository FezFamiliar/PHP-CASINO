$(document).ready(function(){

  $('#start-winner').click(function(){

    var content = $('#list-names').val().split(/[\n,]/);
  //  console.log(content.length);
    // for (var i = 0; i < content.length; i++) {
    //   console.log(content[i]);
    // }
    if(content != ''){
    var result =  Math.floor(Math.random() * content.length);
    setTimeout(function(){
    
        $('#msg-winner').html('The winner is: <u>'+content[result]+'</u>');

    },2000);
}

  });
});
