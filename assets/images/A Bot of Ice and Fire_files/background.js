console.log("Background ready.");

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()
  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);
  var commands = [];
      commands.push(commandtext)

console.log("You typed " + commands[0])

<<<<<<< HEAD:assets/images/A Bot of Ice and Fire_files/background.js
if (commandtext == "@background") {
  $(".tyrionEntry").append('<li class="response">' + "What color would you like?"+ '</li>')
              };

=======
if (commandtext == "@help") {
  console.log("Tyrion can help.")

  $(".tyrionEntry").append('<li class="response">' + commandtext + '</li>')
  });

};
>>>>>>> master:assets/js/app.js

var list = $(".commandList")

$(".chatWindowentry").append('<li class="userCommands">' + commandtext + '</li>')
});



// $(".tyrionEntry").append('<li class="userCommands">' + commandtext + '</li>')
