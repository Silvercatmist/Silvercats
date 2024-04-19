// Replication of art warm up
// Kaveen
// March 27 2024
// replication art using code



function setup() {
  createCanvas(windowWidth, windowHeight);
  ranRectangles();
  angleMode(DEGREES);
}

function ranRectangles(){

  for(let i = 0; i < 1500; i++){
      let x = random(width);
  let y = random(height);
  let d = dist(width/2,height/2,x, y);

  
  if(d<100){
   
    rect(x,y,10,30);
    rect(x,y,10,10);

  
    // translate(80,0);
    let rAmount = map(d, width/2, height/2, 1, 0);
    rotate(random(-rAmount,rAmount));
    
  }
 

  }
}


function draw() {
  // background(220);

}
