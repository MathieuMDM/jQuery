$(document).ready(function () {
  animationNuage();
  ville();
  animationAvion();
  animationAvion2();
});

$(".rectangle").css({
  "background-color": "#b6afaf",
  height: "300px",
  width: "1000px",
  "margin-left": "250px",
});

function animationAvion() {
  $("#avion")
    .css({
      position: "relative",
    })
    // .delay(2000)
    .animate(
      {
        left: "1450px",
      },
      10000,
      "linear",
      function () {
        $("#avion").css({
          left: "-200px",
        });
      }
    );
  $(this).delay(2000);
  setTimeout(animationAvion, 6000);
}

function animationAvion2() {
  $("#avion2")
    .css({
      position: "relative",
    })
    // .delay(1800)
    .animate(
      {
        left: "-1350px",
        top: "180px",
      },
      4000,
      "linear",
      function () {
        $("#avion2").css({
          left: "1350px",
          top: "-180px",
        });
      }
    );
  $(this).delay(1600);
  setTimeout(animationAvion2, 5000);
}

function ville() {
  $("#ville").animate(
    {
      backgroundPosition: "-=2000px",
    },
    40000,
    "linear",
    ville
  );
}

$("#nuage")
  .css({
    position: "relative",
  })
  // .delay(1800)
  .animate(
    {
      //   right: "1450",
      "background-position": "-=2000px",
    },
    8000,
    "linear"
    // linear robi ze animacja caly czas idzie w swoim tempie jego przeciwienstwo to swing ktory jest domyslny, i w którym animacja caly czas jest w jednym tempie ...
  );

function animationNuage() {
  $("#nuage").animate(
    {
      "background-position": "-=20%",
    },
    800,
    "linear"
  );
  setTimeout(animationNuage, 0);
}

// function animationVille() {
//   $("#ville").animate(
//     {
//       "background-position": "-=20%",
//     },
//     8000,
//     "linear"
//   );
//   setTimeout(animationVille, 0);
// }
