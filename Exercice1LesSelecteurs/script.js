// $("p").not(".deuxieme").css({
//   "text-decoration": "underline",
//   "text-decoration-color": "orange",
// });

$("p:first").css({
  //   "text-decoration": "underline",
  "border-bottom": "#000 1px solid",
});
$(".lien1").css({
  "background-color": "orange",
  "text-decoration-color": "black",
});

$("#troisieme").css({
  color: "red",
  "border-bottom": "#ca7b21 1px solid",
});

$("div").css({
  color: "#333333",
});

$("#quatrieme").css({
  "font-weight": "bold",
  "border-bottom": "#ca7b21 1px solid",
});
$("#cinquieme").css({
  color: "violet",
  "font-weight": "bold",
  "border-bottom": "#ca7b21 1px solid",
});
$("#liens").css({
  "margin-top": "50px",
  "margin-left": "40px",
  width: "50px",
});

$("a:odd").css({
  display: "block",
  color: "#000",
  "background-color": "grey",
});

$("a:even").css({
  color: "#000",
});

$("td:odd").not("#orangeS").css({
  "background-color": "gray",
});

$("#orangeS").css({
  "background-color": "orange",
});

$("p:last").css({
  "font-weight": "bold",
  "font-size": "22px",
  "border-bottom": "#ca7b21 1px solid",
});
