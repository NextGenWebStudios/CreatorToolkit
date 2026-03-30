fetch("data.json")
.then(response => response.json())
.then(data => {

const container = document.getElementById("tools")

data.forEach(tool => {

const div = document.createElement("div")

div.innerHTML = `

<h2>${tool.name}</h2>

<p>${tool.description}</p>

<button onclick="generate('${tool.name}')">

Open Tool

</button>

`

container.appendChild(div)

})

})

function generate(name){

const ideas = [

"Hidden features most people miss",
"Top 5 apps creators must know",
"You won’t believe this trick",
"This changed my YouTube growth",
"Secrets creators never share"

]

const random = Math.floor(Math.random()*ideas.length)

alert(name + " result:\n\n" + ideas[random])

}
