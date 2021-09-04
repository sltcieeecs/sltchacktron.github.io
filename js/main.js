AOS.init();
document.querySelectorAll(".dropdown-toggle").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-toggle")) {
      event.target.classList.toggle("toggle-change");
    } else if (
      event.target.parentElement.classList.contains("dropdown-toggle")
    ) {
      event.target.parentElement.classList.toggle("toggle-change");
    }
  });
});
var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: false,
  typeSpeed: 30,
  backSpeed: 50,
});
const bg = document.querySelector("#showcase-content");
const elem = document.querySelector("#glass-container");
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

bg.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  elem.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});
var ads_swiper = new Swiper(".ads-swiper", {
  centeredSlides: true,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 2000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 2,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
  },
});
