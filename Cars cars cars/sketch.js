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
    this.carX = x; this.truckX = x; this.carY = y; this.truckY = y;
    this.c = c; 
    this.xSpeed = xSpeed; 
    this.left = 0; this.right = 1;
  }

  display(){
    //
    let numberPicked = random(0,1);

    if(numberPicked === 0){
      fill("red");
      rect(this.carX,this.carY,20,30);

    }
    else{
      fill("blue");
      rect(this.truckX,this.truckY,50,70);
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
