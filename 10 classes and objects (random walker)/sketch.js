// classes and objects 
// kaveen
// april 8 2024
//

// let myWalker;
let walkers = [];
const NUM_WALKERS = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // myWalker = new Walker(width/2,height/2,color("red"));
  // myWalker2 = new Walker(50,50,color("blue"));
  for(let i = 0; i < NUM_WALKERS; i++){
    let c = color(random(255),random(255),random(255));
    walkers.push(new Walker(width/2,height/2,c));
  }
  noStroke();
  background(0);
}

function draw() {
  // background(220);
  for(let w of walkers){
    w.move();
    w.display();
  }

  
}

class Walker{

  //Consrtucter
  constructor(x,y,c){
    this.x = x; this.y = y; this.c = c;
    this.speed = random(2,10);
    this.size = 5;
  }

  //Class Methods
  display(){
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);
  }

  move(){
    let choice =Math.floor(random(4));
    if(choice === 0) this.x -= this.speed;
    else if (choice === 1) this.x += this.speed;
    else if( choice === 2) this.y -= this.speed;
    else if( choice === 3) this.y += this.speed;
  }
}