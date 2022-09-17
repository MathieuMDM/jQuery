$(document).ready(function () {
  $("#toggle").click(function () {
    var clicks = $(this).data("clicks");
    if (!clicks) {
      $(".popup").animate(
        {
          rotate: "+=360deg",
          height: "120px",
          width: "120px",
          marginLeft: "200px",
          marginTop: "100px",
          fontSize: "5px",
          opacity: "0.25",
        },
        3000,
        valueX
      );
    } else {
      $(".popup").animate(
        {
          rotate: "+=360deg",
          border: "2px solid",
          fontSize: "15px",
          width: "500px",
          height: "280px",
          marginLeft: "30px",
          marginTop: "10px",
          opacity: "0.99",
        },
        3000,
        valueX
      );
    }
    $(this).data("clicks", !clicks);
  });
});

$(".myClass").click(function () {
  var clicks = $(this).data("clicks");
  if (clicks) {
    // odd clicks
  } else {
    // even clicks
  }
  $(this).data("clicks", !clicks);
});

function valueX() {
  $("#toggle").val(function (i, oldText) {
    return oldText == "Moins d'infos ici"
      ? "Plus d'infos ici"
      : "Moins d'infos ici";
  });
}

// najwazniejsze od Marcina :
// $(document).ready(function(){
//   $("button").click(function(){
//     $("div").animate({
//     deg:'+=360',
//       opacity: .5,
//       height: "50%"
//     }, {
//       step: function( now, fx ) {
//       if(fx.prop=="deg"){
//           $(this).css({ transform: 'rotate(' + now + 'deg)' });
//       }
//       }
//     });
//   });
// });

// animate (
// left: "+=50",
// height: "toggle",
// left: "500px",
// animation: "rotation 2s infinite linear",
// transform: "rotate(360deg)",)

// $(document).ready(function () {
//   $("#toggle").click(function () {
//     $(".popup").addClass("rotate");
//     $(".popup").animate(
//       {
//         left: "500px",
//       },
//       5000,

//       function () {
//         $(this).removeClass("rotate");

//  $("#toggle").text(function (i, oldText) {
//   return oldText == "Moins d'infos ici"
//   ? "Plus d'infos ici"
//   : "Moins d'infos ici";
// });
//       }
//     );
//   });
// });

// $(".toggle").click(function () {
//   DoRotate(30);
//   AnimateRotate(30);
// });

// function AnimateRotate(d) {
//   var elem = $(".popup");

//   $({ deg: 0 }).animate(
//     { deg: d },
//     {
//       duration: 2000,
//       step: function (now) {
//         elem.css({
//           transform: "rotate(" + now + "deg)",
//         });
//       },
//     }
//   );
// }

// $("button").click(function () {
//   $(".popup").animate(
//     { deg: 180 },
//     {
//       duration: 1200,
//       step: function (now) {
//         $(this).css({ transform: "rotate(" + now + "deg)" });
//       },
//     }
//   );
// });
// $('.box').animate(
//   { deg: '+=180' },
//   {
//     duration: 1200,
//     step: function(now) {
//       $(this).css({ transform: 'rotate(' + now + 'deg)' });
//     }
//   }
// );
