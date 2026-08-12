const inputName = document.getElementById('inputName')
const inputAge = document.getElementById('inputAge')
const button = document.getElementById('button')
const ul = document.getElementById('ul')
let array = []

button.onclick = () => {
    if (inputName.value === '') return

    if (inputAge.value === '') return

    array.push({ name: inputName.value, age: inputAge.value })

    ul.innerHTML = ''

    array.forEach(item => {
        const li = document.createElement('li')
        li.textContent = item.name + ' (' + item.age + ')'
        ul.appendChild(li)
    })

    inputName.value = ''
    inputAge.value = ''

}

