function generateHook(){

const hooks = [

"You won't believe this trick...",
"This secret changed everything...",
"Stop scrolling if you want more views...",
"99% of creators don't know this...",
"This hack will blow your mind..."

];

const random = hooks[Math.floor(Math.random()*hooks.length)];

document.getElementById("hook").innerText = random;

}
