const logoWrap = document.querySelector("div.logowrap");
const logo = document.querySelector("div.logo");
const habbitImg = document.querySelector("div.habbit-img");
const habbitA = document.querySelector("img.habbit-a");
const habbitB = document.querySelector("img.habbit-b");
const bannerImg = document.querySelector("img.banner");
const habbitCry = new Audio("../habbit-cry.mp3");

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


