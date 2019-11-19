var splashTextArray = ["Venturing Into The Unknown...",
"Installing Virus...because you dont have virus protection",
"Deleting Windows...wait, nevermind",
"Nope... testa",
"oooooo a game",
"Stop complainin",
"Apple ",
"sqrt (-1) love you, some dont get it",
"Villanger news",		       
"Rage Quit",		       
"Well, Stalked yet again",		       
"Spam!!!!!!!!!!!!!! We love it!!",
];
var splashText = splashTextArray[Math.floor(Math.random()*splashTextArray.length)];

var currentDate = (new Date()).toString();
if(currentDate.indexOf("Jan 01") !== -1){
	splashText = "Happy New Year!";
}
if(currentDate.indexOf("Feb 14") !== -1){
	splashText = "Happy Valentines!";
}
if(currentDate.indexOf("Nov 18") !== -1){
	splashText = "Birth of this game, I say!";
}
if(currentDate.indexOf("Dec 25") !== -1){
	splashText = "Merry Christmas!";
}
if(currentDate.indexOf("Jan 21") !== -1){
	splashText = "Happy Birthday SpiderGamin!";
}
document.getElementById("splashText").textContent = splashText;
