console.log("Commands ready.");

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);

var helloCheck = commandtext.search("Hello");


if (helloCheck > -1){


            $(".commandList").append('<li class="userEntry userText">' + commandtext + '</li>' +
                                  '<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "Tyrion-pic.png">' + '<div class=tyrionText>' + '<br>'+ "Hello my friend!" + '</li>')

};

});


$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);

var hiCheck = commandtext.search("Hi");


if (hiCheck > -1){


            $(".commandList").append('<li class="userEntry userText">' + commandtext + '</li>' +
                                  '<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "Tyrion-pic.png">' + '<div class=tyrionText>' + '<br>'+ "Hello traveler!" + '</li>')

};

});

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);

var morningCheck = commandtext.search("Good morning!");


if (morningCheck > -1){


            $(".commandList").append('<li class="userEntry userText">' + commandtext + '</li>' +
                                  '<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "Tyrion-pic.png">' + '<div class=tyrionText>' + '<br>'+ "Good morning!" + '</li>')

};

});

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);

var fatherCheck = commandtext.search("Did you kill your father?");


if (fatherCheck > -1){


            $(".commandList").append('<li class="userEntry userText">' + commandtext + '</li>' +
                                  '<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "Tyrion-pic.png">' + '<div class=tyrionText>' + '<br>'+ "A Lannister always pays his debts." + '</li>')

};

});
