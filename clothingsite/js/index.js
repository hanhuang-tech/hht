//render selectSize
const small = document.querySelector("#s")
/*const medium = document.querySelector("#m")
const large = document.querySelector("#l")*/
const chosenSize = document.querySelector("#chosensize")
let sizeSelected = [false];

function renderSize(a) {
    chosenSize.innerHTML = a
}

//change size when selected
small.addEventListener("click", function () {
    renderSize("S");
    small.style.color = "var(--clr-fonta)";
    /*medium.style.color = "var(--clr-fontb)";
    large.style.color = "var(--clr-fontb)";*/
    small.style.borderColor = "var(--clr-borderdg)";
    /*medium.style.borderColor = "var(--clr-borderlg)";
    large.style.borderColor = "var(--clr-borderlg)";*/
    sizeSelected = [true]
});
/*medium.addEventListener("click", function () {
    renderSize("M");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fonta)";
    large.style.color = "var(--clr-fontb)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderdg)";
    large.style.borderColor = "var(--clr-borderlg)";
    sizeSelected = [false, true, false]
});

large.addEventListener("click", function () {
    renderSize("L");
    small.style.color = "var(--clr-fontb)";
    medium.style.color = "var(--clr-fontb)";
    large.style.color = "var(--clr-fonta)";
    small.style.borderColor = "var(--clr-borderlg)";
    medium.style.borderColor = "var(--clr-borderlg)";
    large.style.borderColor = "var(--clr-borderdg)";
    sizeSelected = [false, false, true]
});*/

//add to cart
const cartAddedItems = document.querySelector("span.cart")
const addToCart = document.querySelector("#addtocart")
let sizeTotal = 0
let sizesCount = [0, 0, 0]

function sizeNotSelected() {
    alert("Please select a size first")
}

function cartEmpty() {
    alert("Please add an item to your cart")
}

addToCart.addEventListener("click", function () {
    //check for sizeSelected
    for (let i = 0; i < sizeSelected.length; i++) {
        if (sizeSelected[i] == true) {
            var hasSelected = true
            cartAddedItems.innerHTML = `( ` + ++sizeTotal + ` )`
            sizesCount[i]++
            spoilerSizes()
            break
        }
    }
    //if item has been selected, return; otherwise display alert
    if (hasSelected == true) { return }
    sizeNotSelected()
});


//renderCart
let spoiler = document.querySelector("#spoiler")
spoiler.remove()    //remove intial spoiler content
let cartSpoil = document.querySelector("#spoil")
let noOfPrice = document.querySelector("#noPrice")

var ca = [
    function () {
        var cartSmall = spoiler.cloneNode(true);
        cartSmall.querySelector("#spoilSize").id = "cSmall"
        cartSmall.querySelector("#cSmall").innerHTML = "S"
        cartSmall.querySelector("#noPrice").id = 'cSPrice'
        cartSmall.querySelector("#cSPrice").innerHTML = sizesCount[0] + "x"
        return cartSmall
    }

    /*,

    function () {
        var cartMed = spoiler.cloneNode(true);
        cartMed.querySelector("#spoilSize").id = "cartm"
        cartMed.querySelector("#cartm").innerHTML = "M"
        cartMed.querySelector("#noPrice").id = 'cartmprice'
        cartMed.querySelector("#cartmprice").innerHTML = sizesCount[1] + "x"
        return cartMed
    },

    function () {
        var cartLarge = spoiler.cloneNode(true);
        cartLarge.querySelector("#spoilSize").id = "cartl"
        cartLarge.querySelector("#cartl").innerHTML = "L"
        cartLarge.querySelector("#noPrice").id = 'cartlprice'
        cartLarge.querySelector("#cartlprice").innerHTML = sizesCount[2] + "x"
        return cartLarge
    }*/
]

function spoilerSizes() {
    /*for (let i = 0; i < sizesCount.length; i++) {
        cat[i] = ca[i]()
    }*/
    cartSpoil.append(ca[0]())
}

//spoiler
const cartButton = document.querySelector("#cart")
const cartOpacity = document.querySelector("img.cart")
const body = document.querySelector("body")
let spoilerToggle = false


function spoilerClickOn() {
    cartSpoil.classList.replace('hide', 'reveal')
    cartOpacity.style.opacity = "1"
    body.style.color = "var(--clr-fonta)"
    cartButton.style.background = "white"
    cartButton.style.borderColor = "var(--clr-borderlg) var(--clr-borderlg) white"
}

function spoilerClickOff() {
    cartSpoil.classList.replace('reveal', 'hide')
    cartOpacity.style.opacity = "0.4"
    body.style.color = "var(--clr-fontb)"
    cartButton.style.background = "var(--clr-header)"
    cartButton.style.borderColor = "transparent transparent white"
}

cartButton.addEventListener("click", function () {
    if (sizeTotal == 0) {
        cartEmpty()
    }
    else if (spoilerToggle == false) {
        spoilerToggle = true
        spoilerClickOn()
    } else {
        spoilerToggle = false
        spoilerClickOff()
    }
});