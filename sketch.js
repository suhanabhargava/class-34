const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var groundObj;
var b1,b2,b3,b4,b5;
var ballObj;
var ropeObj;
 


function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  groundObj = new ground(400,650,800,20);
  b1 = new building(600,100,80,80);
  b2 = new building(600,100,80,80);
  b3 = new building(720,100,80,80);
  b4 = new building(600,100,80,80);
  b5 = new building(720,100,80,80);
  ballObj = new ball(450,300,70);
  ropeObj = new SlingShot(ballObj.body,{x:450, y:300});
 




    
}
 
function mouseDragged(){
  Matter.Body.setPosition(ballObj.body,{x: mouseX, y:mouseY})
}

function draw() {
  background("black");
  Engine.update(engine);
  groundObj.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  ballObj.display();
  ropeObj.display();

  

   
}
