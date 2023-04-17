console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const image = document.querySelector('img')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const name = search.value

    messageOne.textContent = 'Loading ...'
    messageTwo.textContent = ' '

    fetch('/pokedex?name=' + name).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                messageOne.textContent = (data.name)
                messageTwo.textContent = (data.pokeIMG)
                image.src = (data.pokeIMG)
            }
        })
    })
})