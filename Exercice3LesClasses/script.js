$(document).ready(function() {

$("li").click(function() {
    $("li").removeClass("active");
    $(this).addClass("active");
    // console.log('li');
  });

$('a').click(function(){
    $('a').removeClass('orange');
    $(this).addClass('orange');
    // console.log('a');
 })

})