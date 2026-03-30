function generateHook(){

const hooks = [
"You won't believe this trick...",
"This changed everything...",
"Stop scrolling right now...",
"Nobody talks about this...",
"This secret will shock you..."
];

const random = hooks[Math.floor(Math.random()*hooks.length)];

document.getElementById("hook").innerText = random;

}
