// Multi-colored grid
// Kaveen 
// March 13 2024
// creating a gid with multiple colors and some functions


squareHeight = 10;



function setup() {
  createCanvas(windowWidth, windowHeight);
  squareGrid();
  document.addEventListener("contextmenu", event => event.preventDefault())
  
  
}

function draw() {
  // background(220);
  squareChange();
  refresh();
}

function squareChange(){
  // changing the size of the grid with the mouse
  if ( mouseIsPressed){
    if(mouseButton === LEFT){
      squareHeight += 10;
      squareGrid();
      

      
    }
   if(mouseButton === RIGHT){
    if(squareHeight > 0){
      squareHeight -= 10;
      squareGrid();
    }
   }
  }
  

}

function refresh(){
  // changing the colors of the grid by pressing a key on the keyboard
  if(keyIsPressed){
    let gridColor1 = random(255);
    fill(gridColor1);
    squareGrid();
   
    
  }

}

function squareGrid(){
  // creating the grid with the random colors
  let y = 0;
  while(y < height){
        let x = 0;
    while(x < width){
      square(x,y,squareHeight);
      x += squareHeight;

      

     let color = (0,255);
     let c = random(255); let c2 = random(255); let c3 = random(255);
     fill(c,c2,c3);

     
    
    }
  y += squareHeight;
  
}
}