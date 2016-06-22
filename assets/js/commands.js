

//Help Command
console.log("Help ready.");

//Help Command

//WHEN USER SUBMITS FORM//

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()//KEEPS FROM REFRESHING

  var commandtext = $('input[class="command"]').val();//ASSIGNING VARIABLE TO WHATEVER USER INPUTS
    console.log("The user submitted" + commandtext)

  var commands = []; //OPEN ARRAY
      commands.push(commandtext)//PUT THE INPUT CONTENT INTO THIS ARRAY

console.log("You typed " + commands[0])//TELLS US WHAT FIRST <LI> IS BEING READ

console.log("Help ready.");

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

  $(".tyrionEntry").append('<li class="response">' + "How can I help?"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@background (change the window's color)"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@gif (search the Seven Kingdoms for gifs)"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@a-song-of-ice-and-fire (hear what Westeros is listening to) "+ '</li>')

};
});
});
