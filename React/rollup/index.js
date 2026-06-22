import jsLogo from "./assets/js.jpg"
import "./index.css"
console.log('Hello World!');

let image = document.createElement("img")
image.src = jsLogo
let title = document.createElement("h1")
title.innerText = "I love JavaScript"

document.body.append(title, image)

