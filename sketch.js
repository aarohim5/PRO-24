
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var paper;
var log1;
var engine,world;

function setup() {
	var canvas = createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ground = new Ground(600,height,1200,20);
  paper = new Paper(100,370,20);
  log1 = new Logs(1000,385,200,10);
	log2 = new Logs(900,339,10,100);
	log3 = new Logs(1100,339,10,100);
	Engine.run(engine);
  
}


function draw() {
 rectMode(CENTER);
  background(0);
  Engine.update(engine);

  keyPressed();

  ground.display();
  paper.display();
  log1.display();
  log2.display();
  log3.display();

  drawSprites(0);
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-15});
  }
}
		
	


