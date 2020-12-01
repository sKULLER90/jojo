
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var bgImg;

function preload()
{
	bgImg = loadImage("bg3.jpg");
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(700,650,1400,20);
  ground2 = new Ground(1000,1000,10,10)
	paper = new Paper(100,100,80);
	dustbin1 = new Dustbin(1200,800,200,10);
	dustbin2 = new Dustbin(1180,550,40,150);
	dustbin3 = new Dustbin(1010,550,40,150);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  Engine.update(engine);

 
  paper.display();

 
  dustbin3.display();
  dustbin2.display();
  dustbin1.display();


  ground.display();
  ground2.display();

  drawSprites();
 
}



function keyPressed() {
  if(keyCode = UP_ARROW){}
   
  Matter.Body.applyForce(paper.body,paper.body.position,{x:400,y:-320})

}