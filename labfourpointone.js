//Lab 4 Assignment 1
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 evanCircle (100,150,50);
 evanTry (200,125,200,250,300,150);
 evanQuad (100,250,70);
}


function evanCircle (x,y,w) {
ellipse(x, y, w);
 
}

function evanTry (x1, y1, x2, y2, x3, y3) {
triangle(x1, y1, x2, y2, x3, y3);
 
}

function evanQuad (x, y, s) {
square(x, y, s,);
  
}
