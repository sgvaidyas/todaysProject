var trex,trex_running;
var ground,groundImage;
var invisibleGround;
var cloudImage;
var cloudsGroup;

var ob1,ob2,ob3,ob4,ob5,ob6;
var obstaclesGroup;

function preload()
{
    trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
    groundImage = loadImage("ground2.png");
    cloudImage = loadImage("cloud.png");
    ob1 = loadImage("obstacle1.png");
    ob2 = loadImage("obstacle2.png");
    ob3 = loadImage("obstacle3.png");
    ob4 = loadImage("obstacle4.png");
    ob5 = loadImage("obstacle5.png");
    ob6 = loadImage("obstacle6.png");
    
}
function setup()
{
    createCanvas(1200,400);

    trex = createSprite(100,320,40,50);
    trex.addAnimation("running",trex_running);

    ground = createSprite(600, 360  ,1200,20);
    ground.addImage(groundImage);
    ground.velocityX = -4;

    invisibleGround = createSprite(600, 390  ,1200,20);
    invisibleGround.visible = false;

    cloudsGroup = new Group();
    obstaclesGroup = new Group();
}
function draw()
{
    background(255);

    if(keyDown("space"))
    {
        trex.velocityY=-10;
    }
    trex.velocityY += 0.5;
    trex.collide(invisibleGround);

    if(ground.x <0)
    {
        ground.x = ground.width/2;
    }
    drawClouds();
    drawObstacles();
    drawSprites();
}

function drawClouds()
{
    if(World.frameCount%100 === 0){
        var cloud = createSprite(1200,200,40,30);
        cloud.y = Math.round(random(60,250));
        cloud.scale = random(1,2.5);
        cloud.addImage(cloudImage);
        cloud.velocityX = -5;
        cloud.depth = trex.depth;
        trex.depth++;
        //console.log("cloud = " + cloud.depth + " trex= " + trex.depth);

        cloud.lifetime = 240;
        cloudsGroup.add(cloud);
    }
}

function  drawObstacles()
{
    if(World.frameCount%60===0)
    {
        var obstacle = createSprite(1200,370,20,40);
        obstacle.velocityX = -4;
        var rand = Math.round(random(1,6));
        switch(rand)
        {
            case 1:obstacle.addImage(ob1);break;
            case 2:obstacle.addImage(ob2);break;
            case 3:obstacle.addImage(ob3);break;
            case 4:obstacle.addImage(ob4);break;
            case 5:obstacle.addImage(ob5);break;
            case 6:obstacle.addImage(ob6);break; 
        }
        obstacle.scale = 0.7;
        obstacle.lifetime = 300;    
        obstaclesGroup.add(obstacle)    
    }
}




