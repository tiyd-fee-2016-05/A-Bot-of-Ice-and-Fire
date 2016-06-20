console.log("Ready to go!");

$('.talktoBot').on('submit', function (e) {
  e.preventDefault();
  console.log("You submitted this thing.")
  var commandtext = $('input[class="command"]').val();
  // console.log(commandtext);
  var commands = [];
      commands.push(commandtext)

console.log("You typed " + commands[0]);

var list = $(".commandList")

$(".chatWindowentry").append('<li>' + commandtext + '</li>')


































  });
