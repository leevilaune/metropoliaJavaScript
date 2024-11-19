'use strict';
const names = ['John', 'Paul', 'Jones'];
let doc = document.querySelector("#target")
names.forEach(name => {
    doc.innerHTML += `<li>${name}</li>`
})