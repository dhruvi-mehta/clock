let runtime;

function setup() {
  createCanvas(1500, 750);
}

function draw() {
  background(0);
  
  
hr=hour()
if (hr <= 4){
background(0)
}
  
else if (hr > 5){
background(229,222,68)
  }

  hr=hour()
  if (hr <= 8){
  background(229,222,68)
  }
    
  else if (hr > 9){
  background(239,129,14)
    }

    hr=hour()
    if (hr <= 17){
    background(5,55,82)
    }
      
    else if (hr > 20){
    background(0,26,38)
      }
  
    



//   hr=hour()
//   if (hr <= 12){
//   background(255)
//   }
    
//   else if (hr > 13){
//   background(0)
//     }
  
  let value3 = hour()
let m3 = map(value3, 0, 24, 0, height);
noStroke() 
fill(245, 245, 220)
ellipse(700, m3, 142.5, 142.5);
// rect(00, m3, 1500, 40);
  

noStroke()  
fill(210, 180, 140)
let value2 = minute()
let m2 = map(value2, 0, 60, 0, height);
ellipse(700, m2, 85.5, 85.5);
// rect(0, m2, 1500, 30);
  

noStroke()   
fill(178, 172, 136)
 let value1 = second()
let m1 = map(value1, 0, 60, 0, height);
ellipse(700, m1, 49.5, 49.5);
// rect(00, m1, 1500, 20);
}
