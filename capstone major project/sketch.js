// Remember - Capstone maojor project
// Kaveen
// May 22 2024
// memomry card game

// Global variables
let card;
let row;
let col;

let cardGrid = 
[[0,0,0]
[0,0,0]
[0,0,0]];

let squareSize = 10;
const NUM_ROWS = 3; const NUM_COLS = 3;



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawScreen();
}


function drawScreen(){
  // creating the screen background
  rectMode(CENTER);
  fill(204,229,255);
  rect(width/2,height/2,width/2 + 380, height/2 + 120)
}

function getCurrentX(){}
function getCurrentY(){}

function drawCardGrid(){}


class Cards {
  constructor(x,y,side){
    this.x = x; this.y = y;
    this.c = c;
    this.side = side;
    this.value = value;
  }


  display(){}


  move(){}


  action(){}
}