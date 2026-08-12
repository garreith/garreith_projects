const button = document.getElementById('button')
const input = document.getElementById('input')
const output = document.getElementById('output')

button.addEventListener('click',
    function() {
        output.textContent = input.value
        input.value = ''
    }
)