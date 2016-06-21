console.log("Ready to go!");


//WHEN USER SUBMITS FORM//

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()//KEEPS FROM REFRESHING

  var commandtext = $('input[class="command"]').val();//ASSIGNING VARIABLE TO WHATEVER USER INPUTS
    console.log("The user submitted" + commandtext)

  var commands = []; //OPEN ARRAY
      commands.push(commandtext)//PUT THE INPUT CONTENT INTO THIS ARRAY

console.log("You typed " + commands[0])//TELLS US WHAT FIRST <LI> IS BEING READ

if (commandtext == "@help") { //COMMAND 1
  console.log("Tyrion can help.")

  $(".tyrionEntry").append('<li class="response">' + "How can I help?"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@background (change the window's color)"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@gif (search the Seven Kingdoms for gifs)"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@a-song-of-ice-and-fire (hear what Westeros is listening to) "+ '</li>')

}

else if (commandtext == "@gif") { //COMMAND 2
  console.log("Tyrion will find gifs.")

// $ajax({
//   url: URL WITH SEARCH CRITERIA HERE
//   dataType:"JSON",
//   method: "GET",
//   })
//   done.(function(data){
//     console.log("Ajax call to the Giphy API");
//     console.log(data);
//
//     for (var i = 0; i < data.length; i++){
//       var gifUrl = (data[i].url)
//
//     $(".tyrionEntry").append('<li class="response">' + gifUrl + '</li>')
//     }
//   }

};


var list = $(".commandList")

$(".chatWindowentry").append('<li class="userCommands">' + commandtext + '</li>')
});

var commandtext = $('input[class="command"]').val();






// $(".tyrionEntry").append('<li class="userCommands">' + commandtext + '</li>')
