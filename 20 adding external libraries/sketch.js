// sample external libraries
// kaveen
// may 10 2024

let scribble = new Scribble();

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(4);
}

function draw() {
  background(220);
  strokeWeight(4);
  scribble.scribbleLine(width/2,height/2,mouseX,mouseY);
  let radius = dist(width/2, height/2, mouseX, mouseY);
  scribble.scribbleEllipse(width/2,height/2,radius*2,radius*2);
}
