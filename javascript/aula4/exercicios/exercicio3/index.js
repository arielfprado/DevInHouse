const body = document.querySelector("body")
const list = document.querySelector("ul")

const inputValue = document.createElement("input")
inputValue.setAttribute("type", "text")

const checkbox = document.createElement("input")
checkbox.setAttribute("type", "checkbox")

const removeButton = document.createElement("button")
removeButton.innerHTML = "Remover"

removeButton.addEventListener("click", () => {
    list.removeChild(list.lastElementChild)
})

const addButton = document.createElement("button")
addButton.innerHTML = "Adicionar"

addButton.addEventListener("click", () => {
    const valor = inputValue.value

    if (valor !== "") {
        const novoElemento = document.createElement("li")
        novoElemento.innerHTML = valor;

        if (checkbox.checked) {
            list.prepend(novoElemento)
        } else {
            list.append(novoElemento)
        }
        
        inputValue.value = "";
    }
})

body.appendChild(checkbox)
body.appendChild(inputValue)
body.appendChild(addButton)
body.appendChild(removeButton)