$(document).ready(function () {
  $("#wrapCefiiMap").validate({
    rules: {
      nom: {
        required: true,
        minlength: 3,
      },
      prenom: {
        required: true,
        minlength: 3,
      },
      tel: {
        required: true,
        number: true,
        minlength: 10,
        maxlength: 10,
      },
    },
    messages: {
      nom: {
        required: "S'il vous plaît entrez votre nom",
        minlength: "Le nom doit comporter au moins 3 caractères",
      },
      prenom: {
        required: "S'il vous plaît entrez votre prenom",
        minlength: "Le prenom doit comporter au moins 3 caractères",
      },
      tel: {
        required: "Veuillez entrer le numéro de portable",
        number: "Veuillez entrer le numéro",
        minlength: "Veuillez saisir un numéro de portable à 10 chiffres",
        maxlength: "Veuillez saisir un numéro de portable à 10 chiffres",
      },
    },
  });
  $("#valider").click(function () {
    $("#detals").valid();
  });
});
