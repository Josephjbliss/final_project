$("#status").change(function() {
  var status = $("#status").val();

  if (status.substr(0, 6) == "/giphy") {
    var myQuery = status.substr(7);
    var jsonURL = "http://api.giphy.com/v1/gifs/search?q=" + myQuery + "&api_key=dc6zaTOxFJmzC";

    $.getJSON(jsonURL, function(response) {

      var myGIF = response.data[0].images.fixed_height_small.url;

      $("<div/>")
        .addClass("message")
        .append($("<img/>").attr("src", myGIF))
        .appendTo(".messages");
    });
  } else {
    $("<div/>")
      .addClass("message")
      .append($("<img/>").attr("src", "img/avatar.png"))
      .append($("<p/>").html(status))
      .appendTo(".messages");
  }
});