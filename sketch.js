var paper,ground,bin1,bin2,bin3,dustbin,dustbinimg;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload(){
	dustbinimg = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	dustbin = createSprite(600,560,10,10)
	dustbin.addImage(dustbinimg);
	dustbin.scale = 0.5;

	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50,600)
	bin1 = new Bin(600,640,160,20)
	bin2 = new Bin(530,560,20,168)
	bin3 = new Bin(670,560,20,168)

	//Create a Ground
	ground = new Ground(400,650,800,10)


	Engine.run(engine);
  
}  

function draw() {
  rectMode(CENTER);
  background(255);
  
  paper.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();
  drawSprites();
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:560, y:-600});
	}
}