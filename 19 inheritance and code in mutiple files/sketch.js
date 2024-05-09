// inheritance  + using multiple files
// kaveen
// may 9 2024

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i<10; i++){
    objects.push(new AnimatedObject(random(width),random(height)));
    objects.push(new CircleObj(random(width),random(height)));
    objects.push(new LineObj());
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move();
    o.display();
  }
}


//parent class (or super class)


// child class 1 - circle
class CircleObj extends AnimatedObject{
  constructor(x,y){
    super(x,y); //calls the parent class constructor
    this.size = random(20,40);

  }


  display(){ //function override
    strokeWeight(2);
    if(dist(this.x,this.y,mouseX,mouseY)<this.size/2){
      fill(255,0,0);

    }
    else fill(255);

    circle(this.x, this.y,this.size);
  }
}

// child class 2- line
class LineObj extends AnimatedObject{
  constructor(){
    super(random(width), random(height));
  }

  move(){
    super.move();
    this.x -= 5;
    if(this.x < 0) this.x = width
  }

  display(){
    if(mouseIsPressed) strokeWeight(10);
    else strokeWeight(2);
    line(this.x,this.y,this.x+15,this.y);
  }
}