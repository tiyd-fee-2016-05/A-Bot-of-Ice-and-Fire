
//Giphy Ajax Call
$('.talktoBot').on('submit', function (e) {
  e.preventDefault()//KEEPS FROM REFRESHING

var commandtext = $('input[class="command"]').val();//ASSIGNING VARIABLE TO WHATEVER USER INPUTS
  console.log("The user submitted" + commandtext)

  var gifKeyword = commandtext.slice(4);

  console.log(gifKeyword);

  // console.log("Tyrion will find gifs about " + gifKeyword);

if (commandtext == "@gif")
  console.log("Tyrion will find gifs about " + gifKeyword);


$.ajax({
  url: "http://api.giphy.com/v1/gifs/search?q=" + gifKeyword + "&api_key=dc6zaTOxFJmzC",
  dataType:"json",
  method: "GET",
}).done(function(data) {
    console.log("Ajax call to the Giphy API");
    console.log(data.data[0].images.downsized.url);

    // for (var i = 0; i < JSON.length; i++){
      var gifUrl = (data.data[0].images.downsized.url)

    $(".tyrionEntry").append('<li class="response">' + "<img src='" + gifUrl + "'/>" + '</li>');
  });
});
