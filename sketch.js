var peter;
var peterImage;
var groundImage;
var smoke,rock,mice,gift,troll,powerBoosters;
var smokeImage,rockImage,miceImage,giftImage,trollImage,powerBoostersImage;
var backgroundImage;
var edges;

function preload(){

backgroundImage=loadImage("mine.jpg");
}

function setup() {
  createCanvas(800,500);
  peter=createSprite(400, 200, 20, 50);
  peter.shapeColor="red";
  rock=createSprite(400,250,100,20);
  rock.shapeColor="yellow";
  edges=createEdgeSprites();
}

function draw() {
  background(backgroundImage);

if (keyDown(RIGHT_ARROW)){
  peter.x=peter.x+10;
}
if (keyDown(LEFT_ARROW)){
  peter.x=peter.x-10;
}
if (keyDown("space")){
  peter.velocityY=-10;
}
 peter.velocityY=peter.velocityY+0.5;
  peter.collide(rock);

  drawSprites();
}