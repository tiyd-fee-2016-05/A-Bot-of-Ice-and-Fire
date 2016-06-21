console.log("Background ready.");


$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)

var bgKeyword = commandtext.slice(11);

console.log("I am searching for " + bgKeyword);



var backgroundCheck = commandtext.search("@background");
  console.log(backgroundCheck);

if (backgroundCheck > -1){
console.log("@background is there!");
  $("body").css("background-color" , bgKeyword);
};








});
