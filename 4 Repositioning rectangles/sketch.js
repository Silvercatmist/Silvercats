// Repositioning Rectangles
// Kaveen
// March 6 2024
// Creating some geometry that can be picked up and moved around


let x, y, rWidth, rHeight;
let rLeft, rRight, rTop, rBottom
let pickedUp = false;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2; y = height/2;
  rWidth = 200; rHeight = 100;
}

function drawRectangle(){
  updateEdgePossisions();
  rect(x,y,rWidth,rHeight)
  print("l:",rLeft,"\tT:",rTop, "\tR:", rRight, "\b",rBottom)


  if(inRectangles()){
    fill(100,250,150);
  }
  else{
    fill(255);

  }
  rect(x,y,rWidth,rHeight);
}

function inRectangles(){
  if(mouseX < rRight && muoseX > rLeft){
    if(mouseY > rTop && mouseY < )
  }

  return false;
}

function updateEdgePossisions( ){
  rLeft = x - rWidth/2; rRight = x + rWidth/2;
  rTop = y - rHeight/2; rBottom = y+ rHeight/2;
}

function draw() {
  background(220);
  drawRectangle();
}
