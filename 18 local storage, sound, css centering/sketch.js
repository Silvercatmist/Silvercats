// Css centering, sound, and local storage
// kaveen
// may 7 2024

let music, bounceSound;
let started = false;
let pos; let vel;
let totalBounces = 0;

function preload(){
  //
  music=loadSound("assets/background.mp3");
  bounceSound=loadSound("assets/bounceSound.wav");
}



function setup() {
  createCanvas(400, 300);
  pos = createVector(width/2,height/2);
  vel = createVector(5,3);
  textSize(30);
  textAlign(CENTER);
  if(localStorage.getItem("bounce")===null){
    localStorage.setItem("bounce",0);
  }
  else{
    totalBounces = int(localStorage.getItem("bounce"));
  }
  
}

function draw() {
  background(220);
  if(started === false){
    text("Click to begin.",width/2,height/2);
    if(mouseIsPressed){
    started = true;
    music.setVolume(0.3);
    music.loop();
    }
  }
  else{
    updateBall();
    text(totalBounces, width/2,height/2);
  }
}

function updateBall(){
  pos.add(vel);
  if(pos.x < 0 || pos.x > width){
    bounceSound.play();
    vel.x *= -1;
    totalBounces++
    localStorage.setItem("bounce", totalBounces);
  }
  if(pos.y < 0 || pos.y > height){
    bounceSound.play();
    vel.y *= -1;
    totalBounces++
    localStorage.setItem("bounce", totalBounces);
  }
  circle(pos.x,pos.y,20);
}
