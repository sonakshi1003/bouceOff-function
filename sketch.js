var fixedRect,movingRect;

function setup() {
  createCanvas(1200,800);

  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityY = 8;

  movingRect = createSprite(400, 800, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -8;
}

function draw() {
  background(0);  

  bounceOff(movingRect,fixedRect);

  drawSprites();
}

