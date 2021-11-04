//draw the arc
  arc(0, 0, width * radius, height * radius, 0, angle);
  
  pop();
}


function number(dotAngle) {
  push();
  translate(c.x, c.y);
  noStroke();
  fill(255,second()*4.25);
  
  //guide dots at each hour marker // size varies
  ellipse(width * 0.5 * cos(dotAngle), height * 0.5 * sin(dotAngle), second()/8);
  ellipse(width * 0.35 * cos(dotAngle), height * 0.35 * sin(dotAngle), second()/12);
	ellipse(width * 0.2 * cos(dotAngle), height * 0.2 * sin(dotAngle), second()/14);

  pop();
}