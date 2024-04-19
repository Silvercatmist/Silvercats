// Class challenge
// Kaveen 
// April 9 2024
// Creating a class based race

let racer;
let circleRacer1;
let circleRacer2;
let circleRacer3;


function setup() {
  createCanvas(windowWidth, windowHeight);
  racer = new Roundracer(180,color("blue"));
  // for(let i= 0; ){
  //   let c = color(random(255));
  //   circleRacer1(new Roundracer(180,c));
  //   circleRacer2(new Roundracer(90,c));
  //   circleRacer3(new Roundracer(200,c));
  // }
  noStroke();
  background(0);
}

function draw() {
  background(220);
  racer.move();
  racer.display();
  // circleRacer1.move();
  // circleRacer1.display();
}



class Roundracer{


  //Constructor
  constructor(y,c){
    this.x = 0; this.y = y; this.c = c;
    this.speed = random(3,15);
    this.size = 5;

  }

  
  //Class Methods
  display(){
    fill(this.c);
    circle(this.x,this.y,this.size);
  }


  move(){
    
    
     this.x += this.speed;
    if(this.x >= width) this.x = 0;
  }
}