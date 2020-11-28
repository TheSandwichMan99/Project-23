//declaring variables
var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, box
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
//set variables to images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	//make creation space for compiler to draw on
	createCanvas(800, 700);
	rectMode(CENTER);
	
//create package
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
//create helicopter
	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
//create ground
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
//create box "drop zone"
	boxSprite=createSprite(400, height-45, 150,10)
	boxSprite.shapeColor=color(255,0,0)

	boxleftSprite=createSprite(320, height-90, 10,100)
	boxleftSprite.shapeColor=color(255,0,0)

	boxrightSprite=createSprite(470, height-90, 10,100)
	boxrightSprite.shapeColor=color(255,0,0)

	
//make engine to apply things that need engine and create world to put data in
	engine = Engine.create();
	world = engine.world;
//make package collider
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	fill(255);
	textSize(24);
    text("You Win!", 180, 200);
	//create box "drop zone" properties
	box = Bodies.rectangle(width/2, 650, width, 40 , {isStatic:true} );
	World.add(world, box);
	//Create ground properties
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
//make background black rectangle
  rectMode(CENTER);
  background(0);
//
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

//get the package to drop when down arrow key is pressed
function keyPressed() {	
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	    
  }
}



