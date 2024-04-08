// Replication of art warm up
// Kaveen
// March 27 2024
// replication art using code



function setup() {
  createCanvas(windowWidth, windowHeight);
  ranRectangles();
}

function ranRectangles(){

  for(let i = 0; i < 1500; i++){
      let x = random(width);
  let y = random(height);
  let d = dist(width/2,height/2,x, y);
  if(d<300){
    //
    // fill();
    rect(x,y,10,30);
    rect(x,y,10,10);
  }
    

  }
}


function draw() {
  // background(220);
}
