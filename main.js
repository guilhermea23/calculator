document.getElementById("animate").addEventListener("click", function () {
  if (window.confirm("Deseja ser direcionado ao repositório deste projeto?")) {
    window.open("https://www.github.com/guilhermea23", "_blank")
  }
}
)

buttonClear = document.getElementById("clear")
buttonEqual = document.getElementById("equal")

buttonClear.addEventListener("click", () => {
  if (document.getElementById("operation").textContent === "") {
    window.alert("A tela já está limpa!")
  } else {
    document.getElementById("operation").textContent = ""
  }
})

buttonEqual.addEventListener("click", () => {
  input = document.getElementById("operation")
  if (input.textContent === "") {
    window.alert("Impossível calcular!")
  } else {
    formula = input.textContent
    formula = formula.split(" ").join("")
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