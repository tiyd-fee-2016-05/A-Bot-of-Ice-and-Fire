//Hodor Command
console.log("Hodor ready.");

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


if (commandtext == "@hodor") {
  console.log("Hold the door.")


$(".commandList").append('<li class="userEntry">' + '<img class="userIcon" src= "user-icon.png"><div class=userText>' + commandtext + '</li>')

 $(".commandList").append('<li class="tyrionResponse">' + ' <img class="hodorIcon" src= "hodor-pic.png">' + '<div class=tyrionText>' +
  "Hodor Hodor, Hodor.")

};
});
});
