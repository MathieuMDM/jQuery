var textWrapper = document.querySelector('.text');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.text .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '.text',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 4000
  });

$('#rose').css({
    position: 'relative',
})
.delay(1800)
.animate({
    left: '250px',
    top: '-255px',
}, 1500);

$('#bleu').css({
    position: 'relative',
})
.delay(2900)
.animate({
    left: '110px',
    top: '-254px',
}, 900);

$('#vert').css({
    position: 'relative',
})
.delay(4000)
.animate({
    left: -520,
}, 300);

$('#gris').css({
    position: 'relative',
})
.delay(3500)
.animate({
    left: '-360px',
    top: '-128px',
}, 600);
