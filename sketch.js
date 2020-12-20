const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground;
var ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option = {
    isStatic : true
  }

  ground = Bodies.rectangle(200,370,400,10,option);
  World.add(world,ground);

var ballOption = {
  restitution: 1

}

  ball = Bodies.circle(200, 200, 15, ballOption);
  World.add(world,ball);

  console.log(ball);

}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,10);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y, 15, 15); 
}