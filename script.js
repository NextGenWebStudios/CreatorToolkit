function generateHook(){

const topic = document.getElementById("topic").value;

const hooks = [

"You won't believe this about "+topic,
"Stop scrolling if you care about "+topic,
"99% of people don't know this about "+topic,
"This "+topic+" trick will shock you",
"The truth about "+topic+" nobody tells you"

];

const random = hooks[Math.floor(Math.random()*hooks.length)];

document.getElementById("hook").innerText = random;

}
