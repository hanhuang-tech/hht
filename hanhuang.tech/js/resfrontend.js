const logoWrap = document.querySelector("div.logowrap");
const logo = document.querySelector("div.logo");
const habbitImg = document.querySelector("div.habbit-img");
const habbitA = document.querySelector("img.habbit-a");
const habbitB = document.querySelector("img.habbit-b");
const habbitPartition = document.querySelector("#habbit-partition");
const bannerImg = document.querySelector("img.banner");
const arrowButton = document.querySelector("div.arrow-button");
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
        changeTagDesktop();
    }
    else {
        scrollRGB();
        logoRetractMb();
        retractBurgerOnScroll();
        changeTagMobile();
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
        habbitImg.style.background = "rgba(150, 150, 150, 0.5)";
        habbitImg.style.outline = "4px dashed var(--clr-dark2)";
        habbitImg.style.borderRadius = "0 5px 5px 0";
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

// restag
const resTag = document.querySelector("#res-tag");
const resTaghtml = document.querySelector(".res-tag-img-html");
const resTagcss = document.querySelector(".res-tag-img-css");
const resTagjs = document.querySelector(".res-tag-img-js");
const resTagSocial = document.querySelector(".res-tag-social");
resTag.style.transitionDuration = "0.5s";
resTaghtml.style.transitionDuration = "0.5s";
resTagcss.style.transitionDuration = "0.5s";
resTagjs.style.transitionDuration = "0.5s";
resTagSocial.style.transitionDuration = "0.5s";

function changeTagMobile() {
    if (Math.abs(document.documentElement.scrollTop) < 100) {
        resTag.style.transform = "translate(-75px)";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 100 && (Math.abs(document.documentElement.scrollTop) < 3000)) {
        resTag.style.transform = "translate(0px)";
        resTaghtml.style.display = "block";
        resTagcss.style.display = "none";
        resTagjs.style.display = "none";
        resTag.style.borderColor = "var(--clr-dark2) var(--clr-dark2) var(--clr-html) transparent";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 3000) {
        resTag.style.transform = "translate(0px)";
        resTaghtml.style.display = "none";
        resTagcss.style.display = "block";
        resTagjs.style.display = "none";
        resTag.style.borderColor = "var(--clr-css)";
    }
}

function changeTagDesktop() {
    if (Math.abs(document.documentElement.scrollTop) < 100) {
        resTagSocial.style.visibility = "hidden";
        resTagSocial.style.opacity = "0";
        resTagSocial.style.height = "0px";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 100 && (Math.abs(document.documentElement.scrollTop) < 3000)) {
        resTagSocial.style.visibility = "visible";
        resTagSocial.style.opacity = "1";
        resTagSocial.style.height = "65px";
        resTaghtml.style.display = "block";
        resTagcss.style.display = "none";
        resTagjs.style.display = "none";
        resTag.style.borderColor = "var(--clr-dark2) transparent var(--clr-html) var(--clr-dark2)";
    }
    else if (Math.abs(document.documentElement.scrollTop) > 3000) {
        resTaghtml.style.display = "none";
        resTagcss.style.display = "block";
        resTagjs.style.display = "none";
        resTag.style.borderColor = "var(--clr-css)";
    }
}

//toggle = switch between nontoggle class and toggle class
burger.addEventListener("click", function () {
    burger.classList.toggle("toggle")
    firstham.classList.toggle("toggle");
    secondham.classList.toggle("toggle");
    thirdham.classList.toggle("toggle");
    hiddenBurgerContents.classList.toggle("toggle");
});

function retractBurgerOnScroll() {
    if (hiddenBurgerContents.classList.contains("toggle")) {
        burger.classList.toggle("toggle")
        firstham.classList.toggle("toggle");
        secondham.classList.toggle("toggle");
        thirdham.classList.toggle("toggle");
        hiddenBurgerContents.classList.toggle("toggle");
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
const hideres = [
    'hide-res1',
    'hide-res2',
    'hide-res3',
    'hide-sfea',
    'hide-sfeb'
]
const revealres = [
    'reveal-res1',
    'reveal-res2',
    'reveal-res3',
    'reveal-sfea',
    'reveal-sfeb'
]

spoilBtn[0].addEventListener("click", function () {
    spoilMov[0].classList.contains(hideres[0]) ? spoilMov[0].classList.replace(hideres[0], revealres[0]) : spoilMov[0].classList.replace(revealres[0], hideres[0])
})

spoilBtn[1].addEventListener("click", function () {
    spoilMov[1].classList.contains(hideres[1]) ? spoilMov[1].classList.replace(hideres[1], revealres[1]) : spoilMov[1].classList.replace(revealres[1], hideres[1])
})

spoilBtn[2].addEventListener("click", function () {
    spoilMov[2].classList.contains(hideres[2]) ? spoilMov[2].classList.replace(hideres[2], revealres[2]) : spoilMov[2].classList.replace(revealres[2], hideres[2])
})

spoilBtn[3].addEventListener("click", function () {
    spoilMov[3].classList.contains(hideres[3]) ? spoilMov[3].classList.replace(hideres[3], revealres[3]) : spoilMov[3].classList.replace(revealres[3], hideres[3])
})

spoilBtn[4].addEventListener("click", function () {
    spoilMov[4].classList.contains(hideres[4]) ? spoilMov[4].classList.replace(hideres[4], revealres[4]) : spoilMov[4].classList.replace(revealres[4], hideres[4])
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

