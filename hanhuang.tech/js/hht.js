document.addEventListener("DOMContentLoaded", revealhht);

const splash = document.querySelector("#splash");
const splashDiv = document.querySelector("#splash div");
const splashItalicized = document.querySelector("#splash i");
function revealhht() {
  splash.style.opacity = "0";
  splash.style.visibility = "hidden";
  splashDiv.style.transform = "scale(0%)";
}

const logoWrap = document.querySelector("#logowrap");
const logo = document.querySelector("#logo");
const habbitImg = document.querySelector("#habbit-img");
const habbitA = document.querySelector("#habbit-a");
const habbitB = document.querySelector("#habbit-b");
const lantern = document.querySelector("#lantern");

// habbit change
window.onmousemove = function (e) {
  if (window.matchMedia("(min-width: 64em)").matches) {
    habbitChangeDesktop(e);
  } else {
    habbitChangeMobile(e);
  }
};

function habbitChangeMobile(e) {
  // clientX property returns the horizontal coordinate of the current window
  let x = e.clientX;
  let w = Math.floor(document.documentElement.clientWidth / 2);
  if (x > w) {
    habbitB.style.opacity = "1";
  } else {
    habbitB.style.opacity = "0";
  }
}

function habbitChangeDesktop(e) {
  // clientX property returns the horizontal coordinate of the current window
  let x = e.clientX;
  let w = Math.floor(document.documentElement.clientWidth / 2);
  if (x > w) {
    habbitB.style.opacity = "1";
  } else {
    habbitB.style.opacity = "0";
  }
}

// on scroll
// fixed pos logo if min-width: 64em
window.onscroll = function () {
  if (window.matchMedia("(min-width: 64em)").matches) {
    scrollRGB();
    retractBurgerOnScroll();
    projectHabbitAnimate();
    projectTilesMoveDesktop();
    scrollToEndBGDesktop();
  } else {
    scrollRGB();
    retractBurgerOnScroll();
    projectTilesMoveMobile();
    scrollToEndBGMobile();
  }
};

// change rgb color on scroll
function getRandomInt() {
  if (window.matchMedia("(min-width: 64em)").matches) {
    min = Math.ceil(2);
    max = Math.floor(5);
  } else {
    min = Math.ceil(1);
    max = Math.floor(3);
  }
  return Math.floor(Math.random() * (max - min) + min);
}

function sumRestrictRGB(rgb, randomRGB) {
  if (rgb >= 255) {
    rgb = 255;
    randomRGB = -randomRGB;
  }
  return rgb + randomRGB;
}

function diffRestrictRGB(rgb, randomRGB) {
  if (rgb <= 0) {
    rgb = 0;
    randomRGB = -randomRGB;
  }
  return rgb - randomRGB;
}

function rgbInverseColor(r, g, b) {
  let total = r + g + b;
  let str = "";
  if (total < 400) {
    str = "var(--clr-light)";
  } else {
    str = "var(--clr-dark)";
  }
  return str;
}

const dynamicRGB = document.querySelector("#dynamic-rgb");
const aboutMe = document.querySelector("#aboutme");
let lastScroll = 0;
let r = 0;
let g = 0;
let b = 0;
const rR = getRandomInt();
const rG = getRandomInt();
const rB = getRandomInt();
let getRGB = "";
let filterRGB = "";

/* change dynamic rgb upon scrolling */
function scrollRGB() {
  let currentScroll = Math.round(window.scrollY);

  if (lastScroll - currentScroll < 0) {
    r = sumRestrictRGB(r, rR);
    g = sumRestrictRGB(g, rG);
    b = sumRestrictRGB(b, rB);
    getRGB = "rgb(" + r + "," + g + "," + b + ")";
    filterRGB = r + " " + g + " " + b;
    dynamicRGB.style.background = getRGB;
    dynamicRGB.innerHTML = filterRGB;
    dynamicRGB.style.color = rgbInverseColor(r, g, b);
    aboutMe.style.outlineColor = getRGB;
  } else if (lastScroll - currentScroll > 0) {
    r = diffRestrictRGB(r, rR);
    g = diffRestrictRGB(g, rG);
    b = diffRestrictRGB(b, rB);
    getRGB = "rgb(" + r + "," + g + "," + b + ")";
    filterRGB = r + " " + g + " " + b;
    dynamicRGB.style.background = getRGB;
    dynamicRGB.innerHTML = filterRGB;
    dynamicRGB.style.color = rgbInverseColor(r, g, b);
    aboutMe.style.outlineColor = getRGB;
  }
  lastScroll = currentScroll;
}

// toggle burger
const burger = document.querySelector("#burger");
const hiddenBurgerContents = document.querySelector("#hidden-burger-contents");
const burgerHabbit = document.querySelector("#hidden-burger-contents img");

//toggle = switch between nontoggle class and toggle class
burger.addEventListener("click", function () {
  burger.classList.toggle("toggle");
  hiddenBurgerContents.classList.toggle("toggle");
  subjectHeadingHide();
});

burgerHabbit.addEventListener("click", function () {
  burger.classList.toggle("toggle");
  hiddenBurgerContents.classList.toggle("toggle");
  subjectHeadingHide();
});

function retractBurgerOnScroll() {
  if (hiddenBurgerContents.classList.contains("toggle")) {
    burger.classList.toggle("toggle");
    hiddenBurgerContents.classList.toggle("toggle");
    subjectHeadingHide();
  }
}

function subjectHeadingHide() {
  for (var i = 0; i < subjectHeading.length; i++) {
    subjectHeading[i].classList.toggle("toggle");
  }
}

// resources
const subjectWrapper = [document.querySelector("div.subject-wrap")];
const subjectWrapperImg = [document.querySelector("div.subject-wrap img")];
const subjectHeading = [document.querySelector("a.subject-heading")];
const subjectDropdown = [document.querySelector("div.subject-drop")];
const subjectDesc = [document.querySelector("p.subject-desc")];

for (let i = 0; i < subjectHeading.length; i++) {
  subjectHeading[i].addEventListener("mouseenter", function () {
    downList(i);
    subjectWrapperImg[i].style.filter = "grayscale(1) blur(2px)";
    subjectWrapperImg[i].style.transitionDuration = "1s";
  });
  subjectWrapper[i].addEventListener("mouseleave", function () {
    upList(i);
    subjectWrapperImg[i].style.filter = "grayscale(0) blur(0px)";
    subjectWrapperImg[i].style.transitionDuration = "1s";
  });
}

function delayedMouseOver(n) {
  subjectHeading[n].style.backgroundColor = "var(--clr-accent)";
  subjectHeading[n].style.padding = "1px 8px";
  subjectHeading[n].style.borderRadius = "2px";
}

function delayedMouseLeave(n) {
  subjectHeading[n].style.backgroundColor = "var(--clr-dark2)";
  subjectHeading[n].style.padding = "1px 10px";
  subjectHeading[n].style.borderRadius = "0px";
}

function downList(n) {
  subjectHeading[n].style.padding = "1px";
  subjectHeading[n].style.transitionDuration = "0.2s";
  setTimeout(delayedMouseOver, 200, n);
  subjectDropdown[n].style.opacity = "1";
  subjectDropdown[n].style.zIndex = "0";
  subjectDropdown[n].style.transitionDuration = "0.75s";
  subjectDesc[n].style.opacity = "0.3";
  subjectDesc[n].style.transitionDuration = "0.75s";
}

function upList(n) {
  subjectHeading[n].style.padding = "1px";
  subjectHeading[n].style.transitionDuration = "0.2s";
  setTimeout(delayedMouseLeave, 200, n);
  subjectDropdown[n].style.opacity = "-1";
  subjectDropdown[n].style.zIndex = "-1";
  subjectDropdown[n].style.transitionDuration = "0.75s";
  subjectDesc[n].style.opacity = "1";
  subjectDesc[n].style.transitionDuration = "0.75s";
}

// project
const projectTiles = document.querySelector("#project-tiles-group");
const projectBGImg = document.querySelector("#project-bg-img");
const habbitSpray = document.querySelector("#habbit-spray");
const habbitBorder = document.querySelector("#habbit-border");
const projectDivAll = document.querySelectorAll("div.project");
const critiques = document.querySelector("#critiques");
const subjectContainer = document.querySelector("div.subject-container");
const subjectsNoOfChild = subjectContainer.children;
const projectTilesChild = projectTiles.children;

// habbit animate and reveal
function projectHabbitAnimate() {
  if (Math.round(window.scrollY) > 100) {
    habbitSpray.style.transform = "rotate(360deg)";
    habbitSpray.style.transition = "2s";
    habbitBorder.style.transform = "rotate(360deg)";
    habbitBorder.style.transition = "2s";
    habbitBorder.style.borderRadius = "50%";
    habbitBorder.style.transition = "2s";
  } else {
    habbitSpray.style.transform = "rotate(0deg)";
    habbitSpray.style.transition = "2s";
    habbitBorder.style.transform = "rotate(0deg)";
    habbitBorder.style.transition = "2s";
    habbitBorder.style.borderRadius = "0px";
    habbitBorder.style.transition = "2s";
  }
}

// project tiles transitions
function projectTilesMoveMobile() {
  if (Math.round(window.scrollY) > 1800) {
    for (let i = 0; i < projectTilesChild.length; i++) {
      projectTilesChild[i].style.opacity = "0";
      projectTilesChild[i].style.transition = "0.5s";
    }
  } else {
    for (let i = 0; i < projectTilesChild.length; i++) {
      projectTilesChild[i].style.opacity = "1";
      projectTilesChild[i].style.transition = "0.5s";
    }
  }
}

function projectTilesMoveDesktop() {
  if (Math.round(window.scrollY) > 350) {
    projectBGImg.style.opacity = "0";
    projectBGImg.style.height = "0px";
    projectBGImg.style.width = "0px";
    projectBGImg.style.transition = "1s";
    habbitSpray.style.opacity = "0";
    habbitSpray.style.transition = "1s";
    habbitBorder.style.opacity = "0";
    habbitBorder.style.transition = "1s";
    projectTilesMoveExpand();
  } else {
    projectBGImg.style.opacity = "1";
    projectBGImg.style.height = "300px";
    projectBGImg.style.width = "300px";
    projectBGImg.style.transition = "1s";
    habbitBorder.style.opacity = "1";
    habbitBorder.style.transition = "1s";
    habbitSpray.style.opacity = "1";
    habbitSpray.style.transition = "1s";
    projectTilesMoveRetract();
  }
}

function projectTilesMoveExpand() {
  for (let i = 0; i < projectTilesChild.length; i++) {
    projectTilesChild[i].style.zIndex = "1";
    projectTilesChild[i].style.margin = "15px";
    projectTilesChild[i].style.borderColor =
      "gray var(--clr-dark2) var(--clr-dark2) gray";
    projectTilesChild[i].style.borderRadius = "5px";
    projectTilesChild[i].style.transition = "1s";
  }
}

function projectTilesMoveRetract() {
  for (let i = 0; i < projectTilesChild.length; i++) {
    projectTilesChild[i].style.opacity = "0";
    projectTilesChild[i].style.zIndex = "-1";
    projectTilesChild[i].style.margin = "0px";
    projectTilesChild[i].style.borderColor = "transparent";
    projectTilesChild[i].style.borderRadius = "0px";
    projectTilesChild[i].style.transition = "1s";
  }
}

// view on github
const imgWrapper = [
  document.querySelector("div.imgwrapper1"),
  document.querySelector("div.imgwrapper2"),
  document.querySelector("div.imgwrapper3"),
  document.querySelector("div.imgwrapper4"),
];
const progressImg = [
  document.querySelector("div.imgwrapper1 img"),
  document.querySelector("div.imgwrapper2 img"),
  document.querySelector("div.imgwrapper3 img"),
  document.querySelector("div.imgwrapper4 img"),
];
const viewOnGithub = [
  document.querySelector("h2.viewgithub1"),
  document.querySelector("h2.viewgithub2"),
  document.querySelector("h2.viewgithub3"),
  document.querySelector("h2.viewgithub4"),
];

for (let i = 0; i < imgWrapper.length; i++) {
  imgWrapper[i].addEventListener("mouseenter", function () {
    mouseEnterToggle(i);
  });
  imgWrapper[i].addEventListener("mouseleave", function () {
    mouseLeaveToggle(i);
  });
}

function mouseEnterToggle(n) {
  progressImg[n].style.transitionDuration = "1s";
  viewOnGithub[n].style.transitionDuration = "1s";
  progressImg[n].style.transform = "scale(1.1)";
  progressImg[n].style.opacity = "0.6";
  viewOnGithub[n].style.opacity = "1";
  viewOnGithub[n].style.zIndex = "1";
}

function mouseLeaveToggle(n) {
  progressImg[n].style.transform = "scale(1)";
  progressImg[n].style.opacity = "1";
  progressImg[n].style.zIndex = "1";
  viewOnGithub[n].style.opacity = "0";
  viewOnGithub[n].style.zIndex = "0";
}

// scroll to end
const leftbarAll = document.querySelectorAll(".leftbar");
const scrollEnd = document.body.clientHeight;

// change BG of project when scrolled to end mobile
function scrollToEndBGMobile() {
  if (
    Math.abs(document.documentElement.scrollTop) + window.innerHeight >
    scrollEnd
  ) {
    setTimeout(endBGMobile, 200);
  } else {
    setTimeout(notEndBGMobile, 200);
  }
}

function notEndBGMobile() {
  projectTiles.style.backgroundImage =
    "linear-gradient(to bottom, var(--clr-accent3), black, var(--clr-accent3)";
  projectTiles.style.backgroundAttachment = "fixed";
}

function endBGMobile() {
  logoWrap.style.background = getRGB;
  projectTiles.style.background = getRGB;
}

// change BG of project when scrolled to end desktop
function scrollToEndBGDesktop() {
  if (
    Math.abs(document.documentElement.scrollTop) + window.innerHeight >
    scrollEnd
  ) {
    setTimeout(endBGDesktop, 200);
  } else {
    setTimeout(notEndBGDesktop, 200);
  }
}

function notEndBGDesktop() {
  leftbarAll.forEach((leftbar) => {
    leftbar.style.background = "var(--clr-dark)";
  });
  if (Math.abs(document.documentElement.scrollTop) > 350) {
    projectTiles.style.background =
      "radial-gradient(black 25%, var(--clr-accent3))";
    projectDivAll.forEach((tile) => {
      tile.style.opacity = "1";
    });
  } else {
    projectTiles.style.background = "radial-gradient(var(--clr-dark2), black)";
  }
}

function endBGDesktop() {
  leftbarAll.forEach((leftbar) => {
    leftbar.style.background = getRGB;
  });
  logoWrap.style.background = getRGB;
  projectTiles.style.background = getRGB;
  projectDivAll.forEach((tile) => {
    tile.style.opacity = "0";
  });
}

//tests
function test() {
  console.log(
    "rgb:" +
    r +
    "," +
    g +
    "," +
    b +
    " rR:" +
    rR +
    "/" +
    sumRestrictRGB(r, rR) +
    "/" +
    diffRestrictRGB(b, rB) +
    " rG:" +
    rG +
    "/" +
    sumRestrictRGB(g, rG) +
    "/" +
    diffRestrictRGB(b, rB) +
    " rB:" +
    rB +
    "/" +
    sumRestrictRGB(b, rB) +
    "/" +
    diffRestrictRGB(b, rB)
  );
  console.log(subjectHeading.length);
  console.log(projectTilesChild.length);
  console.log(subjectsNoOfChild.length);
}
