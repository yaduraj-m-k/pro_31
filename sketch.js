const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var drops = [];
var maxDrops = 100;

function preload() {

}

function setup() {
    createCanvas(1500, 830)

    engine = Engine.create();
    world = engine.world;




    Engine.run(engine);


    for (var i = 0; i < maxDrops; i++) {
        drops.push(new Drops(random(0, 1500), random(0, 1500)))
    }

}

function draw() {
    background("black");

    for (var i = 0; i < maxDrops; i++) {
        drops[i].display();
    }
    drawSprites();
}

