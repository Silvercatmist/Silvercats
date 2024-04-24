// Replication of art warm up
// Kaveen
// March 27 2024
// replication art using code



function setup() {
  createCanvas(windowWidth, windowHeight);
   fill(100);
  ranRectangles();
  // angleMode(DEGREES);
 
}

function ranRectangles(){

  for(let i = 0; i < 1500; i++){
      let x = random(width);
  let y = random(height);
  let d = dist(width/2,height/2,x, y);

  
  if(d<300){
    let rectChance = random(0,100);
   if(rectChance < 33){
     rect(x,y,10,30);
   }
   else if(rectChance < 66){
    rect(x,y,30,10);
   }
   else{
    rect(x,y,10,10);
   }
  }
            
  }
  
}


function draw() {
  // background(220);

}
