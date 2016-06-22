
//Giphy Ajax Call
$('.talktoBot').on('submit', function (e) {
  e.preventDefault()//KEEPS FROM REFRESHING

var commandtext = $('input[class="command"]').val();//ASSIGNING VARIABLE TO WHATEVER USER INPUTS
  console.log("The user submitted" + commandtext)

  var gifKeyword = commandtext.slice(4);

  console.log(gifKeyword);

  // console.log("Tyrion will find gifs about " + gifKeyword);

//Had to .search for "@gif" in commandtext input.
var gifCheck = commandtext.search("@gif");
  console.log(gifCheck);
  console.log("Tyrion will find gifs about " + gifKeyword);
//Test .search results by seeing Boolean presence of "@gif"-- AKA, if it were to say "@bif" instead, it will not trigger function with Ajax call. Additional fail-safe for other commands.
if (gifCheck > -1){
console.log("@gif is there!")

//Ajax call for Giphy

$.ajax({
  url: "http://api.giphy.com/v1/gifs/search?q=" + gifKeyword + "&api_key=dc6zaTOxFJmzC",
  dataType:"json",
  method: "GET",
}).done(function(data) {
    console.log("Ajax call to the Giphy API");
    console.log(data.data[0].images.downsized.url); //Telling Giphy API what to console log. Worked slowly piece by to figure out what Giphy's API looked for, level by level.

      var gifUrl = (data.data[0].images.downsized.url)//Telling Giphy API specifically what we are looking for

    $(".tyrionEntry").append('<li class="response">' + "<img src='" + gifUrl + "'/>" + '</li>'); //Appending result of search to chat window
  });
};
});
