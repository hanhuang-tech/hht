const logoWrap = document.querySelector("#logowrap");
const logo = document.querySelector("#logo");
const habbitImg = document.querySelector("#habbit-img");
const habbitA = document.querySelector("#habbit-a");
const habbitB = document.querySelector("#habbit-b");
const lantern = document.querySelector("#lantern");
const arrowButton = document.querySelector("#arrow-button");

const test = () => {
  console.log("window.scrollY=" + Math.round(window.scrollY));
  console.log("footerSection.offsetTop= " + footerScrolledToEnd);
};

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
  scrollRGB();
  revealNavArrowBtn();
  revealTab();
  changeNavTab();
  changeNavTabCritiques();
  //test();
};

// change color on scroll
function getRandomInt() {
  if (window.matchMedia("(min-width: 64em)").matches) {
    min = Math.ceil(1);
    max = Math.floor(4);
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
const hanSection = document.querySelector("#han");
const navArrowBtn = document.querySelector("nav.bar.sectioned-with-tab");
let lastScroll = 0;
let r = 0;
let g = 0;
let b = 0;
const rR = getRandomInt();
const rG = getRandomInt();
const rB = getRandomInt();
let getRGB = "";
let filterRGB = "";

function scrollRGB() {
  let currentScroll = window.scrollY;

  if (lastScroll - currentScroll < 0) {
    r = sumRestrictRGB(r, rR);
    g = sumRestrictRGB(g, rG);
    b = sumRestrictRGB(b, rB);
    getRGB = "rgb(" + r + "," + g + "," + b + ")";
    filterRGB = r + " " + g + " " + b;
    dynamicRGB.style.background = getRGB;
    dynamicRGB.innerHTML = filterRGB;
    dynamicRGB.style.color = rgbInverseColor(r, g, b);
  } else if (lastScroll - currentScroll > 0) {
    r = diffRestrictRGB(r, rR);
    g = diffRestrictRGB(g, rG);
    b = diffRestrictRGB(b, rB);
    getRGB = "rgb(" + r + "," + g + "," + b + ")";
    filterRGB = r + " " + g + " " + b;
    dynamicRGB.style.background = getRGB;
    dynamicRGB.innerHTML = filterRGB;
    dynamicRGB.style.color = rgbInverseColor(r, g, b);
  }
  lastScroll = currentScroll;
}

function revealNavArrowBtn() {
  if (Math.abs(document.documentElement.scrollTop) > 500) {
    navArrowBtn.style.transform = "translateX(0px)";
  } else {
    navArrowBtn.style.transform = "translateX(50px)";
  }
}

// tab
const tabWrap = document.querySelector("#tabwrapper");
const headSection = document.querySelector("#head__section");
const headerSection = document.querySelector("#header__section");
const navSection = document.querySelector("#nav__section");
const bodyPartSection = document.querySelector("#body-partition__section");
const footerSection = document.querySelector("#footer__section");
const htmlSection = document.querySelector("#html__section");
const cssSection = document.querySelector("#css__section");
const jsSection = document.querySelector("#js__section");
const headTab = document.querySelector("#head__tab");
const headerTab = document.querySelector("#header__tab");
const navTab = document.querySelector("#nav__tab");
const bodyPartTab = document.querySelector("#body-partition__tab");
const footerTab = document.querySelector("#footer__tab");
const htmlTab = document.querySelector("#html__tab");
const cssTab = document.querySelector("#css__tab");
const jsTab = document.querySelector("#js__tab");
const tab = document.querySelector("#tab");
tabWrap.style.transitionDuration = "1s";
tab.style.transitionDuration = "0.5s";

function revealTab() {
  if (window.matchMedia("(max-width: 64em)").matches) {
    window.addEventListener("scroll", function () {
      if (Math.abs(document.documentElement.scrollTop) < 100) {
        tabWrap.style.transform = "translate(-70px)";
      } else {
        tabWrap.style.transform = "translate(0px)";
      }
    });
  } else {
    if (Math.abs(document.documentElement.scrollTop) < 100) {
      tabWrap.style.transform = "translate(-70px)";
    } else {
      tabWrap.style.transform = "translate(25px)";
    }
  }
}

function changeNavTab() {
  if (headSection) {
    if (
      Math.round(window.scrollY) + 10 > headSection.offsetTop &&
      Math.round(window.scrollY) + 10 < headerSection.offsetTop
    ) {
      headTab.style.borderColor = "var(--clr-light)";
      headerTab.style.borderColor = "transparent";
    } else if (
      Math.round(window.scrollY) + 10 > headerSection.offsetTop &&
      Math.round(window.scrollY) + 10 < navSection.offsetTop
    ) {
      headTab.style.borderColor = "transparent";
      headerTab.style.borderColor = "var(--clr-light)";
      navTab.style.borderColor = "transparent";
    } else if (
      Math.round(window.scrollY) + 10 > navSection.offsetTop &&
      Math.round(window.scrollY) + 10 < bodyPartSection.offsetTop
    ) {
      headerTab.style.borderColor = "transparent";
      navTab.style.borderColor = "var(--clr-light)";
      bodyPartTab.style.borderColor = "transparent";
    } else if (
      Math.round(window.scrollY) + 10 > bodyPartSection.offsetTop &&
      Math.round(window.scrollY) + 10 < footerSection.offsetTop
    ) {
      navTab.style.borderColor = "transparent";
      bodyPartTab.style.borderColor = "var(--clr-light)";
      footerTab.style.borderColor = "transparent";
    } else if (Math.round(window.scrollY) > footerSection.offsetTop) {
      bodyPartTab.style.borderColor = "transparent";
      footerTab.style.borderColor = "var(--clr-light)";
    }
  }
}

function changeNavTabCritiques() {
  if (htmlSection) {
    if (
      Math.round(window.scrollY) + 10 > htmlSection.offsetTop &&
      Math.round(window.scrollY) + 10 < cssSection.offsetTop
    ) {
      cssTab.style.borderColor = "transparent";
      htmlTab.style.borderColor = "var(--clr-light)";
    } else if (
      Math.round(window.scrollY) + 10 > cssSection.offsetTop &&
      Math.round(window.scrollY) + 10 < jsSection.offsetTop
    ) {
      htmlTab.style.borderColor = "transparent";
      cssTab.style.borderColor = "var(--clr-light)";
      jsTab.style.borderColor = "transparent";
    } else if (Math.round(window.scrollY) > jsSection.offsetTop) {
      cssTab.style.borderColor = "transparent";
      jsTab.style.borderColor = "var(--clr-light)";
    }
  }
}

// spoiler button
const spoilBtn = [
  document.querySelector("#spoil-btn1"),
  document.querySelector("#spoil-btn2"),
  document.querySelector("#spoil-btn3"),
  document.querySelector("#spoil-btna"),
  document.querySelector("#spoil-btnb"),
  document.querySelector("#spoil-btncp1"),
  document.querySelector("#spoil-btncp2"),
];
const spoilMov = [
  document.querySelector("#spoil-move1"),
  document.querySelector("#spoil-move2"),
  document.querySelector("#spoil-move3"),
  document.querySelector("#spoil-movea"),
  document.querySelector("#spoil-moveb"),
  document.querySelector("#spoil-movecp1"),
  document.querySelector("#spoil-movecp2"),
];
const hideText = [
  "hide-text1",
  "hide-text2",
  "hide-text3",
  "hide-texta",
  "hide-textb",
];
const revealText = [
  "reveal-text1",
  "reveal-text2",
  "reveal-text3",
  "reveal-texta",
  "reveal-textb",
];

// spoilBtn[0].addEventListener("click", function () {
//   spoilMov[0].classList.contains(hideText[0])
//     ? spoilMov[0].classList.replace(hideText[0], revealText[0])
//     : spoilMov[0].classList.replace(revealText[0], hideText[0]);
// });
