// Project Title
// kaveen
// may 6
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  // concentricCircle(width); //recursion 1
  // cantor(width*0.1,height*0.3,width*0.8,7);
  noFill();
  circleFractal(width/2,height/4,width/2,10);
}

function circleFractal(x,y,diameter,depth){
  if(depth>0){
    circle(x,y,diameter);


    circleFractal(x-diameter/2,y,diameter/2,depth-1);
    circleFractal(x+diameter/2,y,diameter/2,depth-1);
    circleFractal(x,y+diameter/2,diameter/2,depth-1);
  }
}





function cantor(x,y,len,depth){
  if(depth>1){ //depth===0 means stop recursion
    rect(x,y,len,10);
    y += 20;
    cantor(x,y,len/3,depth-1);
    cantor(x+len*2/3,y,len/3,depth-1);
  }

}







// recursive 1 - concentric circles
function concentricCircle(diameter){
  if(diameter > 10){
  //recursivly draw circles at canvas cenetr using diametre
  circle(width/2,height/2,diameter);
  concentricCircle(diameter-10);
  }
  //implicit  base case
}