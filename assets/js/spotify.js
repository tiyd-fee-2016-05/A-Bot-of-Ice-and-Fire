console.log("Spotify ready.");

$('.talktoBot').on('submit', function (e) {
  e.preventDefault()

  var commandtext = $('input[class="command"]').val();
    console.log("The user submitted" + commandtext)
  // console.log(commandtext);
  var commands = [];
      commands.push(commandtext)

console.log("You typed " + commands[0])

if (commandtext === "@songoficeandfire") {
  console.log("Let's play a song.")

  $(".tyrionEntry").append('<li class="response">' + "Music is dope."+ '</li>')
}

console.log ("I am searching " + commands+ " on Spotify.")
$.ajax({
      dataType: 'json',
      url: "https://api.spotify.com/v1/users/gameofthrones",
      method: "GET",

    }).done(function(json) {

            var imageURL = "http://i.imgur.com/xQHMk98.jpg"
        $(".tyrionEntry").append(
                                        '<li class="response">' + "<img class ='image' src='" + imageURL + "'/>" +

                                        "</li>"


      );

      console.log(json);
    });








});



// $(function(){
//   'use strict';
//   var search
//   $(".submit").click(function(e){
//     e.preventDefault();
//     console.log("Success");
//     $(".thisclass").html("");
//     $(".list-group-item-text").html("");
//
//     $.ajax({
//       dataType: 'json',
//       url: "https://api.spotify.com/v1/search?q=" + $('input[name="search"]').val() + "&type=track&limit=10",
//       method: "GET",
//
//     }).done(function(json) {
//       for (var x = 0; x< 10; x++)
//         $(".lineinhtml").append(
//                             '<p class="list-group-item-text">' + '<span class="trackName">' + json.tracks.items[x].name + '</span>' + " by " + json.tracks.items[x].artists[0].name + '</br>'+ '</p>'
//
//         );
//
//       console.log(json);
//     });
//
//     $.ajax({
//       dataType: 'json',
//       url: "http://api.giphy.com/v1/gifs/search?q=" + $('input[name="search"]').val() + "&api_key=dc6zaTOxFJmzC",
//       method: "GET",
//     }).done(function(json) {
//       // for (var x = 0; x< 10; x++)
//         $(".lineinhtml").append(
//                             //'<li>' + json.data[0].images.downsized.url + '</li>'
//                             "<img src='" + json.data[0].images.fixed_height.url + "'/>"
//         );
//
//       console.log(json);
//     });
//   });
// })
