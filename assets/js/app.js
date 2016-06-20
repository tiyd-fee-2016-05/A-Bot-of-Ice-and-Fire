console.log("Ready to go!");

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);
  var commands = [];
      commands.push(commandtext)

console.log("You typed " + commands[0])

if (commandtext == "@help") {
  console.log("Tyrion can help.")

  $(".tyrionEntry").append('<li class="response">' + commandtext + '</li>')
  });

};

var list = $(".commandList")

$(".chatWindowentry").append('<li class="userCommands">' + commandtext + '</li>')
});

var commandtext = $('input[class="command"]').val();



// $(".tyrionEntry").append('<li class="userCommands">' + commandtext + '</li>')
