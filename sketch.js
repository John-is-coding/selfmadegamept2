var monkey, monkey_run_animation
var backgroundImg, bg
var ground
var rock1, rock2, rock3
var obstacle, obstacleGroup
function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(width/2,height/2)
  bg.addImage(backgroundImg)
  bg.scale = 7
  monkey = createSprite(300,500,50,50)
  monkey.addAnimation("running", monkey_run_animation)
  monkey.scale = 2
  ground = createSprite(300,650,400,10)
  ground.visible = false



}

function draw() 
{
  
  background("white");
  if (keyDown("space") && monkey.y > 480) {
    monkey.velocityY = -15
  }
  // gravity
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground)
  spawnRocks()

  drawSprites()

}

function preload() {
  monkey_run_animation = loadAnimation("assests/m1.png","assests/m2.png","assests/m3.png","assests/m4.png")
  backgroundImg = loadImage("assests/background.jpeg")
  rock1 = loadImage("assests/rock.jpeg")
  rock2 = loadImage("assests/rock2.jpeg")
  rock3 = loadImage("assests/rock3.jpeg")


}
function spawnRocks(){
  if (frameCount % 80 == 0) {
    obstacle = createSprite(width,height/1.5)
    obstacle.velocityX = -17
    var randomNumber = Math.round(random(1,3))
    console.log(randomNumber)
    if (randomNumber == 1){
      obstacle.addImage(rock1)
    }
    if (randomNumber == 2){
      obstacle.addImage(rock2)
    }
    if (randomNumber == 3){
      obstacle.addImage(rock3)
    }
  }
  
}
