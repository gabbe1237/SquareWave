var r;
var v = 0;
var x;
var y;
var wave = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	r = (8 / PI) * 50;
}

function draw() {
	background(100)
	translate(500, windowHeight / 2)
	ellipse(0, 0, r * 2);
	x = 0; 
	y = 0; 
	drawC();
	wave.unshift(y);
	line(x, y, 200, y) 

	for(var i = 0; i < wave.length; i++){
		strokeWeight(3)
		point(i+200, wave[i]);
	}

	if(wave.length > 800){
		wave.splice(wave.length-1, 100)
	}
}

function drawC() {
	noFill();
	for (var n = 1; n < 9; n += 2) {
		var prevx = x; 
		var prevy = y;
		y += (8 * sin(n * v)) / (n * PI) * 50;
		x += (8 * cos(n * v)) / (n * PI) * 50;
		ellipse(prevx, prevy, 2*((8 / (n * PI)) * 50)) 
		v += 0.004;
	}
}