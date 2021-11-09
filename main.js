localStorage.setItem("formula", 0)
input = document.getElementById("result")
input.addEventListener("change", (e) => {
  localStorage.setItem("formula", e.target.value)
  i += 1
})
header = document.getElementById("animate")
header.addEventListener("click", function () {
  window.open("https://www.github.com/guilhermea23", "_blank")
})

buttonClear = document.getElementById("clear")
buttonOpenParenthesis = document.getElementById("openParenthesis")
buttonCloseParenthesis = document.getElementById("closeParenthesis")
buttonDivision = document.getElementById("division")
buttonMulti = document.getElementById("multi")
buttonPlus = document.getElementById("plus")
buttonLess = document.getElementById("less")
buttonEqual = document.getElementById("equal")
button1 = document.getElementById("one")
button2 = document.getElementById("two")
button3 = document.getElementById("three")
button4 = document.getElementById("four")
button5 = document.getElementById("five")
button6 = document.getElementById("six")
button7 = document.getElementById("seven")
button8 = document.getElementById("eight")
button9 = document.getElementById("nine")
button0 = document.getElementById("zero")
buttonComma = document.getElementById("comma")
buttonPoint = document.getElementById("point")


buttonClear.addEventListener("click", () => {
  location.reload()
})

buttonOpenParenthesis.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

buttonCloseParenthesis.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

buttonDivision.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

buttonMulti.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

buttonPlus.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

buttonLess.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button1.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button2.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button3.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button4.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button5.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button6.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button7.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button8.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button9.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

button0.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

buttonComma.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})

buttonPoint.addEventListener("click", (e) => {
  input = document.getElementById("result")
  input.innerHTML += " "
  input.innerHTML += e.target.value
  input.innerHTML += " "
})
