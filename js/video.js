$(document).ready(function () {
  $('#header-section').load('header.html');
  $('#footer-section').load('footer.html');
}
)
// aos animation scroll initializing for on load scrolling 
AOS.init({
  offset: 50
});


// swiper js initialization for video editing banner slider
var swiper = new Swiper(".videoEditingBannerSlider", {
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
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
});

// swiper js initialization for video catagories slider
var swiper = new Swiper(".videoCatagoriesSlider", {
  spaceBetween: 10,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  breakpoints: {
    "@1.20": {
      slidesPerView: 1,
    },
    "@1.70": {
      slidesPerView: 2,
    },
    "@2.00": {
      slidesPerView: 3,
    },
  },
});

// swiper js initialization for video editing services slider
{
  var swiper = new Swiper(".videoEditingServiceSlider", {
    spaceBetween:10,
    centeredSlides: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
    breakpoints: {
      "@0.20": {
        slidesPerView: 1,
      },
      "@1.00": {
        slidesPerView: 3,
      },
      "@1.50": {
        slidesPerView: 4,
      },
      "@2.00": {
        slidesPerView: 4,
      },
      "@2.50": {
        slidesPerView: 4,
      },
      "@3.00": {
        slidesPerView: 6,
      },
      "@3.50": {
        slidesPerView: 8,
      },
    },
  });
}

// video editing service toggle functioning
function openWork(workNo) {
  var worktabs = document.getElementsByClassName("work-tabs");
  var works = document.getElementsByClassName("works");
  for (worktablink of worktabs) {
    worktablink.classList.remove("active-work-tab");
  }
  for (work of works) {
    work.classList.remove("active-work");
  }
  event.currentTarget.classList.add("active-work-tab");
  document.getElementById(workNo).classList.add("active-work");
}
