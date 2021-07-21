    var groundImg,ground;


    function preload(){
    
    groundImg = loadImage("ground.png")

    }

    function setup() {
        createCanvas(500,300);

    //ground
    ground = createSprite(300,130,40,20)
    ground.addImage(groundImg);
    ground.velocityX = -3;
    
    }

    function draw() {
    //background(0)

    //moving background

    if (ground.x < 0){
      ground.x = width/2;
    }
    
      
      

        drawSprites();
    
    }