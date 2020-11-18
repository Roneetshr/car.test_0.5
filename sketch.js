var car,wall;

var speed,weight;

var object1,object2


function setup() {
  createCanvas(800,400);

  speed=random(55,90);
  weight=random(400,1500);

  car= createSprite(50, 200, 50, 50);
  car.velocityX = speed;

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
}


function deformation(object1,object2){


}