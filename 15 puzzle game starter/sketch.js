// Puzzle Game Starter
// kaveen
// April 23, 2024

let grid =
  [[0, 255, 0, 255, 0],
  [0, 0, 255, 0, 0],
  [0, 255, 255, 0, 255],
  [255, 255, 0, 255, 255]
  ];

let squareSize = 50;
const NUM_ROWS = 4; const NUM_COLS = 5;

let row, col;

function setup() {
  createCanvas(NUM_COLS * squareSize, NUM_ROWS * squareSize);
  randomize();
}

function draw() {
  col = getCurrentX();
  row = getCurrentY(); //print(col, row);
  background(220);
  drawGrid();
  win();
}

function randomize() {
  // once called will randomize the starting board
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let choice = int(random(0, 2));
      if (choice === 1) {
        grid[y][x] = 0;
      }
      else {
        if (choice === 0) {
          grid[y][x] = 255;
        }
      }

    }

  }
}

function win() {
  // tracking score and deciding whether you win or not
  let score = 0;
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      if (grid[y][x] === 0) {
        score += 1;
      }
      if (grid[y][x] === 255) {
        score -= 1;
      }


    }
  }

  if (score === 20) {
    console.log("you win");
    fill("white");
    text("you win", width / 2, height / 2);
  }
  else if (score === -20) {
    console.log("you win");
    fill("black");
    text("you win", width / 2, height / 2);
  }
  else console.log("you lose");

}


function mouseCliked() {
  if (keyIsPressed && keyCode === SHIFT) {
    flip(col, row);
  }
}

function mousePressed() {
  //only do something if mouseX/mouseY are on the canvas...

  // always: flip the current tile

  flip(col, row);

  //depends a bit on position

  flip(col, row + 1);
}

function flip(x, y) {
  if (grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

function getCurrentY() {
  //determine current row of mouse, and return
  let constrainY = constrain(mouseY, 0, height - 1);
  return int(constrainY / squareSize);
}

function getCurrentX() {
  //determine the current column of the mouse, and return
  let constrainX = constrain(mouseX, 0, width - 1);
  return int(constrainX / squareSize);
}

function drawGrid() {
  // Read data from our 2D Array (grid), and use the 
  // numbers there to set the color for squares which are
  // arranged in a grid fashion.
  for (let y = 0; y < NUM_ROWS; y++) {
    for (let x = 0; x < NUM_COLS; x++) {
      let fillValue = grid[y][x];
      fill(fillValue);
      //             x:   0 ,   1,     2,    3,     4  
      //squareSize*x:     0     50    100    150    200
      square(x * squareSize, y * squareSize, squareSize);
    }
  }
}
