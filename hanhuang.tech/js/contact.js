// form validation
var frmvalidator = new frmvalidator("contactform");
frmvalidator.addValidation("name", "req", "Please provide your name");
frmvalidator.addValidation("email", "req", "Please provide your email");
frmvalidator.addValidation(
  "email",
  "email",
  "Please enter a valid email address"
);

// habbit click
const logoWrap = document.querySelector("#logowrap");
const logo = document.querySelector("#logo");
const habbitImg = document.querySelector("#habbit-img");
const habbitA = document.querySelector("#habbit-a");
const habbitB = document.querySelector("#habbit-b");
const lantern = document.querySelector("#lantern");

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

window.onscroll = function () {
  logoFixed();
};
