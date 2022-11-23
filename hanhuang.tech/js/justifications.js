// animate habbit section
const habbitToggle = document.querySelector("#habbit-toggle");

habbitToggle.addEventListener("click", function () {
  document.body.classList.toggle("habbit-move")
});

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


// replace angle brackets in html
