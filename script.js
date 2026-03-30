function generateAll(){

const topic=document.getElementById("topic").value;

if(topic==""){
alert("Enter a topic first");
return;
}

const hooks=[
"You won't believe this about "+topic,
"Stop scrolling if you care about "+topic,
"99% of people don't know this about "+topic,
"This "+topic+" trick will blow your mind",
"The truth about "+topic+" nobody tells you"
];

const titles=[
"The Secret of "+topic,
"5 Things About "+topic+" That Will Shock You",
"How "+topic+" Can Change Your Life",
"Most People Fail at "+topic+" Because of This"
];

const ideas=[
"Explain a hidden fact about "+topic,
"Top 3 mistakes people make in "+topic,
"A myth vs reality video about "+topic
];

const scripts=[
"Hook: Stop scrolling if you care about "+topic+"... Story: Most people do this wrong... Twist: The real trick is simple... Ending: Follow for more.",
];

const hashtags=[
"#"+topic+" #viral #shorts #fyp #creator #content"
];

const thumbs=[
"THE "+topic.toUpperCase()+" SECRET",
"STOP DOING THIS",
"NO ONE TELLS YOU THIS"
];

document.getElementById("hook").innerText=random(hooks);
document.getElementById("title").innerText=random(titles);
document.getElementById("idea").innerText=random(ideas);
document.getElementById("script").innerText=random(scripts);
document.getElementById("hashtags").innerText=random(hashtags);
document.getElementById("thumb").innerText=random(thumbs);

}

function random(arr){
return arr[Math.floor(Math.random()*arr.length)];
}
