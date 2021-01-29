var fixedRect, movingRect, newRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  newRect=createSprite(100,500,70,80)
  newRect2=createSprite(500,30,40,100)
  newRect3=createSprite(300,200,20,200)
newRect.shapeColor="pink"
newRect.velocityX=5
}

function draw() {
  background(0,0,0);  

if(isTouching(movingRect,fixedRect)){
movingRect.shapeColor="blue"
fixedRect.shapeColor="red"
}
if(isTouching(newRect,movingRect)){
  movingRect.shapeColor="red"
newRect.shapeColor="blue"
}
if(isTouching(newRect,newRect2)){
  newRect2.shapeColor="red"
newRect.shapeColor="blue"
}
if(isTouching(newRect,newRect3)){
  newRect2.shapeColor="orange"
newRect.shapeColor="yellow"
}
bounce(newRect,movingRect)
bounce(newRect,fixedRect)
bounce(newRect,newRect2)
bounce(newRect,newRect3)
  drawSprites();
}
function bounce(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
  && object2.x - object1.x < object2.width/2 + object1.width/2){
    object1.velocityX=-1*object1.velocityX
  }
  if(object1.y - object2.y < object2.height/2 + object1.height/2
  && object2.y - object1.y < object2.height/2 + object1.height/2) {
  object1.velocityY=-1*object1.velocityY
}
}
