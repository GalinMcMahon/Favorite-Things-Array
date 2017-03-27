$(function(){
  // $(document).keypress(function (e) {
  //   if (e.which == 13 || event.keyCode == 13) {
  //     var favoriteThings = [];
  //     // var yourFavs = $("#yourFavs").val();
  //     favoriteThings.push($("#yourFavs").val());
  //     console.log(favoriteThings);
  //   }
  // });

  $("#submit").click(function() {
    // var yourFavs = $("#yourFavs").val();
    var favoriteThings = [];

    favoriteThings.push($("#yourFavs").val());
    favoriteThings.push($("#yourFavs1").val());
    favoriteThings.push($("#yourFavs2").val());

    for (i = 0; i < favoriteThings.length; i++) {
      $("#result-list").append("<li>" + favoriteThings[i] + "</li>");
    }

    console.log(favoriteThings);
    event.preventDefault();
  });

});
