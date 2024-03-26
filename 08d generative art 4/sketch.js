// generative art - hsb and custom palettes
// Kvaeen
// march 26 2024
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let rectWidth = 50, rectHeight = 10;
let colors = ["#9A9CDE","#998FFE","#675BE2","#3D339C","#342F68"];



function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawRGB(width*0.1);
  drawHSB(width*0.4);
  drawCustom(width*0.7);
}

function drawCustom(x) {
  colorMode(RGB);
  let index = 0;
  for(let y = 0; y<height; y += rectHeight){
    fill(colors[index % 5]);

    fill(colors[int(random(colors.length))])
    rect(x,y,rectWidth,rectHeight);


    index++;
  }

 
}


function drawRGB(x) {
  colorMode(RGB);
  for(let y = 0; y<height; y += rectHeight){
    fill(random(255),random(255),random(255));
    rect(x,y,rectWidth,rectHeight);
  }

 
}

function drawHSB(x) {
  colorMode(HSB);
  for(let y = 0; y<height; y += rectHeight){
    let hue = map(y,0,height,0,360);
    fill(hue,360,360);
    rect(x,y,rectWidth,rectHeight);
  }

 
}