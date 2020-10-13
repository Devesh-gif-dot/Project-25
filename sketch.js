
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,bar1,bar2,bar3;
var bin,binImg;

function preload(){
	binImg = loadImage("dustbingreen.png");


}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(30,200,80,100);
	

	ground = new Ground(800,650,1600,10);

	bar1 = new Bar(960,590,10,100);
	bar2 = new Bar(1140,565,10,150);
	bar3 = new Bar(1050,640,210,10);
	bin = createSprite(1050,530,10,10);
	bin.addImage("dustbin",binImg);
	bin.scale = 0.7;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('white');
  
  paper.display();

  ground.display();

  bar1.display();
  bar2.display();
  bar3.display();
  //bin.display();


  
  keyPressed();


  drawSprites();
 
}
function keyPressed(){
  if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
	}
}


