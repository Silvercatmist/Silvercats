// Cars Cars cars
// Kaveen
// April 15 2024
// Creating a cars program using classes

let eastbound = [];
let westbound = [];
let car = 0;
let truck = 1;
let numberPicked;
let vehicleLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // car = new Vehicle(width / 2, height / 2, 0);
  // creating 20 cars in each direction using a for loop
  for (let i = 0; i < 20; i++) {
    let x = random(0, width);
    let y = random(height * 0.50, height * 0.56);
    eastbound.push(new Vehicle(x, y, 0));
  }
  for (let i = 0; i < 20; i++) {
    let x = random(0, width);
    let y = random(height * 0.44, height * 0.47);
    westbound.push(new Vehicle(x, y, 1));

  }
  vehicleLight = new TrafficLight(width / 2, height * 0.88);
}

function mouseClicked(){
  //adding more cars in ecah direction
  if(keyIsPressed && keyCode === SHIFT){
    let x = random(0, width);
    let y = random(height * 0.44, height * 0.47);
    westbound.push(new Vehicle(x, y, 1));
  }
  else{
    let x = random(0, width);
    let y = random(height * 0.50, height * 0.56);
    eastbound.push(new Vehicle(x, y, 0));
  }
}


function drawRoad() {
  //creating the road
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, height + 40, 160)


  for (let x = 0; x < width; x += 50) {

    stroke("yellow");
    strokeWeight(5);
    line(x, height / 2, x + 30, height / 2)

  }


}


function draw() {
  background(220);
  drawRoad();
  for (let c of eastbound) {
    c.action();
  }
  for (let t of westbound) {
    t.action();
  }
  vehicleLight.display();


}


class Vehicle {
  constructor(x, y, dir) {
    this.x = x; this.y = y;
    this.dir = dir; // 0 is east, 1 is west
    this.xSpeed = int(random(0, 15));
    this.type = int(random(0, 2));
    this.c = color(random(255), random(255), random(255));

  }

  display() {
    //


    if (this.type === 0) {
      fill(this.c);
      noStroke();
      rect(this.x, this.y, 30, 20);


    }
    else {
      fill(this.c);
      noStroke();
      rect(this.x, this.y, 60, 40);
      // rect(this.x,this.y,this.x/2,thisx.y/2);


    }

  }


  move() {
    // setting traffic light and car instruction 
  if(vehicleLight.light === "green"){
     
    if (this.dir === 0) {
      this.x += this.xSpeed;
      if (this.x > width) {
        this.x = 0;
      }
    }
    else if (this.dir === 1) {
      this.x -= this.xSpeed;
      if (this.x < 0) {
        this.x = width;
      }
    }
  }
  
  }


  speedUp() {
    //
    if (this.xSpeed < 15) {
      this.xSpeed += 1;
    }

  }

  speedDown() {
    if (this.xSpeed > 0) {
      this.xSpeed -= 1;
    }



  }
  changeColor() {
    // let choice = int(color(random(255)));
    this.c = color(random(255), random(255), random(255));



  }


  action() {
    this.move();
    this.display();
    let roll = int(random(100));//0-99
    if (roll === 20) {
      this.speedUp();
    }
    if (roll === 5) {
      this.speedDown();
    }
    if (roll === 98) {
      this.changeColor();
    }


  }


}

class TrafficLight {
  // craeting traffic lights for cars
  constructor(x, y) {
    this.x = x; this.y = y;
    this.light = "green";
    this.countDown = 0;
  }

  display() {

    if (keyIsPressed === true) {
      if (keyCode === 32) {
        this.light = "red";
        this.countDown = 120;

      }
    }
    if (this.light === "green") {
      fill("green");
    }
    else {
      fill("red");
      this.countDown -= 1;
      if (this.countDown === 0) {
        this.light = "green";
      }
    }



    circle(this.x, this.y, 10);
  }


}

