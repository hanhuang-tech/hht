const logoWrap = document.querySelector("#logowrap");
const logo = document.querySelector("#logo");
const habbitImg = document.querySelector("#habbit-img");
const habbitA = document.querySelector("#habbit-a");
const habbitB = document.querySelector("#habbit-b");
const lantern = document.querySelector("#lantern");
const redHabbit = document.querySelector("#habbit-red");
const returnMe = document.querySelector("a.four-return");

// habbit change
window.onmousemove = function (e) {
  habbitChange(e);
};

function habbitChange(e) {
  // clientX property returns the horizontal coordinate of the current window
  let x = e.clientX;
  let w = Math.floor(document.documentElement.clientWidth / 2);
  if (x > w) {
    habbitB.style.opacity = "1";
  } else {
    habbitB.style.opacity = "0";
  }
}

redHabbit.style.transitionDuration = "1s";
returnMe.addEventListener("mouseenter", function () {
  redHabbit.style.opacity = "0";
});
returnMe.addEventListener("mouseleave", function () {
  redHabbit.style.opacity = "1";
});
