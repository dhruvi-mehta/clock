//variables to track time angle of each "hand"
let secondAngle;
let minuteAngle;
let hourAngle;
let time;
let c;
let d;

function setup() {
  createCanvas(500,500);
  //work in degrees
  colorMode(RGB);
  angleMode(DEGREES);
  
} //ends setup

function draw() {
  //define time variables
  background(30, 15, 40, 80);
  time = {
    sc: second(),
    mn: minute(),
    hr: hour(),
  }

//line pattern 1
  push();
  strokeWeight(0.5);
  stroke(255, second());
  translate(0, 0)
  let ang = 30
  for (i = 0; i < 2; i++) {

    let r = width

    let dx = r * cos(ang);
    let dy = r * sin(ang);
    line(0, 0, 0 + dx, 0 + dy);
    ang += 30
  }
  pop();
//line pattern 2
  push();
  strokeWeight(0.5);
  stroke(255, second());
  translate(width, height)
  let ang2 = 210
  for (i = 0; i < 2; i++) {

    var r2 = width

    var dx2 = r2 * cos(ang2);
    var dy2 = r2 * sin(ang2);
    line(0, 0, 0 + dx2, 0 + dy2);
    ang2 += 30
  }
  pop();
  push();
//line pattern 3
  strokeWeight(0.5);
  stroke(255, second());
  translate(width, 0)
  let ang3 = 120
  for (i = 0; i < 2; i++) {

    var r = width

    var dx = r * cos(ang3);
    var dy = r * sin(ang3);
    line(0, 0, 0 + dx, 0 + dy);
    ang3 += 30
  }
  pop();
//line pattern 4
  push();
  strokeWeight(0.5);
  stroke(255, second());
  translate(0, height)
  let ang4 = 300
  for (i = 0; i < 2; i++) {

    var r4 = width

    var dx4 = r4 * cos(ang4);
    var dy4 = r4 * sin(ang4);
    line(0, 0, 0 + dx4, 0 + dy4);
    ang4 += 30
  }
  pop();

//draw each clock with new origin variables
  c = {
    x: 0,
    y: 0,
  }

  clock();

  c = {
    x: width,
    y: height,
  }
  clock();

  c = {
    x: 0,
    y: height,
  }
  clock();

  c = {
    x: width,
    y: 0,
  }
  clock();

//center circle
  push();
  translate(width / 2, height / 2);
  noStroke();
  fill(255, second());
  ellipse(0, 0, 20, 20);
  pop();

} // ends draw