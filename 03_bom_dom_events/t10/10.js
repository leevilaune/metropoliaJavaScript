const form = document.querySelector('#source');
const target = document.querySelector('#target');

form.addEventListener("submit", event => {
    event.preventDefault()

    target.innerHTML = 'Your name is ' + form.firstname.value + ' ' + form.lastname.value
})