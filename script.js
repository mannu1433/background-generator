var css = document.querySelector("h1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var random = document.querySelector(".random");

// console.log(css);
// console.log(color1);
// console.log(color2);
// console.log(body);

window.addEventListener(document.onload, setGradient());

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandomColor);

function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ","
	+ color2.value
	+ ")";
}

function setRandomColor(){
	color1.value = getRandomColor(); 
	color2.value = getRandomColor();
	setGradient();
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]; 
  
  // Returns a random integer from 0 to 16:

  }

  return color;
}



