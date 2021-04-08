var canvas;
var music;
var surf1,surf2,surf3,surf4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surf1 = createSprite(0,580,360,30);
surf1.shapeColor="orange";

surf2 = createSprite(295,580,200,30);
surf2.shapeColor="blue";

surf3 = createSprite(515,580,200,30);
surf3.shapeColor="green";

surf4 = createSprite(740,580,220,30);
surf4.shapeColor="yellow";

box = createSprite(random(20,750),400,50,50);
box.shapeColor="white";
box.velocityX=7;
box.velocityY=7;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    edges= createEdgeSprites();
    box.bounceOff(edges);


    if(surf1.isTouching(box) && box.bounceOff(surf1)){
        box.shapeColor='orange';
    }

    if(surf2.isTouching(box) && box.bounceOff(surf2)){
        box.shapeColor='blue';
    }

    if(surf3.isTouching(box) && box.bounceOff(surf3)){
        box.shapeColor='green';
    }

    if(surf4.isTouching(box) && box.bounceOff(surf4)){
        box.shapeColor='yellow';
    }

   drawSprites();


    //add condition to check if box touching surface and make it box
}
