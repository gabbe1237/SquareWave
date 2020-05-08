var r;
var v = 0;
var x;
var y;
var wave = [];
var slider;

function setup() {
	slider = createSlider(1, 100, 4)
	createCanvas(windowWidth, windowHeight);
	r = (8 / PI) * 50;
}

function draw() {
	background(255)
	translate(500, windowHeight / 2)
	textSize(30)
	fill(0)
	text("n = " + slider.value(), -400, -200);
	noFill();
	ellipse(0, 0, r * 2);
	x = 0; 
	y = 0; 
	drawC();
	wave.unshift(y);
	line(x, y, 200, y) 

	beginShape();
	for(var i = 0; i < wave.length; i++){
		vertex(i + 200, wave[i]);
	}
	endShape()

	if(wave.length > 800){
		wave.splice(wave.length-1, 100)
	}
}

function drawC() {
	noFill();
	for (var i = 0; i < slider.value(); i ++) {
		n = i*2 +1
		var prevx = x; 
		var prevy = y;
		y += (8 * sin(n * v)) / (n * PI) * 50;
		x += (8 * cos(n * v)) / (n * PI) * 50;
		// line(prevx, prevy, x, y);
		strokeWeight(8)
		stroke(255, 0, 0)
		point(x, y);
		strokeWeight(1)
		stroke(0)
		ellipse(prevx, prevy, 2*((8 / (n * PI)) * 50)) 
	}
	v += 0.04;
}