var hr;
var mn;
var sc;
var scAngle;
var mnAngle;
var hrAngle; 

function setup() {
  createCanvas(400,400);

  angleMode(DEGREES);

}

function draw() {
  background(0); 

  translate(200,200);
  rotate(-90);

  //text("Current hour:" + hr, 50,50);

  hr = hour();
  mn = minute();
  sc = second();
  
  scAngle = map(sc,0,60,0,360);
  mnAngle = map(mn,0,59,0,360);
  hrAngle = map(hr % 12,0,12,0,360);

  stroke(255,0,0);
  strokeWeight(7);

  //translate(30,30);
  //rotate(angle);

  push();
  rotate(scAngle);
  line(0,0,100,0);

  //stroke(0,255,0);
  //strokeWeight(3);
  pop();
  text("Current seconds: " + sc,200,300);

  stroke(0,0,255);
  strokeWeight(7);
  push();
  rotate(mnAngle);
  line(0,0,80,0);
  pop();

  stroke(0,255,0);
  strokeWeight(7);
  push();
  rotate(hrAngle);
  line(0,0,50,0);
  pop();

  if(keyDown("space")){
    console.log(sc);
  }

  drawSprites();
}