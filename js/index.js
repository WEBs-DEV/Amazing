
// aos animation scroll initializing for on load scrolling
AOS.init({
  offset: 50
});

function openService() {
  let openMenu = document.getElementById("mega-menu");
  openMenu.style.width = '100%';
}


// swiper slider intializing for testimonial section

var swiper = new Swiper(".myTestimonial", {
  loop: true,
  centerslider:false,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    420: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    720: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1500: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  }
});


// swiper slider intializing for companies
var swiper = new Swiper(".myCompanies", {
  centerslider:false,
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 50,
    },
  },
});



$(document).ready(function () {
  $('#home-gallery').load('photo-gallery.html');
}
)