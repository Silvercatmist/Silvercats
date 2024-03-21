// cubic disarray
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let gridSpace = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  angleMode(DEGREES);
  noFill();
  drawDisarray();
  
}

function drawDisarray(){
  for(let x= gridSpace/2; x<width; x+=gridSpace){
    for(let y = gridSpace/2; y< height; y+=gridSpace){
      push();
      translate(x,y);
      let rAmount = map(y, 0, height, 1, 45);
      rotate(random(-rAmount,rAmount));
      
      let offSet = map(y, 0, height, 0, 15)
      square(random(-offSet,offSet),random(-offSet,offSet), gridSpace);
      pop();
    }
  }
}

function draw() {
  
}
