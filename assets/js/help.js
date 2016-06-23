console.log("Help ready.");

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);

var helpCheck = commandtext.search("@help");
  console.log(helpCheck + ":helpCheck");

if (helpCheck > -1){
console.log("@help is there!")

            $(".commandList").append('<li class="userEntry userText">' + commandtext + '</li>' +
                                  '<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "Tyrion-pic.png">' + '<div class=tyrionText>' +
                                   "I am a man of many talents" + '<br>'+ '@background to change background' + '<br>' + '@gif to search for gifs' + '<br>' + '@song to listen to the music of Westeros' + '<br>' + '@help to call on me again' + '</div>' + '</li>')

};

});
