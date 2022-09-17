$(document).ready(function () {
  var min = 0;
  var max = 226;
  var speed = 35;
  var current = 0;
  ciel();
  setKeyDown(min, max, speed, current);
  rocket();
  setInterval(hit, 20);
});

function ciel() {
  $("#ciel").animate(
    {
      "background-position": "-=2000px",
    },
    8000,
    "linear",
    ciel
  );
}

function movePlane(height) {
  $("#plane")
    .stop()
    .animate(
      {
        top: height + "px",
      },
      100,
      "swing"
    );
}

function setKeyDown(min, max, speed, current) {
  $(document).keydown(function (e) {
    switch (e.which) {
      // case 37:
      //   $("#plane").stop().animate({
      //     left: "-=100",
      //   }); //left arrow key
      //   break;
      case 38:
        current = calHeight(current, max, min, true, speed);
        movePlane(current); //up arrow key
        // current na poczatku ma wartosc zero ale dzieki calHeight jest obliczana wartosc speed (35)  oraz to ze current nie moze byc wiekszy niz max ani mniejszy niz min, dlatego tez nowa wartosc current jest przekazywana do movePlane()
        break;
      // case 39:
      //   $("#plane").stop().animate({
      //     left: "+=100",
      //   }); //right arrow key
      //   break;
      case 40:
        current = calHeight(current, max, min, false, speed);
        movePlane(current);
        //bottom arrow key
        break;
    }
  });
}

function rocket() {
  $("#rocket")
    .css({
      position: "relative",
      marginTop: marginTopX(5, 256) + "px",
    })
    // .delay(1800)
    .animate(
      {
        left: "-1050px",
      },
      3000,
      "linear",
      function () {
        $("#rocket").css({
          left: "1050px",
        });
        $("#number").data("tuche", false);
        setTimeout(rocket, 0);
      }
    );
  // $(this).delay(1600); on jest po to zeby go dodac miedzy animate a css ( jednym a drugim wywołaniem) i to jest opóźnienie miedzy jednym a drugim tak jak jest dodany wyzej.
}

function marginTopX(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function calHeight(current, max, min, up, speed) {
  current += up ? -speed : speed;
  current = current > max ? max : current;
  current = current < min ? min : current;
  return current;
}

// plane wymiary 150x108 rakieta150x44

function hit() {
  // var plane2x,
  //   plane2y,
  //   rocket2x,
  //   rocket2y,
  //   plane2Width,
  //   plane2Height,
  //   rocket2Width,
  //   rocket2Height;
  var plane2x = parseInt($("#plane").css("left"));
  var plane2y = parseInt($("#plane").css("top"));
  var plane2Width = 150;
  var plane2Height = 108;

  var rocket2x = parseInt($("#rocket").css("left"));
  var rocket2y = parseInt($("#rocket").css("margin-top"));
  var rocket2Width = 150;
  var rocket2Height = 44;
  var tuche = $("#number").data("tuche");
  if (
    plane2x < rocket2x + rocket2Width &&
    plane2x + plane2Width > rocket2x &&
    plane2y < rocket2y + rocket2Height &&
    plane2Height + plane2y > rocket2y &&
    !tuche
  ) {
    console.log(tuche);
    var bums = parseInt($("#number").text());
    console.log(bums);
    bums++;
    $("#number").text(bums);
    $("#bum")[0].play();
    test = 0;
    $("#number").data("tuche", true);
  }
}

//   if (
//     plane2.x < rocket2.x + rocket2.width &&
//     plane2.x + plane2.width > rocket2.x &&
//     plane2.y < rocket2.y + rocket2.height &&
//     plane2.height + plane2.y > rocket2.y
//   ) {
//        no hit
//   }
// }

// function hit() {
//   var plane2 =  $('#plane') { x: 5, y: 5, width: 150, height: 108 };
//   var rocket2 = $('#rocket') { x: 5, y: 5, width: 150, height: 44 };

//   if (
//     plane2.x < rocket2.x + rocket2.width &&
//     plane2.x + plane2.width > rocket2.x &&
//     plane2.y < rocket2.y + rocket2.height &&
//     plane2.height + plane2.y > rocket2.y
//   ) {
//        no hit
//   }
// }
