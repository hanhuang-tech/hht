// form validation
var frmvalidator = new frmvalidator("contactform");
frmvalidator.addValidation("name", "req", "Please provide your name");
frmvalidator.addValidation("email", "req", "Please provide your email");
frmvalidator.addValidation("email", "email",
  "Please enter a valid email address");

// habbit click
const logoWrap = document.querySelector("div.logowrap");
const logo = document.querySelector("div.logo");
const habbitImg = document.querySelector("div.habbit-img");
const habbitA = document.querySelector("img.habbit-a");
const habbitB = document.querySelector("img.habbit-b");
const bannerImg = document.querySelector("img.banner");
const habbitCry = new Audio("../habbit-cry.mp3");

habbitImg.addEventListener("click", function () {
  habbitCry.play();

  habbitA.classList.remove("animate");
  void habbitA.offsetWidth;
  habbitA.classList.add("animate");

  habbitB.classList.remove("animate");
  void habbitB.offsetWidth;
  habbitB.classList.add("animate");

  bannerImg.classList.remove("animate");
  void bannerImg.offsetWidth;
  bannerImg.classList.add("animate");
}, false);

// habbit change
window.onmousemove = function (e) {
  habbitChange(e);
}

function habbitChange(e) {
  // clientX property returns the horizontal coordinate of the current window
  let x = e.clientX;
  let w = Math.floor(document.documentElement.clientWidth / 2);
  if (x > w) { habbitB.style.opacity = "1"; }
  else { habbitB.style.opacity = "0"; }
}

window.onscroll = function () {
  logoFixed();
}

// change of position on scroll
function logoFixed() {
  if (Math.abs(document.documentElement.scrollTop) > 1) {
    logoWrap.style.backgroundColor = "transparent";
    logo.style.flexDirection = "row";
    logo.style.position = "fixed";
    logo.style.padding = "5px";
    logo.style.margin = "5px";
    logo.style.borderRadius = "0px 0px 30px 0px";
    logo.style.boxShadow = "var(--bs4)";
    logo.style.transitionDuration = "1s";
    if (window.matchMedia("(min-width: 64em)").matches) { bannerImg.style.padding = "0px"; }
    else { bannerImg.style.paddingTop = "5px"; }
  } else {
    logo.style.position = "fixed";
    logo.style.flexDirection = "column";
    logo.style.padding = "0";
    logo.style.margin = "0";
    logo.style.backgroundColor = "rgba(100, 100, 100, 0.5)";
    logo.style.borderRadius = "0 0 20px 0";
    logo.style.boxShadow = "var(--bs)";
    logo.style.transitionDuration = "1s";
    bannerImg.style.paddingTop = "0px";
  }
}

