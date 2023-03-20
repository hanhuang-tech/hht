const logoWrap = document.querySelector("div.logowrap");
const logo = document.querySelector("div.logo");
const habbitImg = document.querySelector("div.habbit-img");
const habbitA = document.querySelector("img.habbit-a");
const habbitB = document.querySelector("img.habbit-b");
const habbitPartition = document.querySelector("#habbit-partition");
const bannerImg = document.querySelector("img.banner");
const arrowButton = document.querySelector("#arrow-button");
const lantern = document.querySelector("#lantern");
const habbitCry = new Audio("../../habbit-cry.mp3");

// habbit click
habbitImg.addEventListener("click", function () {
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
}, false);

// habbit change
window.onmousemove = function (e) {
    if (window.matchMedia("(min-width: 64em)").matches) { habbitChangeDesktop(e); }
    else { habbitChangeMobile(e); }
}

function habbitChangeMobile(e) {
    // clientX property returns the horizontal coordinate of the current window
    let x = e.clientX;
    let w = Math.floor(document.documentElement.clientWidth / 2);
    if (x > w) { habbitB.style.opacity = "1"; }
    else { habbitB.style.opacity = "0"; }
}

function habbitChangeDesktop(e) {
    // clientX property returns the horizontal coordinate of the current window
    let x = e.clientX;
    let w = Math.floor(document.documentElement.clientWidth / 2);
    if (x > w) { habbitB.style.opacity = "1"; }
    else { habbitB.style.opacity = "0"; }
}

// on scroll
// fixed pos logo if min-width: 64em
window.onscroll = function () {
    if (window.matchMedia("(min-width: 64em)").matches) {
        scrollRGB();
        logoRetractDesktop();
        retractBurgerOnScroll();
        changeTabDesktop();
    }
    else {
        scrollRGB();
        logoRetractMb();
        retractBurgerOnScroll();
        changeTabMobile();
    }
}

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
    if (rgb >= 255) { rgb = 255; randomRGB = -randomRGB; }
    return rgb + randomRGB;
}

function diffRestrictRGB(rgb, randomRGB) {
    if (rgb <= 0) { rgb = 0; randomRGB = -randomRGB; }
    return rgb - randomRGB;
}

function rgbInverseColor(r, g, b) {
    let total = r + g + b;
    let str = "";
    if (total < 400) { str = "var(--clr-light)"; }
    else { str = "var(--clr-dark)"; }
    return str;
}

const rgbFilter = document.querySelector("#rgbfilter");
const hanSection = document.querySelector("#han");
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
    let currentScroll = window.pageYOffset;

    if (lastScroll - currentScroll < 0) {
        r = sumRestrictRGB(r, rR);
        g = sumRestrictRGB(g, rG);
        b = sumRestrictRGB(b, rB);
        getRGB = "rgb(" + r + "," + g + "," + b + ")";
        filterRGB = r + " " + g + " " + b;
        rgbFilter.style.background = getRGB
        rgbFilter.innerHTML = filterRGB
        rgbFilter.style.color = rgbInverseColor(r, g, b);

    } else if (lastScroll - currentScroll > 0) {
        r = diffRestrictRGB(r, rR);
        g = diffRestrictRGB(g, rG);
        b = diffRestrictRGB(b, rB);
        getRGB = "rgb(" + r + "," + g + "," + b + ")";
        filterRGB = r + " " + g + " " + b;
        rgbFilter.style.background = getRGB;
        rgbFilter.innerHTML = filterRGB;
        rgbFilter.style.color = rgbInverseColor(r, g, b);
    }
    lastScroll = currentScroll;
}

// change logo on scroll
function logoRetractDesktop() {
    if (Math.abs(document.documentElement.scrollTop) > 1) {
        logo.style.position = "fixed";
        logo.style.flexDirection = "column";
        logo.style.padding = "0";
        logo.style.margin = "0";
        logo.style.backgroundColor = "rgba(100, 100, 100, 0.5)";
        logo.style.borderRadius = "0 0 20px 0";
        logo.style.boxShadow = "var(--bs)";
        logo.style.transitionDuration = "1s";
        habbitPartition.style.position = "absolute";
        habbitPartition.style.top = "40px";
        habbitPartition.style.right = "3px";
    } else {
        logoWrap.style.backgroundColor = "transparent";
        logo.style.flexDirection = "row";
        logo.style.position = "static";
        logo.style.padding = "5px";
        logo.style.margin = "5px";
        logo.style.borderRadius = "0px 0px 30px 0px";
        logo.style.boxShadow = "var(--bs4)";
        logo.style.transitionDuration = "1s";
        habbitPartition.style.position = "static";
    }
}

function logoRetractMb() {
    if (Math.abs(document.documentElement.scrollTop) > 1) {
        logo.style.position = "fixed";
        logo.style.flexDirection = "column";
        logo.style.padding = "0px";
        logo.style.margin = "0px";
        logo.style.backgroundColor = "transparent";
        logo.style.borderRadius = "20px";
        logo.style.boxShadow = "none";
        logo.style.transitionDuration = "1s";
        habbitB.style.maxWidth = "40px";
        habbitB.style.transitionDuration = "1s";
        habbitImg.style.maxWidth = "50px";
        habbitImg.style.paddingRight = "10px";
        habbitImg.style.background = "rgba(50, 150, 150, 0.5)";
        habbitImg.style.outline = "3px dashed var(--clr-dark)";
        habbitImg.style.borderRadius = "0 10px 10px 10px";
        bannerImg.style.visibility = "hidden";
        habbitImg.style.transitionDuration = "1s";
    } else {
        logo.style.position = "fixed";
        logo.style.flexDirection = "column";
        logo.style.padding = "0";
        logo.style.margin = "0";
        logo.style.backgroundColor = "rgba(100, 100, 100, 0.5)";
        logo.style.borderRadius = "0 0 20px 0";
        logo.style.boxShadow = "var(--bs)";
        logo.style.transitionDuration = "1s";
        habbitB.style.maxWidth = "50px";
        habbitImg.style.paddingRight = "0px";
        habbitImg.style.backgroundColor = "transparent";
        habbitImg.style.outline = "none"
        bannerImg.style.visibility = "visible";
    }
}

// toggle burger
const burger = document.querySelector("#burger");
const firstham = document.querySelector("#burger :nth-child(1)");
const secondham = document.querySelector("#burger :nth-child(2)");
const thirdham = document.querySelector("#burger :nth-child(3)");
const burgerTriangle = document.querySelector("#burger-triangle");
const hiddenBurgerContents = document.querySelector("#hidden-burger-contents");
habbitB.style.transitionDuration = "0.5s";
habbitA.style.transitionDuration = "0.5s";

// tab
const tabWrap = document.querySelector("#tabwrapper");
const tab = document.querySelector("#tab");
const tabhtml = document.querySelector(".tab-html");
const tabcss = document.querySelector(".tab-css");
const tabjs = document.querySelector(".tab-js");
tabWrap.style.transitionDuration = "0.5s";
tab.style.transitionDuration = "0.5s";
tabhtml.style.transitionDuration = "0.5s";
tabcss.style.transitionDuration = "0.5s";
tabjs.style.transitionDuration = "0.5s";

function changeTabMobile() {
    if (Math.abs(document.documentElement.scrollTop) < 100) {
        tabWrap.style.transform = "translate(-50px)";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 100 && (Math.abs(document.documentElement.scrollTop) < 3500)) {
        tabWrap.style.transform = "translate(0px)";
        tabhtml.style.filter = "grayscale(0%)";
        tabcss.style.filter = "grayscale(100%)";
        tabjs.style.filter = "grayscale(100%)";
        tab.style.borderColor = "transparent transparent var(--clr-html) transparent";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 3500 && (Math.abs(document.documentElement.scrollTop) < 3600)) {
        tabhtml.style.filter = "grayscale(100%)";
        tabcss.style.filter = "grayscale(0%)";
        tabjs.style.filter = "grayscale(100%)";
        tab.style.borderColor = "var(--clr-brown) var(--clr-brown) var(--clr-css)  transparent";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 3900) {
        tabhtml.style.filter = "grayscale(100%)";
        tabcss.style.filter = "grayscale(100%)";
        tabjs.style.filter = "grayscale(0%)";
        tab.style.borderColor = "var(--clr-brown) var(--clr-brown) var(--clr-js)  transparent";
    }
}

function changeTabDesktop() {
    if ((Math.abs(document.documentElement.scrollTop) < 2000)) {
        tabhtml.style.filter = "grayscale(0%)";
        tabcss.style.filter = "grayscale(100%)";
        tabjs.style.filter = "grayscale(100%)";
        tab.style.borderColor = "transparent transparent var(--clr-html) transparent";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 2100 && (Math.abs(document.documentElement.scrollTop) < 2200)) {
        tabhtml.style.filter = "grayscale(100%)";
        tabcss.style.filter = "grayscale(0%)";
        tabjs.style.filter = "grayscale(100%)";
        tab.style.borderColor = "var(--clr-brown) var(--clr-brown) var(--clr-css)  transparent";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 2200) {
        tabhtml.style.filter = "grayscale(100%)";
        tabcss.style.filter = "grayscale(100%)";
        tabjs.style.filter = "grayscale(0%)";
        tab.style.borderColor = "var(--clr-brown) var(--clr-brown) var(--clr-js)  transparent";
    }
}

//toggle = switch between nontoggle class and toggle class
burger.addEventListener("click", function () {
    burger.classList.toggle("toggle");
    hiddenBurgerContents.classList.toggle("toggle");
    arrowButton.classList.toggle("toggle");
    subjectHeadingHide();
});

function retractBurgerOnScroll() {
    if (hiddenBurgerContents.classList.contains("toggle")) {
        burger.classList.toggle("toggle")
        hiddenBurgerContents.classList.toggle("toggle");
        arrowButton.classList.toggle("toggle");
        subjectHeadingHide();
    }
}

function subjectHeadingHide() {
    for (var i = 0; i < subjectHeading.length; i++) {
        subjectHeading[i].classList.toggle("toggle");
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
    document.querySelector("#spoil-btncp2")
]
const spoilMov = [
    document.querySelector("#spoil-move1"),
    document.querySelector("#spoil-move2"),
    document.querySelector("#spoil-move3"),
    document.querySelector("#spoil-movea"),
    document.querySelector("#spoil-moveb"),
    document.querySelector("#spoil-movecp1"),
    document.querySelector("#spoil-movecp2")
]
const hideText = [
    'hide-text1',
    'hide-text2',
    'hide-text3',
    'hide-texta',
    'hide-textb'
]
const revealText = [
    'reveal-text1',
    'reveal-text2',
    'reveal-text3',
    'reveal-texta',
    'reveal-textb'
]

spoilBtn[0].addEventListener("click", function () {
    spoilMov[0].classList.contains(hideText[0])
        ? spoilMov[0].classList.replace(hideText[0], revealText[0])
        : spoilMov[0].classList.replace(revealText[0], hideText[0])
})

spoilBtn[1].addEventListener("click", function () {
    spoilMov[1].classList.contains(hideText[1])
        ? spoilMov[1].classList.replace(hideText[1], revealText[1])
        : spoilMov[1].classList.replace(revealText[1], hideText[1])
})

spoilBtn[2].addEventListener("click", function () {
    spoilMov[2].classList.contains(hideText[2])
        ? spoilMov[2].classList.replace(hideText[2], revealText[2])
        : spoilMov[2].classList.replace(revealText[2], hideText[2])
})

spoilBtn[3].addEventListener("click", function () {
    spoilMov[3].classList.contains(hideText[3])
        ? spoilMov[3].classList.replace(hideText[3], revealText[3])
        : spoilMov[3].classList.replace(revealText[3], hideText[3])
})

spoilBtn[4].addEventListener("click", function () {
    spoilMov[4].classList.contains(hideText[4])
        ? spoilMov[4].classList.replace(hideText[4], revealText[4])
        : spoilMov[4].classList.replace(revealText[4], hideText[4])
})

// codebox

const codeBox = document.body.querySelector(".codebox");
const span = "</span>";
const spanBlue = "<span class='codeblue'>";
const spanGreen = "<span class='codegreen'>";
const spanBrown = "<span class='codebrown'>";


function styleEl(codeBox) {
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;link ", `&lt;${spanBlue}link ${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;section class", `&lt;${spanBlue}section${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/section", `/${spanBlue}section${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;button class", `&lt;${spanBlue}button${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/button", `/${spanBlue}button${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;meta ", `&lt;${spanBlue}meta ${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("a ", `${spanBlue}a ${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/a", `/${spanBlue}a${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;p class", `&lt${spanBlue}p${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;p&gt;", `&lt${spanBlue}p${span}&gt;`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;/p&gt;", `&lt;/${spanBlue}p${span}&gt;`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;nav class", `&lt;${spanBlue}nav${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/nav", `/${spanBlue}nav${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;ul class", `&lt;${spanBlue}ul${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/ul", `/${spanBlue}ul${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;li class", `&lt;${spanBlue}li${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/li", `/${spanBlue}li${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/div", `/${spanBlue}div${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;div class", `&lt${spanBlue}div${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll(`&lt;h1 class`, `&lt;${spanBlue}h1${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll(`&lt;h2 class`, `&lt;${spanBlue}h2${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll(`&lt;h3 class`, `&lt;${spanBlue}h3${span} ${spanGreen}class${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/h1", `/${spanBlue}h1${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/h2", `/${spanBlue}h2${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("/h3", `/${spanBlue}h3${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;img ", `&lt;${spanBlue}img ${span}`);

    codeBox.innerHTML = codeBox.innerHTML.replaceAll('" class=', `" ${spanGreen}class${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("id=", `${spanGreen}id${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("alt=", `${spanGreen}alt${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("rel=", `${spanGreen}rel${span}=`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("src", `${spanGreen}src${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("href", `${spanGreen}href${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("name", `${spanGreen}name${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("charset", `${spanGreen}charset${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("type", `${spanGreen}type${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("content", `${spanGreen}content${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("aria-label=", `${spanGreen}aria-label${span}=`);

    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&lt;", `${spanBrown}&lt;${span}`);
    codeBox.innerHTML = codeBox.innerHTML.replaceAll("&gt;", `${spanBrown}&gt;${span}`);
}

const codeboxEl = document.getElementsByClassName("codebox");

for (var i = 0; i < codeboxEl.length; i++) {
    styleEl(codeboxEl[i])

}

