// working with forces
// Kaveen
// april 22 2024
// making a simple particle system (using vectors)

let particles =[];
let gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  gravity = createVector(0,0,1);
}

function mousePressed(){
  particles.push(new particle(mouseX,mouseY));
}


function draw() {
  background(220);
  for(let i = 0; i < 2; i++){
    let p = particles[i];
    p.move();
    p.display();
    if(p.alive===false){
      particles.splice(i,1);
    }
  }
}



class particle{
  constructer(x,y){
    this.position = createVector(x,y); this.s = 20;
    this.velocity = createVector(random(-3,3),random(-5,-3));
    this.c = color(0,100,random(150,225),100);
    this.alive = true;
  }



  move(){
    this.velocity.add(gravity);


    this.position.add(this.velocity);
    if (this.position.y > height){
      this.alive = false;
    }

    if(this.position.x < 0){
      this.position.x = 0;
      this.velocity.x *= -1;
    }

  }


  display(){
    fill(this.c);  noStroke();
    push();
    translate(this.position.x, this.position.y);
    circle(0,0,this.s);
    pop();
  }
}