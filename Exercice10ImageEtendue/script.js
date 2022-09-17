// $(document).ready(function () {
//   $(".containerX li").mouseenter(function () {
//     $(this).children("li").hide();
//   });
//   $(".containerX li").mouseleave(function () {
//     $(this).children("p").show();
//   });
// });

// $(document).ready(function () {
//   $(this)
//     .children("p")
//     .mousemove(function () {
//       $(this).children("p").slideToggle();
//     });
// });

$(document).ready(function () {
  $(".containerX li").hover(
    function () {
      $(this).stop();
      $(this).children("p").stop();
      $(this).animate({ width: "400px" }, 1000, "linear");
      $(this).children("p").animate({ bottom: "10px" }, 1000, "linear");
    },
    function () {
      $(this).stop();
      $(this).children("p").stop();
      $(this).animate({ width: "200px" }, 1000, "linear");
      $(this).children("p").animate({ bottom: "-25px" }, 1000, "linear");
    }
  );
});

// $(document).ready(function () {
//   $(".containerX li").hover(
//     function () {
//       $(this).animate({ width: "400px" }, 1000, "linear");
//       $(this).children("p").animate({ bottom: "10px" }, 1000, "linear");
//     },
//     function () {
//       $(this).stop();
//       $(this).children("p").stop();
//       $(this).animate({ width: "200px" }, 1000, "linear");
//       $(this).children("p").animate({ bottom: "-25px" }, 1000, "linear");
//     }
//   );
// });
