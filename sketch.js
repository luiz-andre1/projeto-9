var bolaCuadrada;

function setup() {
  createCanvas(400,400);
  bolaCuadrada=createSprite(200,200,10,10)
  bolaCuadrada.shapeColor=color("white")
}

function draw() 
{
  background(30);
  
  if(keyIsDown(DOWN_ARROW)){
    //bolaCuadrada.y=bolaCuadrada.y+5;
    background("orange")
  }
  
  
  if(keyIsDown(UP_ARROW)){
    bolaCuadrada.y=bolaCuadrada.y-5;
    
  }
  
  
  if(keyIsDown(LEFT_ARROW)){
    bolaCuadrada.x=bolaCuadrada.x-5;
    
  }
  
  if(keyIsDown(RIGHT_ARROW)){
    bolaCuadrada.x=bolaCuadrada.x+5;
    
  }
  
drawSprites()
}





