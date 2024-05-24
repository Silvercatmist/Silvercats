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
  [[]];


const NUM_ROWS = 3; const NUM_COLS = 3;



function setup() {
  createCanvas(windowWidth, windowHeight);
  card = new Cards(width / 2, height / 2, 0);
}

function draw() {
  background(220);
  drawScreen();
  card.display();
  card.move();
}

// function mouseClicked() {
 
// }


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

// function drawCardGrid(){
//   // push cards into the array in pairs
// }

// function shuffle(){
//   // shuffle the cards with the array
// }


class Cards {
  constructor(x, y, side) {
    this.x = x; this.y = y;
    this.value = "7";
    this.side = side;// 1 is the back , 0 is the front
    if (this.side === 0) {
      this.c = color("red");

    }
    else this.c = color("blue");

  }


  display() {
    fill(this.c);
    noStroke();
    rect(this.x, this.y, 40, 60);


  }



  move() {
    if(keyIsPressed === true){
      if(this.c === color("red")){
        this.c = color("blue");
       
      }

   }


  }


  action() { }
}