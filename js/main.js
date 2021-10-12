AOS.init();

//hamburger menu toggle
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

//typedjs text animation
var typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  loop: false,
  typeSpeed: 30,
  backSpeed: 50,
});

//Cursor ref'ed floating section
const bg = document.querySelector("#showcase-content");
const elem = document.querySelector("#glass-container");
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

bg.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX / windowWidth;
  const mouseY = e.clientY / windowHeight;

  elem.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});

//swiper configs
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
  initialSlide: 6,
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

//modal box configs
$("#modal1-open").click(function () {
  $(".abs-modal1").attr("hidden", false);
});
$("#modal1-close").click(function () {
  $(".abs-modal1").attr("hidden", true);
});
$("#modal1-close-in").click(function () {
  $(".abs-modal1").attr("hidden", true);
});
$("#modal2-open").click(function () {
  $(".abs-modal2").attr("hidden", false);
});
$("#modal2-close").click(function () {
  $(".abs-modal2").attr("hidden", true);
});
$("#modal2-close-in").click(function () {
  $(".abs-modal2").attr("hidden", true);
});
$(document).keyup(function(e) {
  if (e.key === "Escape") {
    $(".abs-modal1").attr("hidden", true);
    $(".abs-modal2").attr("hidden", true);
 }
});

//countdown timer
var countDownDate = new Date("Oct 18, 2021 23:59:59").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("days").innerHTML = "00";
    document.getElementById("hours").innerHTML = "00";
    document.getElementById("minutes").innerHTML = "00";
    document.getElementById("seconds").innerHTML = "00";
  }
}, 1000);
