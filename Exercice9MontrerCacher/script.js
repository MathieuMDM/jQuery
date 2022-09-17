$(document).ready(function () {
  $(".dropX").click(function () {
    $(this).next().slideToggle();
    $(this)
      .children("span")
      .text(function (i, oldText) {
        return oldText == "+" ? "-" : "+";
      });
  });
  $("#toggle").click(togglePopUp);
  $(".close").click(togglePopUp);
});

function togglePopUp() {
  if ($("#pop").css("display") == "block") {
    $("#pop").css("display", "none");
    $(".to").removeClass("disabledbutton");
  } else {
    $("#pop").css("display", "block");
    $(".to").addClass("disabledbutton");
  }
}

// function togglePopUp() {
//   if (document.getElementById("pop").style.display == "block") {
//     document.getElementById("pop").style.display = "none";
//   } else {
//     document.getElementById("pop").style.display = "block";
//   }
// }
