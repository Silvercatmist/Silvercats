// Cars Cars cars
// Kaveen
// April 15 2024
//

let eastbound = [];
let westbound = [];
let car = 0;
let truck = 1;
let numberPicked;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // car = new Vehicle(width/2,height/2);
}

function numberPicked(){
  random
}

function drawRoad(){
  // let x = 30;
  // let y = 80;
  rectMode(CENTER);
  fill(0);
  rect(width/2,height/2,height+20,150)


  for( let x = 0; x < width; x+=50){
    
      stroke("yellow");
      strokeWeight(5);
      line(x,height/2,x+30,height/2)
    
  }


}


function draw() {
  background(220);
  drawRoad();
  car.display();
}


class Vehicle{
  constructor(x,y){
    this.car = car; this.truck = truck;
    this.c = c; this.x = x; this.y = y;
    this.xSpeed = xSpeed; 
    this.left = 0; this.right = 1;
  }

  display(){
    //
    if(numberPicked === 0){

    }
    
    
  }


  move(){
    //
  }


  speedUp(){
    //
  }

  speeDown(){

  }


  changeColor(){

  }


  action(){

  }
}
