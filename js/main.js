// Open & Close Navigation
const menuToggle = document.querySelector(".header .menu-toggle");
const headerNav = document.querySelector(".header .header-nav");
const headerNavLinks = document.querySelectorAll(
  ".header .header-nav .links a"
);

const closeNav = document.getElementById("closeNav");
menuToggle.addEventListener("click", () => {
  headerNav.classList.add("active");
});

closeNav.addEventListener("click", () => {
  headerNav.classList.remove("active");
});

headerNavLinks.forEach((link) =>
  link.addEventListener("click", () => {
    headerNav.classList.remove("active");
  })
);

// Animate Stats on scroll
let statsSection = document.querySelector(".about");
let numbers = document.querySelectorAll(".about .stats .number");
let interval = 3000;
let numbersAnimated = false;

function increaseCount(number) {
  let startVal = 0;
  let endVal = number.dataset.count;
  let duration = Math.floor(endVal / interval);
  let counter = setInterval(() => {
    startVal++;
    number.textContent = startVal;
    if (startVal == endVal) {
      clearInterval(counter);
    }
  }, duration);
}

const scrollToTopButton = document.getElementById("scrollToTop");

window.onscroll = () => {
  if (window.scrollY >= statsSection.offsetTop) {
    if (!numbersAnimated) {
      numbers.forEach((number) => increaseCount(number));
      numbersAnimated = true;
    }
  }

  if (window.scrollY >= 600) {
    scrollToTopButton.classList.add("active");
  } else {
    scrollToTopButton.classList.remove("active");
  }
};

function scrollToTop() {
  window.scrollTo(0, document.offsetTop);
}

let sections = document.querySelectorAll("section");
