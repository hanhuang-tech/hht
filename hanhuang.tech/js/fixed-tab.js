const logoWrap = document.querySelector("div.logowrap");
const logo = document.querySelector("div.logo");
const habbitImg = document.querySelector("div.habbit-img");
const habbitA = document.querySelector("img.habbit-a");
const habbitB = document.querySelector("img.habbit-b");
const habbitBanner = document.querySelector("#habbitbanner");
habbitBanner.style.transition = "1s";
const arrowButton = document.querySelector("#arrow-button");
const lantern = document.querySelector("#lantern");
const habbitCry = new Audio("../../habbit-cry.mp3");

// habbit click
habbitImg.addEventListener(
  "click",
  function () {
    habbitCry.play();

    habbitA.classList.remove("animate");
    void habbitA.offsetWidth;
    habbitA.classList.add("animate");

    habbitB.classList.remove("animate");
    void habbitB.offsetWidth;
    habbitB.classList.add("animate");

    arrowButton.classList.remove("animate");
    void arrowButton.offsetWidth;
    arrowButton.classList.add("animate");

    lantern.classList.remove("animate");
    void lantern.offsetWidth;
    lantern.classList.add("animate");
  },
  false
);

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

// hover logo
habbitImg.addEventListener("mouseenter", function () {
  habbitBanner.style.opacity = "1";
  habbitBanner.style.visibility = "visible";
});
logo.addEventListener("mouseleave", function () {
  habbitBanner.style.opacity = "0";
  habbitBanner.style.visibility = "hidden";
});

// on scroll
// fixed pos logo if min-width: 64em
window.onscroll = function () {
  scrollRGB();
  revealNavForTabSection();
  changeTab();
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
const navForTabSection = document.querySelector("nav.bar.sectioned-with-tab");
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

function revealNavForTabSection() {
  if (Math.abs(document.documentElement.scrollTop) > 500) {
    navForTabSection.style.transform = "translateX(0px)";
  } else {
    navForTabSection.style.transform = "translateX(50px)";
  }
}

// tab
const htmlsection = document.querySelector("#html");
const csssection = document.querySelector("#css");
const jssection = document.querySelector("#js");
const tabWrap = document.querySelector("#tabwrapper");
const tab = document.querySelector("#tab");
const tabhtml = document.querySelector(".tab-html");
const tabcss = document.querySelector(".tab-css");
const tabjs = document.querySelector(".tab-js");
tabWrap.style.transitionDuration = "1s";
tab.style.transitionDuration = "0.5s";
tabhtml.style.transitionDuration = "0.5s";
tabcss.style.transitionDuration = "0.5s";
tabjs.style.transitionDuration = "0.5s";

function changeTab() {
  if (window.matchMedia("(max-width: 64em)").matches) {
    window.addEventListener("scroll", function () {
      if (Math.abs(document.documentElement.scrollTop) < 100) {
        tabWrap.style.transform = "translate(-50px)";
      } else {
        tabWrap.style.transform = "translate(0px)";
      }
    });
  } else {
    if (Math.abs(document.documentElement.scrollTop) < 100) {
      tabWrap.style.transform = "translate(0)";
    } else {
      tabWrap.style.transform = "translate(145px)";
    }
  }
  if (
    Math.round(window.scrollY) + 10 > htmlsection.offsetTop &&
    Math.round(window.scrollY) + 10 < csssection.offsetTop
  ) {
    tabhtml.style.filter = "grayscale(0%)";
    tabcss.style.filter = "grayscale(100%)";
    tabjs.style.filter = "grayscale(100%)";
    tabWrap.style.backgroundColor = "var(--clr-html)";
  } else if (
    Math.round(window.scrollY) + 10 > csssection.offsetTop &&
    Math.round(window.scrollY) + 10 < jssection.offsetTop
  ) {
    tabhtml.style.filter = "grayscale(100%)";
    tabcss.style.filter = "grayscale(0%)";
    tabjs.style.filter = "grayscale(100%)";
    tabWrap.style.backgroundColor = "var(--clr-css)";
  } else if (Math.round(window.scrollY) + 10 > jssection.offsetTop) {
    tabhtml.style.filter = "grayscale(100%)";
    tabcss.style.filter = "grayscale(100%)";
    tabjs.style.filter = "grayscale(0%)";
    tabWrap.style.backgroundColor = "var(--clr-js)";
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

spoilBtn[0].addEventListener("click", function () {
  spoilMov[0].classList.contains(hideText[0])
    ? spoilMov[0].classList.replace(hideText[0], revealText[0])
    : spoilMov[0].classList.replace(revealText[0], hideText[0]);
});

spoilBtn[1].addEventListener("click", function () {
  spoilMov[1].classList.contains(hideText[1])
    ? spoilMov[1].classList.replace(hideText[1], revealText[1])
    : spoilMov[1].classList.replace(revealText[1], hideText[1]);
});

spoilBtn[2].addEventListener("click", function () {
  spoilMov[2].classList.contains(hideText[2])
    ? spoilMov[2].classList.replace(hideText[2], revealText[2])
    : spoilMov[2].classList.replace(revealText[2], hideText[2]);
});

spoilBtn[3].addEventListener("click", function () {
  spoilMov[3].classList.contains(hideText[3])
    ? spoilMov[3].classList.replace(hideText[3], revealText[3])
    : spoilMov[3].classList.replace(revealText[3], hideText[3]);
});

spoilBtn[4].addEventListener("click", function () {
  spoilMov[4].classList.contains(hideText[4])
    ? spoilMov[4].classList.replace(hideText[4], revealText[4])
    : spoilMov[4].classList.replace(revealText[4], hideText[4]);
});
