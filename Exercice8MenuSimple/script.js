$(document).ready(function () {
  $(".dropbtn").click(function () {
    $(".dropdown-content").slideUp();
    $(this).next().slideDown();
  });
});

// function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

// window.onclick = function (event) {
//   if (!event.target.matches(".dropbtn")) {
//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains("show")) {
//         openDropdown.classList.remove("show");
//       }
//     }
//   }
// };
// function myFunction1() {
//   document.getElementById("myDropdown1").classList.toggle("show");
// }

// function myFunction2() {
//   document.getElementById("myDropdown2").classList.toggle("show");
// }

// function myFunction3() {
//   document.getElementById("myDropdown3").classList.toggle("show");
// }

// document.getElementsByClassName("dropbtn").addEventListener("click", myFunction);

// window.addEventListener("load", function () {
//   document.getElementsByClassName("dropbtn").addEventListener("click", myFunction);
// });
