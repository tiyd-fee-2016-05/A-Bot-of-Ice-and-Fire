console.log("Background ready.");


$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();

var bgKeyword = commandtext.slice(11);




var backgroundCheck = commandtext.search("@background");

if (backgroundCheck > -1){
  $("body").css("background-color" , bgKeyword);

  $(".commandList").append('<li class="userEntry">' + commandtext + '</li>')

  $(".commandList").append('<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "tyrion-pic.png">' + '<div class=tyrionText>' +
   "A fabulous choice!  Not quite my shade though...")
};








});
