var movingRect, fixedRect;
var rect1, rect2, rect3;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green"
  movingRect = createSprite(10, 10, 30, 30);
  movingRect.shapeColor="green"
  rect1 = createSprite(200, 200, 20, 50);
  rect1.shapeColor = "green"
  rect2 = createSprite(100, 60, 80, 40);
  rect2.shapeColor="green"
  rect3 = createSprite(100, 200, 70, 70);
  rect3.shapeColor="green"
  rect1.velocityX=-2;
  rect3.velocityX=3;
  

}

function draw() {
  background(255,255,255); 
  movingRect.y=mouseY;
  movingRect.x=mouseX;

  console.log(isTouching(rect1, movingRect));

  if(isTouching(rect1, movingRect)){
    rect1.shapeColor = "pink";
    movingRect.shapeColor = "pink";
  }else{
    rect1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
if(isTouching(rect2, movingRect)){
  rect2.shapeColor="blue";
  movingRect.shapeColor="blue";
}else{
  rect2.shapeColor="green";
  movingRect.shapeColor="green";
}

if(isTouching(rect3, movingRect)){
  rect3.shapeColor = "purple";
  movingRect.shapeColor= "purple";
}else{
  rect3.shapeColor="green";
  movingRect.shapeColor="green";
}
bounceOff(rect1, rect3)

  drawSprites();
}

