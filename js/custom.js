// Loader design
window.onload = function () {
  setTimeout(function () {
    var loader = document.getElementsByClassName("loader")[0];
    loader.className = "loader fadeout";
    setTimeout(function () {
      loader.style.display = "none";
    }, 1000);
  }, 1000);
};

// Home Page Crousal design
const options1 = {
  slidesPerView: 1,
  spacing: 10,
  loop: true,
  transitionSpeed: 1500,
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 8,
    },
  },
};

// INIT CAROUSEL
const carousel1 = new CgCarousel("#js-carousel-1", options1, {});

// Navigation
const next1 = document.getElementById("js-carousel__next-1");
next1.addEventListener("click", () => carousel1.next());

const prev1 = document.getElementById("js-carousel__prev-1");
prev1.addEventListener("click", () => carousel1.prev());
