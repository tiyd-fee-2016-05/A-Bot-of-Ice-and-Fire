console.log("Background ready.");

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()
  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);
  var commands = [];
      commands.push(commandtext)

console.log("You typed " + commands[0])

if (commandtext == "@background") {
  $(".tyrionEntry").append('<li class="response">' + "What color would you like?"+ '</li>')
              };


var list = $(".commandList")

$(".chatWindowentry").append('<li class="userCommands">' + commandtext + '</li>')
});



// $(".tyrionEntry").append('<li class="userCommands">' + commandtext + '</li>')
