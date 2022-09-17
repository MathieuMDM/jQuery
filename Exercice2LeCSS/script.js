$(document).ready(function () {
  $("body").css({
    height: "600px",
    width: "1000px",
  });

  $("#conteneur").css({
    "background-color": "#C6CECE",
  });

  $("h1").css({
    "text-align": "center",
  });

  $("#bandeau").css({
    background: "url(img/montagne.jpg)",
    height: "280px",
    width: "95%",
    "margin-left": "25px",
  });

  $("#bandeau").hover(
    function () {
      $(this).css("background", "url(img/cocotier.jpg)");
    },
    function () {
      $(this).css("background", "url(img/montagne.jpg)");
    }
  );

  $(".flex").css({
    display: "inline-grid",
  });

  $("#gauche").css({
    "text-align": "left",
    width: "70%",
    "margin-left": "25px",
    "line-height": "18px",
  });

  $("p:first").css({
    "font-weight": "bold",
    "font-size": "17px",
  });

  $("p:eq(2)").css({
    "font-style": "italic",
  });

  $("#droite").css({
    "margin-left": "20px",
    "text-align": "left",
  });

  $("h2").css({
    "margin-left": "20px",
    "font-size": "17px",
  });

  $('li:contains("Rien")').css({
    color: "green",
    border: "green 2px solid",
  });

  $("#droite ul:last a:odd").css({
    color: "orange",
  });

  $("#droite ul:last a:even").css({
    color: "blue",
  });
});
