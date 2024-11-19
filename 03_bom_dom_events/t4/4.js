'use strict';
const students = [
  {
    name: 'John',
    id: '2345768',
  },
  {
    name: 'Paul',
    id: '2134657',
  },
  {
    name: 'Jones',
    id: '5423679',
  },
];
let doc = document.querySelector("#target")
students.forEach(student => {
    let option = doc.appendChild(document.createElement("option"))
    option.textContent = student.name;
    option.id = student.id;
})
