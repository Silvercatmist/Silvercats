//Perlin Noise
// Kaveen
// march 11 2024
// using perlin noise to replicate perlin noise


let segmentL = 10;
let colorTime = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  segLine();

}
function segLine(){
  let x = 0;
 
    let colorValue1 = noise(colorTime);
    colorValue1 = map(colorValue1, 0, 1, 0, 255);


    line(x, 200,height/2, x+segmentL, height);
    x += segmentL;
    strokeWeight(20);
    
  

}
