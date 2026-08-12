const input = document.getElementById('input')
const button = document.getElementById('button')
const ul = document.getElementById('ul')
let array = []

button.onclick = () => {
    if (input.value === '') return

    array.push(input.value)

    ul.innerHTML = ''

    array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item
        ul.appendChild(li)
    })

    input.value = ''
}