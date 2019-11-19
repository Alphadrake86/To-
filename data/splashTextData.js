var splashTextArray = ["Venturing Into The Unknown...",
"Installing Virus...because you dont have virus protection",
"Deleting Windows...wait, nevermind",
"Nope... testa",
];
var splashText = splashTextArray[Math.floor(Math.random()*splashTextArray.length)];

var currentDate = (new Date()).toString();
if(currentDate.indexOf("Jan 01") !== -1){
	splashText = "Happy New Year!";
}
if(currentDate.indexOf("Feb 14") !== -1){
	splashText = "Happy Valentines!";
}
if(currentDate.indexOf("Sep 12") !== -1){
	splashText = "6 Month Anniversary! V0.5 Released!";
}
if(currentDate.indexOf("Dec 25") !== -1){
	splashText = "Merry Christmas!";
}
document.getElementById("splashText").textContent = splashText;
