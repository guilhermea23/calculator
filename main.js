document.getElementById("animate").addEventListener("click", function () {
  if (window.confirm("Deseja ser direcionado ao repositório deste projeto?")) {
    window.open("https://www.github.com/guilhermea23/calculator", "_blank")
  }
}
)

function factorial(n) {
  if (n <= 1) { //caso base
    return 1
  } else {
    fatorial = n * factorial(n - 1)
    return fatorial
  }
}
buttonEqual = document.getElementById("equal")
buttonSum = document.getElementById("sum")
buttonMulti = document.getElementById("multi")
buttonSub = document.getElementById("sub")
buttonDiv = document.getElementById("div")
buttonClear = document.getElementById("clear")
buttonRest = document.getElementById("rest")
button1 = document.getElementById("b1")
button2 = document.getElementById("b2")
button3 = document.getElementById("b3")
button4 = document.getElementById("b4")
button5 = document.getElementById("b5")
button6 = document.getElementById("b6")
button7 = document.getElementById("b7")
button8 = document.getElementById("b8")
button9 = document.getElementById("b9")
button0 = document.getElementById("b0")
buttonPoint = document.getElementById("b.")
buttonOpenC = document.getElementById("openC")
buttonOpenP = document.getElementById("openP")
buttonCloseC = document.getElementById("closeC")
buttonCloseP = document.getElementById("closeP")
buttonFat = document.getElementById("fat")
buttonPow = document.getElementById("pow")

buttonSum.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonMulti.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonSub.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonDiv.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button0.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button1.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button2.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button3.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button4.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button5.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button6.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button7.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button8.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

button9.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonRest.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonPoint.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonOpenC.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonOpenP.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonCloseC.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonCloseP.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonFat.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonPow.addEventListener("click", (e) => {
  e.preventDefault()
  document.getElementById("operation").textContent += e.target.value
})

buttonClear.addEventListener("click", () => {
  if (document.getElementById("operation").textContent === "") {
    window.alert("A tela já está limpa!")
  } else {
    document.getElementById("operation").textContent = ""
  }
})

buttonEqual.addEventListener("click", () => {
  let input = document.getElementById("operation")
  if (input.textContent === "") {
    window.alert("Impossível calcular!")
  } else {
    formula = input.textContent
    formula.replace("²","**2")
    formula = formula.split(" ").join("")
    formula = formula.replace("0²", "0**2")
    formula = formula.replace("1²", "1**2")
    formula = formula.replace("2²", "2**2")
    formula = formula.replace("3²", "3**2")
    formula = formula.replace("4²", "4**2")
    formula = formula.replace("5²", "5**2")
    formula = formula.replace("6²", "6**2")
    formula = formula.replace("7²", "7**2")
    formula = formula.replace("8²", "8**2")
    formula = formula.replace("9²", "9**2")
    input.textContent = ''
    input.innerHTML += eval(formula)
  }
})

document.getElementById("github").addEventListener("click", () => {
  window.open("https://www.github.com/guilhermea23", "_blank")
})

document.getElementById("insta").addEventListener("click", () => {
  window.open("https://www.instagram.com/guilhermea.23/", "_blank")
})

document.getElementById("linkedin").addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/guilherme-a-8734a2182/", "_blank")
})