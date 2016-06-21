//Help Command 

if (commandtext == "@help") {
  console.log("Tyrion can help.")

  $(".tyrionEntry").append('<li class="response">' + "How can I help?"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@background (change the window's color)"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@gif (search the Seven Kingdoms for gifs)"+ '</li>')
  $(".tyrionEntry").append('<li class="response">' + "@a-song-of-ice-and-fire (hear what Westeros is listening to) "+ '</li>')
