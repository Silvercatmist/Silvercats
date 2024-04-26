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
  car = new Vehicle(width/2,height/2,1);
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
  constructor(x,y,dir){
    this.x = x; this.y = y; 
    this.dir = dir; // 0 is east, 1 is west
    this.xSpeed = random(0,15);
    this.left = 0; this.right = 1;
    this.type = int(random(0,2));
  }

  display(){
    //
    

    if(this.type === 0){
      fill("red");
      noStroke();
      rect(this.x,this.y,30,20);


    }
    else{
      fill("blue");
      noStroke();
      rect(this.x,this.y,70,50);
      // rect(this.x,this.y,20,10);


      // strokeWeight(3);
      // stroke("purple")
      // line(this.x,this.y,this.x,this.y);
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
    // let color = 0;
    // if(color === car){
    //   color = random(this.c);
    // }
    // if(color === truck){
    //   color = random(this.c);
    // }

  }


  action(){

  }
}
