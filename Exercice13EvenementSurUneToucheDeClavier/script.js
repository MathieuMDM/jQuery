$(document).keydown(function (event) {
  // var keycode = event.which;
  var keycode = event.keyCode;
  if (keycode == "77") {
    $("p").slideDown();
  } else if (keycode == "67") {
    $("p").slideUp();
    // tutaj też mozna uzyć hide() do ukrycia tekstu
  }
});

// var keycode = event.key
