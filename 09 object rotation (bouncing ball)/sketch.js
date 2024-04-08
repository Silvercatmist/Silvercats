// Object rotation
// Kaveen
// March 28 2024
// look at object notaion

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  spawnBall(mouseX,mouseY);
}

function spawnBall(initialX, initialY){
  let ball = {
    x: initialX,
    y: initialY,
    radius: 30,
    xSpeed: random(-5,5),
    ySpeed: random(-5,5),
  };
  ballArray.push(ball);
}


function draw() {
  background(220);
  for(let b of ballArray){
    b.x += b.xSpeed;
    b.y += b.ySpeed;
    circle(b.x,b.y,b.radius);
  }
}
