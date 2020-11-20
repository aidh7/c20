var fixedRect, movingRect;





function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = 'white'

  movingRect = createSprite(600, 200, 50, 50);
  movingRect.shapeColor = 'white'
}

function draw() {
  background(10,150,150); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
  fixedRect.x - movingRect.x <  movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
  fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2 
  ){
  fixedRect.shapeColor = 'red'
  movingRect.shapeColor = 'red'
}
else{
  fixedRect.shapeColor = 'white'
  movingRect.shapeColor = 'white'
}

  drawSprites();   
}