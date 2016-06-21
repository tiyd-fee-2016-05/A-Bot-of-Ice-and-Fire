console.log("Background ready.");


//WHEN USER SUBMITS FORM//

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()G

  var commandtext = $('input[class="command"]').val();//ASSIGNING VARIABLE TO WHATEVER USER INPUTS
    console.log("The user submitted" + commandtext)

  var commands = []; //OPEN ARRAY
      commands.push(commandtext)//PUT THE INPUT CONTENT INTO THIS ARRAY

if (commandtext == "@background") {
  $(".tyrionEntry").append('<li class="response">' + "What color would you like?"+ '</li>')
              };
=======
console.log("You typed " + commands[0])//TELLS US WHAT FIRST <LI> IS BEING READ

};


var list = $(".commandList")

$(".chatWindowentry").append('<li class="userCommands">' + commandtext + '</li>')
});






// $(".tyrionEntry").append('<li class="userCommands">' + commandtext + '</li>')
