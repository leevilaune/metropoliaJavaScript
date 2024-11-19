document.querySelector("#target").classList.add("my-list")
let doc = document.querySelector("#target")
doc.appendChild(document.createElement("li")).textContent = "First Item"
doc.appendChild(document.createElement("li")).textContent = "Second Item"
doc.appendChild(document.createElement("li")).textContent = "Third Item"
