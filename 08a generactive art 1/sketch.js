// generative art 1 (diagonlas lines)
// kaveen
// march 21 2024

let gridSpace = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);

}


function draw() {
  background(220);
  randomSeed(6);
  drawLines();
}

function diagonalAcs(x,y,s){
  line(x-s/2,y+s/2, x+s/2, y-s/2);

}

function diagnonalDesc(x,y,s){
  line(x+s/2,y+s/2, x-s/2, y-s/2);
}


function drawLines(){
  // create diagonal lines on  a grid
  for(let x=0; x<width; x+=gridSpace){
    for(let y=0; y<height; y+=gridSpace){
      let choice = int(random(2));
      if(choice ===0){
        diagnonalDesc(x,y,gridSpace);
      }
      else{
        diagonalAcs(x,y,gridSpace);
      }
      
    }
  }
}