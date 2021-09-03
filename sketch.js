var END=0;

var bow,arrow,background1;
var bowImg, arrowImg;
var greenBalloonImg, redBalloonImg, pinkBalloonImg ,blueBalloonImg;
var backgroundImg;
var greenBalloonGroup,redBalloonGroup,pinkBalloonGroup,blueBalloonGroup;
var arrowGroup
var score;

     function preload()
   {
      backgroundImg = loadImage("background0.png");
      arrowImg = loadImage("arrow0.png");
      bowImg = loadImage("bow0.png");
      redBalloonImg = loadImage("red_balloon0.png");
      greenBalloonImg = loadImage("green_balloon0.png");
      pinkBalloonImg = loadImage("pink_balloon0.png");
      blueBalloonImg = loadImage("blue_balloon0.png");
    }     



    function setup() 
  {
      createCanvas(400, 400);
      
      //creating background
      background1 = createSprite(0,0,400,400);
      background1.addImage("moving",backgroundImg);
      background1.scale = 2.5;
      
      // creating bow to shoot arrow
      bow = createSprite(380,220,20,50);
      bow.addImage("staying",bowImg); 
      bow.scale = 1;
      
      redBalloonGroup = new Group();
      greenBalloonGroup = new Group();
      blueBalloonGroup = new Group();
      pinkBalloonGroup = new Group();
      arrowGroup = new Group();
     
      score = 0    
  }

    function draw() 
  {
    
      background(0);
      
      // moving ground
      background1.velocityX = -3 

      if (background1.x < 0)
     {
      background1.x = background1.width/2;
     }
  
      //moving bow
       bow.y = World.mouseY
  
      // release arrow when space key is pressed
       if (keyDown("space"))
      {
       createArrow();
      }
   
    
    
       if(arrowGroup.isTouching(redBalloonGroup))
      {
       redBalloonGroup.destroyEach();
       arrowGroup.destroyEach();
       score=score+1;
      }
    
       if(arrowGroup.isTouching(blueBalloonGroup))
      {
       blueBalloonGroup.destroyEach();
       arrowGroup.destroyEach();
       score=score+3;
      }
    
       if(arrowGroup.isTouching(greenBalloonGroup))
      {
       greenBalloonGroup.destroyEach();
       arrowGroup.destroyEach();
       score=score+1;
      }

       if(arrowGroup.isTouching(pinkBalloonGroup))
      {
       pinkBalloonGroup.destroyEach();
       arrowGroup.destroyEach();
       score=score+5;
      }
     
      //creating continous enemies
       var select_balloon = Math.round(random(1,4));
  
       if (World.frameCount % 100 == 0) 
      {
       if (select_balloon == 1) 
      {
       redBalloon();
      } 
       else if (select_balloon == 2) 
      {
       greenBalloon();
      } 
       else if (select_balloon == 3) 
      {
       blueBalloon();
      }
       else 
      {
       pinkBalloon();
      }
  }  
     
     drawSprites();
     text("Score: "+ score, 300,50);
  }


   // Creating  arrows for bow
    function createArrow()
   {
    var arrow= createSprite(100, 100, 60, 10);
    arrow.addImage("going",arrowImg);
    arrow.x = 360;
    arrow.y=bow.y;
    arrow.velocityX = -4;
    arrow.lifetime = 100;
    arrow.scale = 0.3;
    arrowGroup.add(arrow); 
  }

   function redBalloon()
  {
    var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
    red.addImage("coming",redBalloonImg);
    red.velocityX = 3;
    red.lifetime = 150;
    red.scale = 0.1;
    redBalloonGroup.add(red)
    red.debug=false;
    red.setCollider("circle",0,0,5);
  }

   function blueBalloon() 
  {
    var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
    blue.addImage("coming",blueBalloonImg);
    blue.velocityX = 3;
    blue.lifetime = 150;
    blue.scale = 0.1;
    blueBalloonGroup.add(blue)
    blue.debug=false;
    blue.setCollider("circle",0,0,5);
   }

   function greenBalloon()
  {
    var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
    green.addImage("coming",greenBalloonImg);
    green.velocityX = 3;
    green.lifetime = 150;
    green.scale = 0.1;
    greenBalloonGroup.add(green);
    green.debug=false;
    green.setCollider("circle",0,0,5);
   }

   function pinkBalloon() 
  {
    var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
    pink.addImage(pinkBalloonImg);
    pink.velocityX = 3;
    pink.lifetime = 150;
    pink.scale = 1
    pinkBalloonGroup.add(pink);
    pink.debug=false;
    pink.setCollider("circle",0,0,1);
  }