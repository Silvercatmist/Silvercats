// Gradient background + nested loops
// Your Name
// Date
// Creating a gradient + darwing with nested loops

let rectHeight = 10;
let spacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
}

function draw() {
  gardientBackground();
  nestedLoops();
}

function nestedLoops(){
  // using a loop within a loop, generate a grid arrangement
  // for some circles
  for(let x = 0; x < 100; x+=spacing){ // 0 20 40 60 80
    for(let y = 0; y < 100; y+=spacing){
      circle(x,y,10)
    }

  }
}
function gardientBackground(){
  // use a single loop to draw several retangles 
  // then color them into gradients
  let y = 0;
  while(y < height){
    let c = color(mouseX,map(y,0,height,255,0),map(y,0,height,0,255));
    fill(c);
    rect(0,y,width,rectHeight);
    y += rectHeight;
  }
}