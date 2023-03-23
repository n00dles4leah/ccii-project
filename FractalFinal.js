//The len() function returns the number of items in an object. When the object is a string, 
//the len() function returns the number of characters in the string.

//The Math.floor() method rounds a number DOWN to the nearest integer.



var angle;
var mouseClickCount = 1;
var changeColorCount = 0;


//create the array of colors
const colorR = [112, 255, 255, 255, 233, 160, 50, 225];
const colorG = [214, 122, 151, 214, 255, 255, 75, 170];
const colorB = [255, 166, 112, 112, 112, 160, 100, 160];

function setup() {
  createCanvas(700, 700);
  angleMode(DEGREES);
  ellipseMode(CENTER);
}

function draw() {
  //50
  background(0);
  // pick an angle 0 to 180 degrees based on the mouse position
  angle = map(mouseX, 0, width, 0, 180); //180

  // Start the rectangle from the center of the screen
  translate(width / 2, height / 2);
  stroke(colorR[changeColorCount], colorG[changeColorCount], colorB[changeColorCount]);
  for(let i=0; i<=360; i+=60){
    push();
    rotate(i);
    branch(100, 1);
    pop();
  }
}

function branch(len) {
  // Draw the branch
  fill(colorR[changeColorCount], colorG[changeColorCount], colorB[changeColorCount], 70);
  //len*X,len*Y changes the shape of the object, either as a rect or an ellipse
  ellipse(0, 0, len*0.25, len*0.75);

  // Move to the end and shrink.
  translate(0, -len);
  //0.66 
  len *= 0.77;

//len>100
  if (len > 90 / mouseClickCount) {
    push();
    rotate(angle);
    branch(len);
    pop();

    // Repeat the same thing, only branch off to the "left" this time!
    push();
    rotate(-angle);
    branch(len);
    pop();
  }
}

function mouseClicked() {
  mouseClickCount++;
  changeColorCount = floor(random(8));
}
