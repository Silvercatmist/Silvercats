// generative art 
// Kaveen
// march 25 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  background(220);
  angleMode(DEGREES);
  stroke(0,80)
}

function randonElement(currentLen){
  //create one ragular line
  // rotate transformation
  push();
  rotate(random(360));
  while(currentLen> 5 ){
    rotate(random(-40,40));
    line(0,0,0,currentLen);
    translate(0,currentLen);
    currentLen *= 0.75;
  }
 pop();
  
}



function draw() {
  translate(width/2,height/2);
  for(let i = 0; i< 600; i++){
    randonElement(random(50,80));
  }
  
  
}
