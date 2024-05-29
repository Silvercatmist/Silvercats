// Remember - Capstone maojor project
// Kaveen
// May 22 2024
// memomry card game

// Global variables
let card;
let row;
let col;
// let front = color("blue");
// let back = color("red");

let cardGrid =
  [];


const NUM_ROWS = 4; const NUM_COLS = 4;



function setup() {
  createCanvas(windowWidth, windowHeight);
  // card = new Cards(width / 2, height / 2, 1);
  drawCardGrid();
}

function draw() {
  background(220);
  drawScreen();
  for (let y = 0; y < NUM_ROWS; y++) {
    for(let x = 0; x < NUM_COLS; x++){
      cardGrid[y][x].display()
    }
  }

}

function matchCard() {

}


function drawScreen() {
  // creating the screen background
  rectMode(CENTER);
  fill(204, 229, 255);
  rect(width / 2, height / 2, width / 2 + 380, height / 2 + 120)
}

// function getCurrentX(){
//   let constrainX = constrain(mouseX, 0, width - 1);
//   return int(constrainX / squareSize);
// }

// function getCurrentY(){
//   let constrainY = constrain(mouseY, 0, height- 1);
//   return int(constrainY / squareSize);
// }

function drawCardGrid() {
  // push cards into the array 
  for (let y = 0; y < NUM_ROWS; y++) {
    let cardRow = [];
    for(let x = 0; x < NUM_COLS; x++){
      cardRow.push(new Cards(width/2 * 0.65 + x*100, height/2 * 0.65 + y*100, 1))
    }
    cardGrid.push(cardRow);
  }
}

// function shuffle(){
//   // shuffle the cards with the array
// }
function mousePressed() {
  for (let y = 0; y < NUM_ROWS; y++) {
    for(let x = 0; x < NUM_COLS; x++){
      cardGrid[y][x].mouseEvent()
    }
  }
}

class Cards {
  constructor(x, y, side) {
    this.x = x; this.y = y;
    this.value = "7";
    this.side = side;// 1(blue) is the back , 0(red) is the front
    if (this.side === 1) {
      this.c = color("blue");

    }
    else this.c = color("red");

  }

  mouseEvent() {
    if(dist(this.x, this.y,mouseX, mouseY) < 47){
     if (this.side === 1) {
        this.c = color("red");
        this.side = 0;
      }
      else {
        if (this.side === 0) {
          this.c = color("blue");
          this.side = 1;
        }
      }
      }
  }


  display() {
    fill(this.c);
    noStroke();
    rect(this.x, this.y, 60, 80);

   
  }


  move() {
    // for(let i = 0; )


  }


  
}