$(document).ready(function () {
  $("input").click(function () {
    var teinte = $(this).attr("id");
    $("body").css({
      background: "url('./img/bois-" + teinte + ".png')",
    });
  });

  $("img").hover(
    function () {
      $(this).attr("src", "./img/ny.jpg");
    },
    function () {
      $(this).attr("src", "./img/sydney.jpg");
    }
  );
});

// $("#clair").click(function () {
//   $("body").on("click", function () {
//     $(this).css("background-image", "url(img/bois-clair.png");
//   });
// });

// $("#noir").click(function () {
//   $("body").on("click", function () {
//     $(this).css("background-image", "url(img/bois-noir.png");
//   });
// });

// $("#imgA").css({
//   background: "url(img/sydney.jpg)",
//   height: "300px",
//   width: "500px",
//   "margin-left": "150px",
// });

// $(document).ready(function () {
//   $("#imgA").hover(
//     function () {
//       $(this).css("background", "url(img/ny.jpg)");
//     },
//     function () {
//       $(this).css("background", "url(img/sydney.jpg)");
//     }
//   );
// });

// $("body").css({
//   "background-image": "url(img/bois-noir.png)",
// });

// $(document).ready(function () {
//   $("body").on(
//     "click",
//     "tr",
//     function () {
//       $(this).css("background", "url(img/cocotier.jpg)");
//     },
//     function () {
//       $(this).css("background", "url(img/montagne.jpg)");
//     }
//   );
// });

// $(document).ready(function () {
//   $("body").on("click", function () {
//     $(this).css("background-image", "url(img/bois-clair.png");
//   });

//   $("#clair").click(function () {
//     $("body").off("click");
//   });
// });

// $(document).ready(function () {
//     $("body").on("click", function () {
//       $(this).css("background-image", "url(img/bois-noir.png");
//     });

//     $("#noir").click(function () {
//       $("body").off("click");
//     });
//   });
