$(document).ready(function(){
// $('section').css({'background-color': 'black'})

$('#divebar').hover(function(){
  storedtext = $(this).html();
  $(this).html("<a href = 'http://www.github.com' class='nohover'>" + "This is one of the first Javascript projects I worked on while starting off in the language. It's meant to be a novice game that calls and changes varies properties between different objects.Perhaps down the line, I can add things such as an interface and a command line where players can input their commands." + "</a href>")},

  function(){$(this).html(storedtext);
})

// $('.tablebuttons').on('mouseleave', function(){
//   $(this).css({'background-color' :'lightblue'})
// })
$('#center').css('cursor', 'pointer');
$('#center').click(function(){
$('#background').css('background-image', 'url(../images/static.gif)');
alert("YOU BROKE THE PAGE!");

});

})

