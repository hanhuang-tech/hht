const logoWrap = document.querySelector("div.logowrap");
const logo = document.querySelector("div.logo");
const habbitImg = document.querySelector("div.habbit-img");
const habbitA = document.querySelector("img.habbit-a");
const habbitB = document.querySelector("img.habbit-b");
const bannerImg = document.querySelector("img.banner");
const lantern = document.querySelector("#lantern");
const habbitCry = new Audio("../habbit-cry.mp3");
const redHabbit = document.querySelector("div.four-flex img.red");
const returnMe = document.querySelector("a.four-return");

// habbit click
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

  lantern.classList.remove("animate");
  void lantern.offsetWidth;
  lantern.classList.add("animate");
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

redHabbit.style.transitionDuration = "1s";
returnMe.addEventListener("mouseenter", function () { redHabbit.style.opacity = "0"; });
returnMe.addEventListener("mouseleave", function () { redHabbit.style.opacity = "1"; });
