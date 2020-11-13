
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup, ground
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400)
  
  monkey = createSprite(80, 315, 20,20)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.1
  
  ground = createSprite(400, 350, 900, 10)
  ground.velocityX = -4
 console.log(ground.x)
  
  foodGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
  background("lightgreen")
  
    ground.x = ground.width/2
  
  monkey.collide(ground)
  if (keyDown("space") && monkey.y > 310){
      monkey.velocityY = -14;
      }
  
  
  monkey.velocityY = monkey.velocityY+0.5;
  
  spawnFood();
  spawnRocks();
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score: " + score, 500,50)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time: " + survivalTime, 100,50)
  
  drawSprites();
}

function spawnFood(){
  var rand = Math.round(random(120,200))
  
  if(frameCount === 1){
    banana = createSprite(10000, 100000, 1, 1)
  }
  
  if (frameCount % 80 === 0){
    banana = createSprite(400, rand, 10, 10)
    banana.addImage(bananaImage)
    banana.scale = 0.1;
  }
  
    banana.velocityX = -3
  banana.lifetime = 40;
  foodGroup.add(banana)

}

function spawnRocks(){
  
  if(frameCount === 1){
    obstacle = createSprite(10000, 100000, 1, 1)
  }
  
  if (frameCount % 300 === 0){
    obstacle = createSprite(450, 305, 15, 15)
    obstacle.addImage(obstacleImage)
    obstacle.scale = 0.2;
  }
  obstacle.velocityX = -2.5;
  obstacle.lifetime = 25
  obstaclesGroup.add(obstacle)
}


