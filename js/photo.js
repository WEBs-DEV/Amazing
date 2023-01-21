//    aos animation scroll initializing for on load scrolling
AOS.init({
  offset: 120
});

/* swiper js functioning */

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* photo comparison section functioning */


function drag1() {
  var x = document.querySelector('#slide1');
  document.querySelector("#width1").style.width = x.value + "%";
  document.querySelector(".divider1").style.left = x.value + "%";
}

function drag2() {
  var x = document.querySelector('#slide2');
  document.querySelector("#width2").style.width = x.value + "%";
  document.querySelector(".divider2").style.left = x.value + "%";
}

function drag3() {
  var x = document.querySelector('#slide3');
  document.querySelector("#width3").style.width = x.value + "%";
  document.querySelector(".divider3").style.left = x.value + "%";
}

function drag4() {
  var x = document.querySelector('#slide4');
  document.querySelector("#width4").style.width = x.value + "%";
  document.querySelector(".divider4").style.left = x.value + "%";
}

function drag5() {
  var x = document.querySelector('#slide5');
  document.querySelector("#width5").style.width = x.value + "%";
  document.querySelector(".divider5").style.left = x.value + "%";
}

function drag6() {
  var x = document.querySelector('#slide6');
  document.querySelector("#width6").style.width = x.value + "%";
  document.querySelector(".divider6").style.left = x.value + "%";

}

function drag7() {
  var x = document.querySelector('#slide7');
  document.querySelector("#width7").style.width = x.value + "%";
  document.querySelector(".divider7").style.left = x.value + "%";

}
function drag8() {
  var x = document.querySelector('#slide8');
  document.querySelector("#width8").style.width = x.value + "%";
  document.querySelector(".divider8").style.left = x.value + "%";

}
function drag9() {
  var x = document.querySelector('#slide9');
  document.querySelector("#width9").style.width = x.value + "%";
  document.querySelector(".divider9").style.left = x.value + "%";

}
function drag10() {
  var x = document.querySelector('#slide10');
  document.querySelector("#width10").style.width = x.value + "%";
  document.querySelector(".divider10").style.left = x.value + "%";

}

function drag11() {
  var x = document.querySelector('#slide11');
  document.querySelector("#width11").style.width = x.value + "%";
  document.querySelector(".divider11").style.left = x.value + "%";

}

function drag12() {
  var x = document.querySelector('#slide12');
  document.querySelector("#width12").style.width = x.value + "%";
  document.querySelector(".divider12").style.left = x.value + "%";

}
