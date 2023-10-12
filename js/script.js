const swiper = new Swiper(".slider-materials", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

window.addEventListener("scroll", function () {
  scrollY > 0
    ? document.querySelector(".header").classList.add("scroll")
    : document.querySelector(".header").classList.remove("scroll");
});
