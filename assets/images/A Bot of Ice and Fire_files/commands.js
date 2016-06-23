console.log("Commands ready.");

// User input: Good Hello!

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

// User input: Hi

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
// User input: Good morning!!

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
// User input: Did you kill your father?

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
// User input: Good afternoon!
$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);

var afternoonCheck = commandtext.search("Good afternoon!");


if (afternoonCheck > -1){


            $(".commandList").append('<li class="userEntry userText">' + commandtext + '</li>' +
                                  '<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "Tyrion-pic.png">' + '<div class=tyrionText>' + '<br>'+ "A wonderful afternoon for wine!" + '</li>')

};

});

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);

var helloCheck = commandtext.search("Hello!");


if (helloCheck > -1){


            $(".commandList").append('<li class="userEntry userText">' + commandtext + '</li>' +
                                  '<li class="tyrionResponse">' + ' <img class="tyrionIcon" src= "Tyrion-pic.png">' + '<div class=tyrionText>' + '<br>'+ "Hello my friend!" + '</li>')

};

});
