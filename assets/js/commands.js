

//Help Command
console.log("Help ready.");

//Help Command

//WHEN USER SUBMITS FORM//

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()//KEEPS FROM REFRESHING

  var commandtext = $('input[class="command"]').val();//ASSIGNING VARIABLE TO WHATEVER USER INPUTS

    var helpKeyword = commandtext.slice(6);

    var helpCheck = commandtext.search("@help");

    if (helpCheck > -1){
  console.log("Help has arrived.")

  $(".commandList").append('<li class="userEntry">' + '<img class="userIcon" src= "user-icon.png"><div class=userText>' + commandtext + '</li>')

  $(".commandList").append('<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "tyrion-pic.png">' + '<div class=tyrionText>' +
   "I'm at your service!")

   $(".commandList").append('<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "tyrion-pic.png">' + '<div class=tyrionText>' +
    "@background (change the window's color)")
    $(".commandList").append('<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "tyrion-pic.png">' + '<div class=tyrionText>' +
     "@gif (search the Seven Kingdoms for gifs)")
     $(".commandList").append('<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "tyrion-pic.png">' + '<div class=tyrionText>' +
      "@song (hear the sounds of Westeros)"

};
});
});
