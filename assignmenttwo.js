//Lab 4 Assignment 2
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
 evanCircle (100,150,50, 100,30,100);
 evanTry (200,125,200,250,300,150,20,100,200);
 evanQuad (100,250,70,250,0,50);
}


function evanCircle (x,y,w, R, G, B) {
 fill (R, G, B)
  ellipse(x, y, w);
  
 
}

function evanTry (x1, y1, x2, y2, x3, y3, R, G, B) {
  fill (R, G, B)
triangle(x1, y1, x2, y2, x3, y3);
 
}

function evanQuad (x, y, s, R, G, B) {
   fill (R, G, B)
square(x, y, s,);
  
}
