var r;
var t = 0;
var x;
var y;
var wave = [];
var slider;

function setup() {
	slider = createSlider(1, 100, 4)
	createCanvas(windowWidth, windowHeight);
	//Radien multipliceras med en konstant för en större cirkel. 
	r = (8 / PI) * 50;
}

function draw() {
	background(255)
	// Definerar  vart  origo  sitter.
	translate(500, windowHeight / 2)

	textSize(30)
	fill(0)
	text("n = " + slider.value(), -400, -200);
	noFill();

	ellipse(0, 0, r * 2);
	x = 0; 
	y = 0; 

	drawC();
	//Lägger till alla y-väden av vågen till listan "wave".
	wave.unshift(y);
	line(x, y, 200, y) 

	//Ritar vågen.
	beginShape();
	for(var i = 0; i < wave.length; i++){
		vertex(i + 200, wave[i]);
	}
	endShape()

	//Tar bort punkter från listan för att den inte ska bli för stor.
	if(wave.length > 800){
		wave.splice(wave.length-1, 100)
	}
}

// Funktionen  ritar  alla  cirklar.
function drawC() {
	noFill();
	for (var i = 0; i < slider.value(); i ++) {
		n = i*2 +1
		var prevx = x; 
		var prevy = y;
		y += (8 * sin(n * t)) / (n * PI) * 50;
		x += (8 * cos(n * t)) / (n * PI) * 50;
		line(prevx, prevy, x, y);
		strokeWeight(8)
		stroke(255, 102, 102)
		point(x, y);

		strokeWeight(1)
		stroke(0)
		ellipse(prevx, prevy, 2*((8 / (n * PI)) * 50)) 
	}
	//Jag låter tiden ständigt öka. Ändrar man denna, ändrar man perioden.
	t += 0.04;
}