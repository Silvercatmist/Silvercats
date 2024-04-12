// Terrain Generation starter
// Kaveen
// March 11 2024
// precedurally generated 2d terrain

let rectWidth = 20;
let rectTime = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  rectMode(CENTER);
  drawRectangles();
}

function drawRectangles(){
  // using a single loop, generate a bunch of side-to=side
  //
  let rectHeight;
  let highest = 0;
  let highestX = 0;
  fill(0);
  for(let x = 0; x< width; x += rectWidth){
    //option 1 - pattern
    // rectHeight = x;

    //option2 - random
    rectHeight = random(0, height*0.8);

    //option 3 perlin noise
    rectHeight = noise(rectTime);
    rectHeight = map(rectHeight,0,1,0, height);
    rectTime += 0.1; 

    if(rectHeight > highest ){
      highest = rectHeight;
      highestX = x;
    }

    rect(x, height,rectWidth, rectHeight);
  }
  print(highestX,highest);
  drawFlag(highestX,height - highest/2);
}

function widthChange(){
  // using the arrow keys to change the width of the terrain
  if(keyIsPressed){
    
    if(keyCode === LEFT_ARROW){
      //console.log("a",rectWidth)
      rectWidth -= 10;
      rectWidth = constrain(rectWidth, 10, width/2);
      background(255);
      drawRectangles();
    
    }
    else if(keyCode === RIGHT_ARROW){
     // console.log("b",rectWidth)
      rectWidth += 10;
      background(255);
      drawRectangles();
    }

    

  }
}


function drawFlag(x,y){
  let rectangleHeight = 20;
  let rectangleWidth = 5;
  // let triHeight = 20;
  fill(255,0,0);
  rect(x,y,rectangleWidth,rectangleHeight);
  triangle(x,y,x,y-10,x+10,y-5);


}

function highestPeak(){

}

function draw() {
  widthChange();
}
