
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var bar1, bar2, bar3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	ground = createSprite(400,650,800,20)
	ground.shapeColor = "yellow";

	ball = new Paper(50,630,10);
	
	bar1 = createSprite(400,560,30,150)
	bar1.shapeColor = "white";
	bar2 = createSprite(520,620,250,30)
	bar2.shapeColor = "white";
	bar3 = createSprite(630,560,30,150)
	bar3.shapeColor = "white";
	



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
 keyPressed();
  
  drawSprites();
  
  
 ball.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		
		Matter.Body.applyForce(ball.body, ball.body.position,{x:85,y:-85});
	}
}


