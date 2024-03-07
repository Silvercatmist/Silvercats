// Noisy Numbers
// Kaveen
// March 7 2024
// A look at randomness

let segmentL = 3;

let ballY = 200; let ySpeed;
let ballTime = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function segLine(){
  // using a loop draw one line made up of many lines
  let greyTime = 0;
  strokeWeight(15);

  let x = 0;
  while(x < width){
    // option 1: random()
    let greyValue = random(0,255);

    // option 2: perlin noise()
    greyValue = noise(greyTime);
    greyValue = map(greyValue, 0, 1, 0, 255)
    greyTime += 0.1;


    stroke(greyValue);
    line(x, height/2, x+segmentL, height/2);
    x += segmentL;
  }
}

function moveBall(){
  strokeWeight(1); stroke(0);
  // option 1: random()
  ySpeed = random(-20,20);

  //option 2: perlin noise()
  ySpeed = noise(ballTime);
  ySpeed = map(ySpeed, 0, 1, -10, 10);
  ballTime += 0.03;



  ballY += ySpeed;
  circle(width*0.7, ballY, 30);
}

function draw() {
  background(220);
  segLine();
  moveBall();
}
